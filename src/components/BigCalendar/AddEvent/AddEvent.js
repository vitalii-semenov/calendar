import React, {forwardRef, useEffect, useState} from 'react';
import {ColorPicker} from 'primereact/colorpicker';
import {Calendar} from 'primereact/calendar';
import {InputText} from 'primereact/inputtext';
import closeImg from '../../../assets/pictures/highlight_off-24px.svg';

import styles from './AddEvent.module.scss';

const AddEvent = forwardRef((props, ref) => {
  const [state, setState] = useState({
    title: '',
    start: '',
    color: '',
    message: '',
  });

  useEffect(() => {
    setState({
      title: props.tempEvent.title || '',
      start: props.tempEvent.start || '',
      color: props.tempEvent.color || 'ffffff',
      message: props.tempEvent.message || '',
    });
  }, [props.tempEvent]);

  return (
      <div ref={ref} className={styles.container}>
        <div className={styles.form}>
          <img src={closeImg} alt="" className={styles.closeIcon} onClick={() => ref.current.style.display = 'none'} />
          <h3>Title:</h3>
          <InputText
            name={'title'}
            value={state.title}
            onChange={(e) => {
              e.persist();
              setState(prevState => ({...prevState, title: e.target.value}));
          }}/>

          <h3>Time:</h3>
          <Calendar name={'date'}
                    value={state.start}
                    onChange={(e) => setState(prevState => ({...prevState, start: e.value}))}
                    timeOnly={true}
                    hourFormat="12"/>

          <h3>Title color</h3>
          <ColorPicker className={'color'}
                       value={state.color}
                       onChange={(e) => setState(prevState => ({...prevState, color: e.value}))}/>

          <h3>Message:</h3>
          <InputText
            name={'message'}
            value={state.message}
            onChange={(e) => {
              e.persist();
              setState(prevState => ({...prevState, message: e.target.value}));
          }}/>

          <div className={styles.buttonContainer}>
            <a style={{color: '#FF5F5F'}} href="/#"
               onClick={() => ref.current.style.display = 'none'}>Cancel</a>
            <a style={{color: '#6A6996'}} href="/#" onClick={() => {
              props.tempEvent.id || props.tempEvent.id === 0 ?
                props.editEvent(state, props.tempEvent.id) : props.addNewEvent(state);
            }}>Save</a>
          </div>
        </div>
      </div>
  );
});

export default AddEvent;
