import React from 'react'
import { useState } from 'react';
import Task from '../components/Task';
function Planner() {
        const [boxData,setBox] = useState([
        {
            title : "Appointement with the doctor" ,
             startTime:9,
             endTime:10,
            place:"Ain-taya",
            done:true,
            delete:false,
            bg_color: "#2B0A4C"
        },
        {
            title : "Have a walk" ,
            startTime:15,
            endTime:16,
           place:"ben aknoun",
           done:false,
           delete:false,
           bg_color: "#B595D6"
        },
        {
            title : "Have dinner with Ali" ,
            startTime:19,
            endTime:20,
           place:"Ain-taya",
           done:false,
           delete:false,
           bg_color: "#7A87B8"
        }
    ]);
    // const formattedDate = currentDate.toLocaleDateString();
  return (
    <div className="bg-gradient-to-b from-purple-900 via-purple-400 to-purple-100 h-screen m-h-screen flex items-center justify-center">
    <img src="/public/planner.svg" alt="Home Header" className="absolute z-10" style={{ position: 'fixed', top: '10%' }}/>
  <div className="bg-pink-100  bg-opacity-50 w-full
    bottom-0 border-black   px-8 py-16  rounded-t-3xl shadow-md text-center fixed" style={{ height: '65vh' }}>
    {/* <h2 className="text-3xl uppercase font-semibold">{formattedDate}</h2> */}
    <h2 className="text-xl  font-semibold">Today 24th february 2024</h2>
    <div className="flex items-center mt-4 "  >
  <div className="w-full border-t border-black border-dashed border-3"></div>
  <div className="w-full border-t border-black border-dashed border-3"></div>
</div>
<div id='tasks'>
{boxData.map((box, index) => (
          <Task key={index} bg_colorcolor={box.bg_color} startTime={box.startTime} endTime={box.endTime} title={box.title} place={box.place} done={box.done} setBox={setBox} />
        ))}
  </div>
  </div>
</div>
  )
}
export default Planner