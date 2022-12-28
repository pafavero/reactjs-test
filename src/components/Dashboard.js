import React from 'react';
import Calculator from './Calculator';
import LearnUseEffect from './LearnUseEffect';
import LearnUseEffect2 from './LearnUseEffect2';
import LearnUseRef from './LearnUseRef';
import 'react-calendar/dist/Calendar.css';
import TimeContainer from './TimeContainer';

export default function Dashboard() {
  return(
    <div >
      <div>  
        <h2>Dashboard</h2>
        <div className='container-dashboard'> 
          <div className="container-stl1">
            <Calculator />
          </div>
          <div className="container-stl1">
            <LearnUseEffect  />
            <LearnUseEffect2  />
            <LearnUseRef  />
          </div>
          {/* invece di fare svg, fare calendar tool in react e collegamento con db*/}
          {/* https://stackoverflow.com/questions/43464908/reactjs-connection-with-database */}
          <TimeContainer/>
        </div>
      </div>
    </div>
  )
}
