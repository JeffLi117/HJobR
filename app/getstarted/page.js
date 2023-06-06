"use client";

import React, {useState} from "react";
import ApplicantInfo from "./ApplicantInfo";
import RecruiterInfo from "./RecruiterInfo";
import SignUpForm from "./SignUpForm";

export default function GetStarted() {

    const [show, setShow] = useState([true]);

    const handlerShowLeft = () => {
      setShow(true);
    }

    const handlerShowRight = () => {
      setShow(false);
    }

    return (
      <div className="flex flex-col justify-center items-center gap-4 m-4">
        <h1 className="text-3xl">I am a(n):</h1>
        <h2 className="flex justify-center items-center gap-1">
          <button type="button" className={`bg-gray-400 w-fit hover:bg-gray-200 flex gap-2 justify-center items-center focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 m-2 rounded ${show ? "bg-gray-600" : ""}`} onClick={handlerShowLeft}>Applicant</button>
          <button type="button" className={`bg-gray-400 w-fit hover:bg-gray-200 flex gap-2 justify-center items-center focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 m-2 rounded ${!show ? "bg-gray-600" : ""}`}onClick={handlerShowRight}>Recruiter</button>
        </h2>
        <div>Looking for:</div>
        <div className="flex flex-col justify-center items-center gap-4 bg-gray-300 m-2 p-2 rounded">
          {show ? <ApplicantInfo /> : <RecruiterInfo />}
        </div>
        <div>
          <SignUpForm />
        </div>
      </div>
    )
  }