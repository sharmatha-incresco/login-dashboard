import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // State to track button disable/enable

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  function signupval() {
    if (validateForm()) {
      axios
        .post("auth/register", {
          email: email,
          password: password,
          name: name,
        })
        .then(() => {
          alert("SignedUp success");
          navigate("/students");
        })
        .catch((error) => {
          console.error(error);
          alert("SignedUp failed");
        });
    }
  }

  function validateForm() {
    const emailRegex =/^[\w\.-]+@[\w\.-]+\.\w+$/;
    const nameRegex = /^[A-Za-z]+[A-Za-z ]*$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const isEmailValid = emailRegex.test(email);
    const isNameValid = nameRegex.test(name);
    const isPasswordValid = passwordRegex.test(password);

    return isEmailValid && isNameValid && isPasswordValid;
  }

  function handleInputChange(e) {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    if (inputName === "email") {
      setEmail(inputValue);
    } else if (inputName === "password") {
      setPassword(inputValue);
    } else if (inputName === "name") {
      setName(inputValue);
    }

    const isValidForm = validateForm();
    setIsButtonDisabled(!isValidForm);
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-yellow-600 to-yellow-500">
      <div className="w-[570] p-5 m-auto bg-white rounded-md shadow-md lg:max-w-xl" style={{ width: "500px" }}>
        <h1 className="text-3xl font-semibold text-center text-balck-700">
          Learning Portal
        </h1>
        <br />
        <h1 className="text-2xl font-semibold text-center">
          Sign Up
        </h1>

        <form className="m-1">
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 mt-2 text-yellow-700 bg-white border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-800"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 mt-2 text-yellow-700 bg-white border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <div className="relative w-full container mx-auto pb-6 mt-15">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              <input
                type={isPasswordVisible ? "text" : "password"}
                name="password"
                value={password}
                onChange={handleInputChange}
                className="block w-full px-4 py-2 mt-2 text-yellow-700 bg-white border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center px-4 text-yellow-700"
                onClick={togglePasswordVisibility}
              >
                {isPasswordVisible ? (
                 <svg
                 viewBox="0 0 640 512"
                 fill="currentColor"
                 height="1em"
                 width="1em"
               >
                 <path d="M150.7 92.77C195 58.27 251.8 32 320 32c80.8 0 145.5 36.84 192.6 80.6 46.8 43.4 78.1 94.5 92.9 131.1 3.3 7.9 3.3 16.7 0 24.6-13.4 32.3-40.3 77.8-79.9 118.4l105.2 82.4c10.4 8.2 12.3 23.3 4.1 33.7-8.2 10.4-23.3 12.3-33.7 4.1L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196 13.29-1.236 28.37-3.065 38.81 5.112L150.7 92.77zm39.1 30.73l46 36c22.5-19.6 52-31.5 84.2-31.5 70.7 0 128 57.3 128 128 0 21.2-5.1 41.1-14.2 58.7l53.8 42.2c33.5-34.1 58.3-73.8 71-100.9-14.5-30.9-40.2-72.5-78.7-108.3-41.1-38.1-94.7-68.6-159.9-68.6-50.5 0-94.9 18.63-130.2 44.4zm205.1 160.7c3.3-8.8 5.1-18.3 5.1-29.1 0-43.3-35.8-80-80-80-.7 0-1.3.9-2.9.9 2.2 5.1 2.9 10.5 2.9 15.1 0 11.1-2.4 20.7-6.6 29.2l81.5 63.9zm9.4 130.3l41.9 33C409.9 467.1 367.8 480 320 480c-80.8 0-145.5-36.8-192.6-80.6-46.78-44.3-78.06-95.4-92.94-131.1a31.98 31.98 0 010-24.6c9.54-22.9 25.83-52.5 48.63-82.2l37.71 29.7c-18.7 23.3-31.04 46.4-39.35 63.9 13.57 30.9 40.15 73.4 78.65 109.2C201.2 402.4 254.8 432 320 432c30.7 0 58.8-6.6 84.3-17.5zM192 255.1c0-2 .1-4.8.3-7.6l56.1 44.2c10.5 21.1 30.1 36.9 53.6 41.4l56.2 45.1c-12.1 2.9-24.9 5.8-39.1 5.8-69.8 0-128-57.3-128-128.9h.9z" />
               </svg>
                ) : (
                    <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <path d="M15 12 A3 3 0 0 1 12 15 A3 3 0 0 1 9 12 A3 3 0 0 1 15 12 z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <button
            type="button"
            disabled={!validateForm()} // Disable button if form is not valid
            onClick={signupval}
            className={`w-full py-2 mt-6 font-semibold text-white transition-all duration-150 ease-in-out bg-yellow-600 rounded-md ${
              isButtonDisabled && "opacity-50 cursor-not-allowed"
            }`}
          >
            Sign Up
          </button>
          <p className="mt-8 mb-8 text-xs font-light text-center text-gray-700" >
                    {" "}  Not A New Uesr?{" "}
                   <a
                        href="/"
                        className="font-medium text-yellow-600 hover:underline">
                       SignIn
                    </a>
                </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;


// import axios from "axios";
// import { useState } from "react";
// import { Navigate, useNavigate } from "react-router-dom";
// import { Auth } from 'aws-amplify';

// function SignUp() {
//     const [email, setemail] = useState("")
//     const [pass, setpass] = useState("")
//     const [name, setname] = useState("")
//     const navigate = useNavigate()
//     const [isPasswordVisible, setIsPasswordVisible] = useState(false);
//     function togglePasswordVisibility() {
//         setIsPasswordVisible((prevState) => !prevState);
//       }
//     function signupval() {
//         if (validateForm())
//             axios.post('auth/register', {
//                 "email": email,
//                 "password": pass,
//                "name": name
//             }).then(() => {
//                 alert("SignedUp sucesss")
//                 // return <Navigate replace to={'/home'} />
//                 navigate('/students')

//             }
//             ).catch(error => {
//                 console.error(error);
//                 alert("SignedUp failed")
//                 // return <Navigate replace to={'/signin'} />

//             });

//     }
//     function validateForm() {

//         const emailval = RegExp(
//             "[a-z0-9]+@[a-z]+.[a-z]{2,3}"
//         );
//         const pattern = RegExp(
//             "^[A-Za-z]+[A-Za-z ]*$"
//         );
//         const passval = RegExp("^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$");
//         function validate(text, pattern) {
//             return pattern.test(text);
//         }

//         if (!validate(name, pattern)) {
//             alert(' Name is invalid')
//             return
//         }

//         // Check if the Email is an Empty string or not.
//         if (!validate(email, emailval)) {
//             alert('Email Address is invalid')
//             return
//         }
//         // if (!validate(pass, passval)) {
//         //     alert('Password is invalid')
//         //     return
//         // }


//         return true
//     }
//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-yellow-600 to-yellow-500" >
//             <div className="w-[570] p-5 m-auto bg-white rounded-md shadow-md lg:max-w-xl" style={{ width: "500px" }}>
//                 <h1 className="text-3xl font-semibold text-center text-balck-700 ">
//                     Learning Portal
//                 </h1>
//                 <br></br>
//                 <h1 className="text-2xl font-semibold text-center  ">
//                     Sign Up
//                 </h1>

//                 <form className="m-1">
//                     <div className="mb-2">
//                         <label
//                             for="email"
//                             className="block text-sm font-semibold text-gray-800"
//                         >
//                             Email
//                         </label>
//                         <input
//                             type="email"
//                             onChange={(e) => setemail(e.target.value)}
//                             className="block w-full px-4 py-2 mt-2 text-yellow-700 bg-white border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
//                         />
//                     </div>
//                  <div className="mb-2">
//                         <label
//                             for="name"
//                             className="block text-sm font-semibold text-gray-800"
//                         >
//                             Name
//                         </label>
//                         <input
//                             type="text"
//                             onChange={(e) => setname(e.target.value)}
//                             className="block w-full px-4 py-2 mt-2 text-yellow-700 bg-white border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
//                         />
//                     </div> 
//                      <div className="mb-2"> 
//                      <div className="relative w-full container mx-auto pb-6 mt-15">
//                         <label
//                             for="password"
//                             className="block text-sm font-semibold text-gray-800"
//                         >
//                             Password
//                         </label>
//                         <input
//                             type={isPasswordVisible ? "text" : "password"}
//                             onChange={(e) => setpass(e.target.value)}
//                             className="block w-full px-4 py-2 mt-2 text-yellow-700 bg-white border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            
//                         />
//                         <button
//         className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
//         onClick={togglePasswordVisibility}
//       >
//         {isPasswordVisible ? (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-5 h-5"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
//             />
//           </svg>
//         ) : (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-5 h-5"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
//             />
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//             />
//           </svg>
//         )}
//       </button>
//       </div>
//                     </div>
//                     <div className="mt-6">
//                         <button onClick={(e) => {
//                             e.preventDefault()
//                             signupval()
//                         }}
//                             className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-yellow-500 rounded-md hover:bg-yellow-400 focus:outline-none focus:bg-yellow-600">
//                             SignUp
//                         </button>
//                     </div>
//                 </form>
//                 <p className="mt-8 mb-8 text-xs font-light text-center text-gray-700" >
//                     {" "}
//                     Already have an account {" "}
//                     <a
//                         href="/"
//                         className="font-medium text-yellow-600 hover:underline"
//                     >
//                         SignIn
//                     </a>
//                 </p>
//             </div>
//         </div>
//     );
// }

// export default SignUp;
// import axios from "axios";
// import { useState } from "react";
// import { Amplify } from "aws-amplify";
// import { Navigate, useNavigate } from "react-router-dom";
// function SignUp() {
//     const [email, setemail] = useState("")
//     const [pass, setpass] = useState("")
//     const navigate = useNavigate()

//     function signupval() {
//         if (validateForm())
//             axios.post('auth/register', {
//                 "email": email,
//                 "password": pass,
//             }).then(() => {
//                 alert("SignedUp sucesss")
//                 // return <Navigate replace to={'/home'} />
//                 navigate('/students')

//             }
//             ).catch(error => {
//                 console.error(error);
//                 alert("SignedUp failed")
//                 // return <Navigate replace to={'/signin'} />

//             });

//     }
//     function validateForm() {

//         const emailval = RegExp(
//             "[a-z0-9]+@[a-z]+.[a-z]{2,3}"
//         );
//         const pattern = RegExp(
//             "^[A-Za-z]+[A-Za-z ]*$"
//         );
//         //const passval = RegExp("^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$");
//         function validate(text, pattern) {
//             return pattern.test(text);
//         }

//         // if (!validate(name, pattern)) {
//         //     alert(' Name is invalid')
//         //     return
//         // }

//         // Check if the Email is an Empty string or not.
//         if (!validate(email, emailval)) {
//             alert('Email Address is invalid')
//             return
//         }
//         // if (!validate(pass, passval)) {
//         //     alert('Password is invalid')
//         //     return
//         // }


//         return true
//     }
//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-yellow-600 to-yellow-500" >
//             <div className="w-[570] p-5 m-auto bg-white rounded-md shadow-md lg:max-w-xl" style={{ width: "500px" }}>
//                 <h1 className="text-3xl font-semibold text-center text-balck-700 ">
//                     Learning Portal
//                 </h1>
//                 <br></br>
//                 <h1 className="text-2xl font-semibold text-center  ">
//                     Sign Up
//                 </h1>

//                 <form className="m-1">
//                     <div className="mb-2">
//                         <label
//                             for="email"
//                             className="block text-sm font-semibold text-gray-800"
//                         >
//                             Email
//                         </label>
//                         <input
//                             type="email"
//                             onChange={(e) => setemail(e.target.value)}
//                             className="block w-full px-4 py-2 mt-2 text-yellow-700 bg-white border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
//                         />
//                     </div>
//                     {/* <div className="mb-2">
//                         <label
//                             for="name"
//                             className="block text-sm font-semibold text-gray-800"
//                         >
//                             Name
//                         </label>
//                         <input
//                             type="text"
//                             onChange={(e) => setname(e.target.value)}
//                             className="block w-full px-4 py-2 mt-2 text-yellow-700 bg-white border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
//                         />
//     </div>   */}
//                     <div className="mb-2"> 
//                         <label
//                             for="password"
//                             className="block text-sm font-semibold text-gray-800"
//                         >
//                             Password
//                         </label>
//                         <input
//                             type="password"
//                             onChange={(e) => setpass(e.target.value)}
//                             className="block w-full px-4 py-2 mt-2 text-yellow-700 bg-white border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
//                         />
//                     </div>
//                     <div className="mt-6">
//                         <button onClick={(e) => {
//                             e.preventDefault()
//                             signupval()
//                         }}
//                             className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-yellow-500 rounded-md hover:bg-yellow-400 focus:outline-none focus:bg-yellow-600">
//                             SignUp
//                         </button>
//                     </div>
//                 </form>
//                 <p className="mt-8 mb-8 text-xs font-light text-center text-gray-700" >
//                     {" "}
//                     Not A New Uesr?{" "}
//                     <a
//                         href="/"
//                         className="font-medium text-yellow-600 hover:underline"
//                     >
//                         SignIn
//                     </a>
//                 </p>
//             </div>
//         </div>
//     );
// }

// export default SignUp;
// import Input from "../components/input";
// import { useNavigate } from "react-router-dom";
// import {React} from 'react';
// import UserPool from "../UserPool";
// // import AuthContext from "./AuthProvider";
// // import axios from './axios';
// import { useState } from 'react';

// function Signup(){
//     const[email,setEmail]=useState("");
//     const[password,setPassword]=useState("")
//     const onSubmit=(event)=>{
//         event.preventDefault();
//         UserPool.signup(email,password,[],null,(err,data)=>{
//        if(err)
//        {
//         console.error(err);
//        }
//        console.Consolelog(data);
//         });
//     }; 
//     const navigate = useNavigate();
   
//     const nav_signup = ()=>{
//         navigate('/students');
//     };
//     return(
//          <div>
//             <form onSubmit={(onSubmit)}>
//             <div className="bg-gradient-to-r from-yellow-600 to-yellow-400 h-screen px-40 pt-32">
//          <div className="bg-white px-8 mx-80 w-fit h-112 p-5 rounded-xl">
//             <div>
//                 <h1 className="text-center text-2xl font-semibold">Learning Portal</h1><br/>
//                <h2 className="text-center font-medium ">SIGN UP</h2>
//                 <h4 className="text-center text-gray-500 text-xs">Enter your credentials to access your account</h4>
//          </div>
//            <br/>
//             <Input name = "Email" type = "text"/> 
//             <Input name = "Password" type = "password"/> 
//              <Input name="RePassword" type="password"/>
//          <br/>

//            <div className="px-3">
  
//            <button onClick={() => {alert('signup done');
//                {nav_signup()}
//                   }} className="border px-32 bg-yellow-500 text-white rounded-sm border-yellow-500" type="submit">SIGN UP</button>
//            </div>
//            </div>
//          </div>
//          {/* <label htmlFor="email">Email</label>
//          <input
//             value={email}
//             onChange={(event)=>setEmail(event.target.value)}>
//             </input>
//             <label htmlFor="password">Password</label>
//          <input
//             value={password}
//             onChange={(event)=>setPassword(event.target.value)}>
//     </input>*/}
//              </form> 
//             </div>)
//         // <div className="bg-gradient-to-r from-yellow-600 to-yellow-400 h-screen px-40 pt-32">
//         //   <div className="bg-white px-8 mx-80 w-fit h-112 p-5 rounded-xl">
//         //     <div>
//         //         <h1 className="text-center text-2xl font-semibold">Learning Portal</h1><br/>
//         //         <h2 className="text-center font-medium ">SIGN UP</h2>
//         //         <h4 className="text-center text-gray-500 text-xs">Enter your credentials to access your account</h4>
//         //     </div>
//         //     <br/>
//         //     <Input name = "Email" type = "text"/> 
//         //     <Input name = "Password" type = "password"/> 
//         //     <Input name="RePassword" type="password"/>
//         //     <br/>

//         //     <div className="px-3">
  
//         //       <button onClick={() => {alert('signup done');
//         //             {nav_signup()}
//         //           }} className="border px-32 bg-yellow-500 text-white rounded-sm border-yellow-500" type="submit">SIGN UP</button>
//         //     </div>
//         //    </div>
//         // </div>
//    // );
// //}
// }
// export default Signup;