import { useNavigate } from "react-router-dom";
function LoginSign() {
    const navigate=useNavigate();
    return (
      <div className="bg-gradient-to-b from-purple-900 via-purple-400 to-purple-100 h-screen m-h-screen flex items-center justify-center">
        <img src="/public/login.svg" alt="Home Header" className="absolute z-10" style={{ position: 'fixed', top: '20%' }}/>
      <div className="bg-pink-100  bg-opacity-50 w-full
        bottom-0 border-black   px-8 py-24  rounded-t-3xl shadow-md text-center fixed">
        <h2 className="text-3xl uppercase font-semibold" onClick={()=>navigate("/home")}>Login</h2>
        <div className="mt-4">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none"
          />
        </div>
        <div className="mt-4">
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none"
          />
        </div>
        <div className="flex justify-between justify-center text-center items-center">
          <p> forgot password?</p>
         <button
          id="email-login-button"
          className="bg-purple-600 text-white px-4 py-2 rounded-lg my-4 w-1/4 mr-4 float-right text-gray-200 text-lg"
        >
          Login
        </button>
        </div>
        <div className="flex items-center mt-4">
      <div className="w-full border-t border-black border-dashed border-3"></div>
      <div className="mx-4 text-gray-500">or</div>
      <div className="w-full border-t border-black border-dashed border-3"></div>
    </div>
        <button onClick={()=>navigate("/signup")}
          id="google-login-button"
          className=" text-black px-4 py-2 rounded-lg mt-4 w-full"
        >
        Sign Up
      </button>
      </div>
    </div>
    )
  }
  export default LoginSign