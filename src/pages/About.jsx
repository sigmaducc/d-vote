import React from "react";

const About = () => {
  return(
    <div >
    {/* <img src="https://i.pinimg.com/originals/bc/0c/5b/bc0c5b77a41dc721acb4acd75940bd42.png" alt="image" /> */}
    <h1 className="font-serif mx-auto max-w-sm w-full mt-60 p-4"> Working For you !</h1>
    <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full  mx-auto">
  <div className="animate-pulse flex space-x-4">
    <div className="rounded-full bg-slate-700 h-10 w-10"></div>
    <div className="flex-1 space-y-6 py-1">
      <div className="h-2 bg-slate-700 rounded"></div>
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-4">
          <div className="h-2 bg-slate-700 rounded col-span-2"></div>
          <div className="h-2 bg-slate-700 rounded col-span-1"></div>
        </div>
        <div className="h-2 bg-slate-700 rounded"></div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
};

export default About;
