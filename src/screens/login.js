import Input from "../components/input";
import { useNavigate } from "react-router-dom";
import {React, useRef} from 'react';
function Signin(){
  const navigate = useNavigate();

    const nav_home = ()=>{
        navigate('/home');
    };
    const myRef = useRef(null);
    return(
      <div className="bg-gradient-to-r from-yellow-600 to-yellow-400 h-screen px-40 pt-32">
        <div className="bg-white px-8 mx-80 w-fit h-112 p-5 rounded-xl">
          <div>
              <h1 className="text-center text-2xl font-semibold">Learning Portal</h1><br/>
              <h2 className="text-center font-medium ">SIGN IN</h2>
              <h4 className="text-center text-gray-500 text-xs">Enter your credentials to access your account</h4>
          </div>
          <br/>
          <Input name = "Email" type = "text"/> 
          <Input name = "Password" type = "password"/> 
          <br/>
          <div className="px-3">

            <button onClick={nav_home} className="border px-32 bg-yellow-500 text-white rounded-sm border-yellow-500" type="submit">SIGN IN</button>

            <p className="text-center p-5">Forgot your password ? <a href={myRef} className="text-yellow-500 underline" >Reset Password</a></p>

          </div>
        </div>
      </div>
  );
  
}
export default Signin;