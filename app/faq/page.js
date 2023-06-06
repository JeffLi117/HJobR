"use client";

import { useState } from "react";

export default function FAQ() {
  const [q1, setQ1] = useState(true);
  const [q2, setQ2] = useState(true);
  const [q3, setQ3] = useState(true);

  return (
    <div className="flex flex-col justify-center items-center gap-4 m-4">
      <h1 className="text-2xl">Frequently Asked Questions</h1>
      <div className="flex flex-col justify-center items-center w-3/4 gap-4 m-2">
        <div onClick={()=>{setQ1(!q1)}}>What is HJobR?</div>
        {q1 ? (<div/>) : (<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>)}
        <div onClick={()=>{setQ2(!q2)}}>How do I apply for jobs with this?</div>
        {q2 ? (<div/>) : (<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>)}
        <div onClick={()=>{setQ3(!q3)}}>How do I recruit applicants with this?</div>
        {q3 ? (<div/>) : (<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>)}
        </div>
      </div>
      
  )
}