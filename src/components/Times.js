
// https://www.section.io/engineering-education/build-react-calendar-library/

import React from 'react'
import {useState} from 'react';
import Calendar from 'react-calendar';

const time = ['08:00','09:00','10:00','11:00','12:00','14:00','15:00','16:00','17:00',]

function Times(props) {

  const [event, setEvent] = useState(null)
  const [info, setInfo] = useState(false)

  function handleChange(e) {
    props.onTimeChange(e.target.innerText);
  }


return (
    <div className="times">
      {time.map((timeItem, index) => {
        return (
        <div key={index}  >
          <button key={index} onClick={(e)=> handleChange(e)}> {timeItem} </button>
        </div>
            )
        })}
    </div>
  )
}
export default Times;