
import React from 'react';
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css';
import Time from './Time.js'
// import ReactTooltip from 'react-tooltip';
import { useState } from 'react';

// function TimeContainerOld() {
//   // https://cloudconvert.com/dwg-to-svg
//   const [date, setDate] = useState(new Date());
//   const [showTime, setShowTime] = useState(false);
//   return (
//     <div className="container-stl1">
//       <button data-tip 
//         data-for="registerTip"
//         data-event='click focus'>
//         Choose a date...
//       </button>
//       <ReactTooltip id="registerTip" place="top" effect="solid" event="click" globalEventOff='click' >
//         <div>
//           <div className="calendar-container">
//             <Calendar onChange={setDate} value={date} selectRange={true} onClickDay={() => setShowTime(true)} />
//           </div>
//           {date.length > 0 ? (
//           <p>
//             <span>Start:</span>{' '} {date[0].toDateString()}
//             &nbsp; to &nbsp;
//             <span>End:</span> {date[1].toDateString()}
//           </p>
//                 ) : (
//           <p>
//             <span>Default selected date:</span>{' '} {date.toDateString()}
//           </p>
//           )}
//           <div>
//             <Time showTime={showTime} date={date}/>
//           </div>        
//         </div>
//       </ReactTooltip>
//     </div>
//   );
// }

function TimeContainer(props) {
  // https://cloudconvert.com/dwg-to-svg
  const [date, setDate] = useState(new Date());
  const [timeStr, setTime] = useState(null);
  const [showTime, setShowTime] = useState(false)
  const [isVisible, setVisible] = useState(false)
  
  function onTimeChange(_timeStr) {
    console.log('=========> onTimeChange', _timeStr);
    setTime(_timeStr);
    setVisible(false)
  }

  return (
    <div className="container-stl1 container-popup">
      <button onClick={() => { setVisible(!isVisible) }}>
        Choose a date...
      </button>
      <div className={isVisible?'show':'hidden'}>
        <div className="calendar-container">
          <Calendar onChange={setDate} value={date} selectRange={true} onClickDay={() => setShowTime(true)} />
        </div>
        {date.length > 0 ? (
        <p>
          <span>Start:</span>{' '} {date[0].toDateString()}
          &nbsp; to &nbsp;
          <span>End:</span> {date[1].toDateString()}
        </p>
              ) : (
        <p>
          <span>Default selected date:</span>{' '} {date.toDateString()}
        </p>
        )}
        <div>
          <Time showTime={showTime} date={date} onTimeChange={onTimeChange} />
        </div>
      </div>
      <div>
        {timeStr ? `Your appointment is set to ${timeStr} ${date}` : null}
      </div>
    </div>
  );
}

export default TimeContainer;

