import React from "react";
import { Footer, Navbar } from "../components";

const About = () => {

  return(
    < >
    <Navbar/>
    <div className="gradient-bg-timeline p-4">

    <h1 className="font-serif text-white mx-auto max-w-sm w-full mt-4 p-4"> Working For you !</h1>
    <div className="border bg-white border-blue-300 shadow rounded-md p-4 mb-4 max-w-sm w-full  mx-auto">
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
<Footer/>
    </>
  )
};

export default About;
