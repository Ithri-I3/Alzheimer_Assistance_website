import React from 'react'
import Footer from './Home/Footer';
function Task(props) {
    const myStyles = {
        borderLeft: '8px solid {props.bg-color}',
        borderTopRightRadius: '20px', // Adjust the radius value as needed
        borderBottomRightRadius: '20px',
      };
  return (
    <div className='w-75 h-1/8 rounded-r-lg m-4  p-4 bg-white shadow-lg shadow-indigo-250/50' style={myStyles}>
        < div className='flex-column text-start '>
            <h4 className='text-xl'>  {props.title}</h4>
            <div className='flex justify-between'>
                <div className='w-3/14'>
                <p className='text-gray-500'>
  {props.startTime > 12 ? `${props.startTime - 12} PM` : `${props.startTime} AM`} _ {props.endTime > 12 ? `${props.endTime - 12} PM` : `${props.endTime} AM`}
</p>
            <p>{props.place}</p>
            </div>
            {/* <div className='checkBox w-12 bg-purple-400 mr-4 rounded-lg text-center flex justify-center items-center  ' onClick={()=>{setBox(!props.done)}}>
           {props.done && <box-icon name='check' className='font-bold text-3xl' ></box-icon>}
            </div> */}
              <div className='w-12 bg-purple-400 mr-4 rounded-lg text-center flex justify-center items-center'>
        <input
          type="checkbox"
        //   checked={props.done}
          onChange={() => { /* Handle checkbox change if needed */ }}
          className='form-checkbox h-6 w-6 text-indigo-600 bg-purple-400 '
        />
      </div>
            </div>
        </div>
        <div>
        <Footer />
        </div>
    </div>
  )
}
export default Task