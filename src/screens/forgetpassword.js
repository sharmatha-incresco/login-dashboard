import React, { useState } from "react";
import { CognitoUser } from "amazon-cognito-identity-js";
import Pool from "../UserPool";

function Forgetpassword() {
  const [stage, setStage] = useState(1); // 1 = email stage, 2 = code stage
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const getUser = () => {
    return new CognitoUser({
      Username: email.toLowerCase(),
      Pool,
    });
  };

  const sendCode = (event) => {
    event.preventDefault();

    getUser().forgotPassword({
      onSuccess: (data) => {
        console.log("onSuccess:", data);
      },
      onFailure: (err) => {
        console.error("onFailure:", err);
      },
      inputVerificationCode: (data) => {
        console.log("Input code:", data);
        setStage(2);
      },
    });
  };

  const resetPassword = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      console.error("Passwords are not the same");
      return;
    }

    getUser().confirmPassword(code, password, {
      onSuccess: (data) => {
        console.log("onSuccess:", data);
      },
      onFailure: (err) => {
        console.error("onFailure:", err);
      },
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-yellow-600 to-yellow-500">
       <div className="w-[570]  m-auto bg-white rounded-md shadow-md lg:max-w-xl" style={{ width: '400px' }}>
      {stage === 1 && (
        <form onSubmit={sendCode}>
          <div className="w-[570] p-4 m-auto bg-white rounded-md shadow-md lg:max-w-xl" style={{ width: '400px' }}>
              <div>
                <h1 className="text-center text-2xl font-semibold">
                  Learning Portal
                </h1>
                <br />
                <h2 className="text-center font-medium ">FORGET PASSWORD</h2>
                <h4 className="text-center text-gray-500 text-xs">
                  Enter your email to verify your account
                </h4>
              </div>
              <br />
              <div className="mb-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Email
                </label>
                <input
                  type={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-yellow-700 bg-white border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <br />

              <div className="px-3">
                <button
                  type="submit"
                  className="border px-32 bg-yellow-500 text-white rounded-sm border-yellow-500"
                >
                  SEND VERIFICATION
                </button>
              </div>
            </div>
        </form>
      )}
      {stage === 2 && (
        <form onSubmit={resetPassword}>
          <div className="px-40 pt-32">
            <div className="bg-gradient-to-r from-yellow-600 to-yellow-400 bg-white mx-80 w-fit h-112 p-5 rounded-xl">
              <br />
              <div className="mb-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semiboldtext-gray-800"
                >
                  Code
                </label>
                <input
                  value={code}
                  onChange={(event) => setCode(event.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-yellow-700 bg-white border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Password
                </label>
                <input
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-yellow-700 bg-white border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Confirm Password
                </label>
                <input
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-yellow-700 bg-white border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <br />

              <div className="px-3">
                <button
                  type="submit"
                  className="border px-32 bg-yellow-500 text-white rounded-sm border-yellow-500"
                >
                  CHANGE PASSWORD
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
      </div>
      </div>
  );
}

export default Forgetpassword;
{/* <h4 className="text-center text-gray-500 text-xs">
Enter your email to verify your account
</h4>
</div>
<br />
<div className="mb-2">
<label
htmlFor="email"
className="block text-sm font-semibold text-gray-800"
>
Email
</label>
<input
type={email}
onChange={(event) => setEmail(event.target.value)}
className="block w-full px-4 py-2 mt-2 text-yellow-700 bg-white border rounded-md focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
/>
</div>

<br />

<div className="px-3">
<button
type="submit"
className="border px-32 bg-yellow-500 text-white rounded-sm border-yellow-500"
>
SEND VERIFICATION
</button>
</div> */}