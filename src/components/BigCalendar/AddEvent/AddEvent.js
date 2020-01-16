import React, {forwardRef, useState} from 'react';
import {ColorPicker} from 'primereact/colorpicker';
import {Calendar} from 'primereact/calendar';
import {InputText} from 'primereact/inputtext';


import styles from './AddEvent.module.scss'

const AddEvent = forwardRef((props, ref) => {
  const [state, setState] = useState({
    title: '',
    date: '',
    color: '',
    message: ''
  });
  return (
      <div ref={ref} className={styles.container}>
        <div className={styles.form}>
          <h3>Title:</h3>
          <InputText name={'title'} value={state.title} onChange={(e) => {
            e.persist()
            setState(prevState => ({...prevState, title: e.target.value}))
          }} />
          <h3>Time:</h3>
          <Calendar name={'date'} value={state.date} onChange={(e) => setState(prevState => ({...prevState, date: e.value }))} timeOnly={true} hourFormat="24" />
          <h3>Title color</h3>
          <ColorPicker className={'color'} value={state.color} onChange={(e) => setState(prevState => ({...prevState, color: e.value }))} />
          <h3>Message:</h3>
          <InputText name={'message'} value={state.message} onChange={(e) => {
            e.persist()
            setState(prevState => ({...prevState, message: e.target.value}))
          }} />
          <div className={styles.buttonContainer}>
            <a href="/#">Cancel</a>
            <a href="/#" onClick={() => props.addNewEvent(state)}>Save</a>
          </div>
        </div>
      </div>
  );
});

export default AddEvent;