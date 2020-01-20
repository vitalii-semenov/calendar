import React, {Component, createRef} from 'react';
import {Calendar, Views, momentLocalizer} from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import moment from 'moment';
import styles from './BigCalendar.module.scss';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import AddEvent from './AddEvent';

const localizer = momentLocalizer(moment);

const DragAndDropCalendar = withDragAndDrop(Calendar);

const now = new Date();

class BigCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      tempEvent: '',
      cursorPosition: {},
    };

    this.moveEvent = this.moveEvent.bind(this);
    this.newEvent = this.newEvent.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', (e) => {
      this.setState({
        cursorPosition: {
          x: e.clientX,
          y: e.clientY,
        },
      });
    });
  }

  moveEvent({event, start, end, isAllDay: droppedOnAllDaySlot}) {
    const {events} = this.state;

    const idx = events.indexOf(event);
    let allDay = event.allDay;

    if (!event.allDay && droppedOnAllDaySlot) {
      allDay = true;
    } else if (event.allDay && !droppedOnAllDaySlot) {
      allDay = false;
    }

    const updatedEvent = {...event, start, end, allDay};

    const nextEvents = [...events];
    nextEvents.splice(idx, 1, updatedEvent);

    this.setState({
      events: nextEvents,
    });

  }

  resizeEvent = ({event, start, end}) => {
    const {events} = this.state;

    const nextEvents = events.map(existingEvent => {
      return existingEvent.id == event.id
          ? {...existingEvent, start, end}
          : existingEvent;
    });

    this.setState({
      events: nextEvents,
    });

  };

  newEvent(event) {
    const {cursorPosition} = this.state;
    const addPopup = this.myRef.current;
    addPopup.style.cssText = `
      display: block;
      top: ${cursorPosition.y + 10}px;
      left: ${cursorPosition.x - 200}px;
    `;
    this.setState({tempEvent: event});
  }

  addNewEvent = (data) => {
    const addPopup = this.myRef.current;
    addPopup.style.display = 'none';
    const {tempEvent} = this.state;
    let idList = this.state.events.map(a => a.id);
    let newId = idList.length ? Math.max(...idList) + 1 : 0;
    const addTime = moment(tempEvent.start);
    let endTime = moment(tempEvent.start).add(moment(tempEvent.end).diff(moment(tempEvent.start)));
    let hour = {
      id: newId,
      title: data.title,
      start: addTime.toDate(),
      end: endTime.toDate(),
      color: data.color,
      message: data.message,
      allDay: false,
    };
    this.setState({
      events: this.state.events.concat([hour]),
    });
  };

  editEvent = (data, id) => {
    const {events} = this.state;
    let changeableEvents = [...events];
    const addPopup = this.myRef.current;
    addPopup.style.display = 'none';
    const addTime = moment(data.start);
    const diff = moment(changeableEvents[id].end).diff(moment(changeableEvents[id].start));
    let endTime;
    if (diff >= 0) {
      endTime = moment(data.start).add(diff);
    } else {
      endTime = moment(data.start).add({minute: 30})
    }
    changeableEvents[id] = {
      id: changeableEvents[id].id,
      title: data.title,
      start: addTime.toDate(),
      end: endTime.toDate(),
      color: data.color,
      message: data.message,
      allDay: false,
    };
    this.setState({
      events: changeableEvents,
    });
  };

  removeEvent = (id) => {
    const withDeletedEvent = [...this.state.events].filter(el => el.id !== id);
    return this.setState({
      events: withDeletedEvent
    })
  };

  myRef = createRef();

  render() {
    return (
        <div className={styles.container}>
          <div className={styles.calendarHeader}>
            <h2>Calendar</h2>
          </div>
          <AddEvent editEvent={this.editEvent} tempEvent={this.state.tempEvent} addNewEvent={this.addNewEvent}
                    events={this.state.events} ref={this.myRef} removeEvent={this.removeEvent}/>
          <div className={styles.calendarContainer}>
            <h2>Calendar view</h2>
            <DragAndDropCalendar
                selectable
                localizer={localizer}
                events={this.state.events}
                onEventDrop={this.moveEvent}
                resizable
                onEventResize={this.resizeEvent}
                onSelectSlot={(e) => this.newEvent(e)}
                onDragStart={console.log}
                defaultView={Views.MONTH}
                defaultDate={now}
                popup
                onSelectEvent={event => this.newEvent(event)}
                components={{
                  event: EventsWrapper,
                }}
            />
          </div>
        </div>
    );
  }
}

export default BigCalendar;

const EventsWrapper = (e) => {
  return <span className={styles.titleWrapper} style={{color: `#${e.event.color}`}}>{e.title}</span>;
};
