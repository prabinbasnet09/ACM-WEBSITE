import React, { useState, useEffect } from 'react'
import {Calendar, dateFnsLocalizer} from "react-big-calendar"
import format from "date-fns/format"
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from "date-fns/getDay"
import enUs from "date-fns/locale/en-US"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-big-calendar/lib/css/react-big-calendar.css"
import ImageSlider from '../layout/imageSlider'

const locales = {
  "en-US": enUs
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

function CurrentEvents() {
  // const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState([]);
  const getAllEvents = async () => {
    const res =  await fetch(`http://127.0.0.1:8000/api/events/`);
    const response  = await res.json();
    return response;
  }
  
  // useEffect(() => {
  //   const getEvents = getAllEvents();
  //   console.log(getEvents);
  //   setAllEvents(getEvents);
  //   console.log(allEvents);
  // }, [])

  const containerStyles = {
    width: "1000px",
    height: "680px",
    margin: "0 auto",
    padding: "20px"
  };
  
  // function handleAddEvent() {
  //   for (let i=0; i<allEvents.length; i++){
  //     const d1 = new Date (allEvents[i].start);
  //     const d2 = new Date(newEvent.start);
  //     const d3 = new Date(allEvents[i].end);
  //     const d4 = new Date(newEvent.end)

  //       if (
  //       ( (d1  <= d2) && (d2 <= d3) ) || ( (d1  <= d4) &&
  //         (d4 <= d3) )
  //       )
  //     {   
  //         alert("CLASH"); 
  //         break;
  //       }
  //   }
  //   setAllEvents([...allEvents, newEvent]);
  // }

  return (
    <div className="App">
      <Calendar localizer={localizer} 
        events={allEvents} 
        startAccessor="start" 
        endAccessor="end" 
        style={{ height: 500, margin: "50px" }} 
      />
      
      
      {/* <div>
        <h2>Add New Event</h2>
          <input  type="text" 
                  placeholder="Add Title" 
                  style={{ width: "20%", marginRight: "10px" }} 
                  value={newEvent.title} 
                  onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
          <DatePicker placeholderText="Start Date" 
                      style={{ marginRight: "10px" }} 
                      selected={newEvent.start} 
                      onChange={(start) => 
                        setNewEvent({ ...newEvent, start })} 
          />
          <DatePicker placeholderText="End Date" 
                      selected={newEvent.end} 
                      onChange={(end) => setNewEvent({ ...newEvent, end })} 
          />
          <button stlye={{ marginTop: "10px" }} 
                  onClick={handleAddEvent}>
              Add Event
          </button>
      </div> */}

      <div className='gallery'>
        <p className='gallery--title'>ULM ACM Events Gallery</p>
        <div style={containerStyles}>
          <ImageSlider />
        </div>
      </div>

    </div>
  );
}

export default CurrentEvents;

