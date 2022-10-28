import React, { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);
  const toggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="relative">
        <input
          type={showPassword === false ? "password" : "text"}
          className="form-control block w-full px-3 py-1.5 text-sm bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:outline-none focus:ring-cyan-500 focus:ring-1 focus:border-cyan-500"
          placeholder="Password"
        />
        <div className="text-md absolute top-2.5 right-3 ">{showPassword === false ? <BsEye onClick={toggle} /> : <BsEyeSlash onClick={toggle} />}</div>
      </div>
    </>
  );
};

export default PasswordInput;
