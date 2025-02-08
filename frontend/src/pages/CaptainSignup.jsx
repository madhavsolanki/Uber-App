/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignUp = () => {

  const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userData, setUserData] = useState({});
  
    const submitHabler = (e) => {
      e.preventDefault();
      setUserData({
        username: {
          firstname: firstname,
          lastname: lastname,
        },
        email: email,
        password: password,
      });
      console.log(userData);
  
      setEmail("");
      setPassword("");
      setFirstname("");
      setLastname("");
    };

  return (
     <div className="p-7 h-screen flex flex-col justify-between">
          <div>
            <img
              className="w-20 mb-3"
              src="https://www.svgrepo.com/show/505031/uber-driver.svg"
              alt=""
            />
            <form
              onSubmit={(e) => {
                submitHabler(e);
              }}
            >
              <h3 className="text-base font-medium mb-2">What&apos;s your name</h3>
              <div className="flex flex-row mb-5 gap-3 items-center justify-center">
                <input
                  className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
                  required
                  type="text"
                  placeholder="First Name"
                  value={firstname}
                  onChange={(e) => {
                    setFirstname(e.target.value);
                  }}
                />
                <input
                  className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
                  required
                  type="text"
                  placeholder="Last Name"
                  value={lastname}
                  onChange={(e) => {
                    setLastname(e.target.value);
                  }}
                />
              </div>
              <h3 className="text-base font-medium mb-2">What&apos;s your email</h3>
              <input
                className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                required
                type="email"
                placeholder="email@exaple.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <h3 className="text-base font-medium mb-2">Enter Password</h3>
              <input
                className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                required
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <button className="bg-[#111] text-white font-semibold mb-5 rounded-md px-4 py-2 border w-full text-lg placeholder:text-base">
                Signup
              </button>
              <p className="text-center mb-3">
                Already have an Account?{" "}
                <Link to={"/login"} className="text-blue-600">
                  Login
                </Link>
              </p>
            </form>
          </div>
    
          <div>
            <p className="text-[10px] leading-tight">
              This site is protexted by reCAPTCHA and the <span className="underline">Google Privacy Policy</span> and <span className="underline">Terms of Service Apply</span>
            </p>
          </div>
        </div>
  )
}

export default CaptainSignUp