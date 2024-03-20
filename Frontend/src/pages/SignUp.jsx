import React from 'react'
import { useNavigate } from "react-router-dom";

function SignUp() {
    const navigate=useNavigate();

  return (
    <div className="bg-gradient-to-b from-purple-900 via-purple-400 to-purple-100 h-screen m-h-screen flex items-center justify-center">
        <img src="/public/login.svg" alt="Home Header" className="absolute z-10" style={{ position: 'fixed', top: '8%' }}/>
      <div className="bg-pink-100  bg-opacity-50 w-full
        bottom-0 border-black   px-8 py-24  rounded-t-3xl shadow-md text-center fixed">
        <h2 className="text-3xl uppercase font-semibold">Login</h2>
        <h4 className="text-l uppercase font-semibold mb-10">as a supervisor </h4>
        <div className="my-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none"
          />
        </div>
        <div className="my-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none"
          />
        </div>
        <div className="my-4">
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none"
          />
        </div>
        <div className="my-4">
          <input
            type="text"
            placeholder="Phone"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none"
          />
        </div>
        <div className="my-4">
          <input
            type="text"
            placeholder="Card ID "
            className="w-full px-4 py-2 border rounded-xl focus:outline-none"
          />
        </div>
        <div className=" text-center flex items-center justify-center ">
         <button
          id="email-login-button"
          className="bg-purple-600 text-white px-4 py-2 rounded-lg my-4 w-1/4 mr-4 float-right text-gray-200 text-lg" Click={()=>navigate("/signup2")}
        >
          Next
        </button>
        </div>
      </div>
    </div>
  )
}
export default SignUp