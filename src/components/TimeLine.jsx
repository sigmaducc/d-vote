import React from "react";
import { aadhar, vote, pie, metamask } from "../../images/index";
import "../index.css";

const TopVerticalLine = () => {
  return (
    <span className="before:content-[''] before:relative before: border-solid before:border-l-2 before:border-slate-200 before:h-1/2 before:left-1/2"></span>
  );
};

const BottomVerticalLine = () => {
  return (
    <span className="after:content-[''] after:relative after: border-solid after:border-r-2 after:border-slate-200 after:h-1/2 after:left-1/2 after:top-1/2"></span>
  );
};

const HorizontalLineLtoR = () => {
  return (
    <div className="grid grid-cols-4 w-full">
      <div className="col-start-1 col-end-2 p-0 h-10 overflow-hidden">
        <div className="relative h-10 rounded-full w-full border-2 border-solid border-slate-200  left-1/2 -top-1/2"></div>
      </div>
      <div className="col-start-2 col-end-4 overflow-hidden">
        <div className="relative h-10 border-b-2 border-solid border-slate-200 -top-1/2"></div>
      </div>
      <div className="col-start-4 col-end-5 p-0 h-10 overflow-hidden">
        <div className="relative h-10 rounded-full w-full border-2 border-solid border-slate-200  calc-right calc-top"></div>
      </div>
    </div>
  );
};

const HorizontalLineRtoL = () => {
  return (
    <div className="grid grid-cols-4 w-full m-auto -top-16">
      <div className="col-start-1 col-end-2 p-0 h-10 overflow-hidden">
        <div className="relative h-10 rounded-full w-full border-2 border-solid border-slate-200  left-1/2 calc-top"></div>
      </div>
      <div className="col-start-2 col-end-4 overflow-hidden">
        <div className="relative h-10 border-b-2 border-solid border-slate-200 -top-1/2"></div>
      </div>
      <div className="col-start-4 col-end-5 p-0 h-10 overflow-hidden">
        <div className="relative h-10 rounded-full w-full border-2 border-solid border-slate-200  calc-right -top-1/2"></div>
      </div>
    </div>
  );
};

const OddStep = ({ img, title }) => {
  return (
    <div className="grid grid-cols-4 w-full items-center">
      <div>
        <TopVerticalLine />
        <img
          className="grid-start-1 grid-end-2 origin-center translate-x-1/2 w-1/2 z-2"
          src={img}
          alt="Aadhar Authentication"
        />
        <BottomVerticalLine />
      </div>
      <h5 className="grid-start-2 grid-end-5 whitespace-nowrap">{title}</h5>
    </div>
  );
};

const EvenStep = ({ img, title }) => {
  return (
    <div className="grid grid-cols-4 w-full items-center  ">
      <h5 className="col-start-1 text-right col-end-4 whitespace-nowrap ">
        {title}
      </h5>
      <div className="">
        <TopVerticalLine />
        <img
          className="col-start-4 col-end-5 origin-center translate-x-1/2 w-1/2 z-2"
          src={img}
          alt="Setup Metamask"
        />
        <BottomVerticalLine />
      </div>
    </div>
  );
};

const TimeLine = () => {
  return (
    <div className=" gradient-bg-timeline flex w-full justify-center items-center">
      <div className="max-w-[1600px] flex lg:flex-row flex-col items-center justify-between p-20">
        <div className="flex-1 flex flex-col justify-start items-start">
          <h1 className="text-slate-200 text-5xl py-2 text-gradient ">
            3 Easy steps to <br />
            vote on the Blockchain
          </h1>
          <p className="text-left my-2 text-slate-200 font-light md:w-9/12 w-11/12 text-lg">
            Making the process of electronic voting a lot simpler. We believe in
            democracy and everyone's right to vote. Bringing voting at your
            doorsteps.
          </p>
        </div>

        <div className="flex-1 w-full flex flex-col text-xl text-slate-200  mt-10 ">
          <OddStep
            key={0}
            img={aadhar}
            title="Step 1: Aadhaar Authentication"
          />
          <HorizontalLineLtoR />
          <EvenStep key={1} img={metamask} title="Step 2: Setup Metamask" />
          <HorizontalLineRtoL />
          <OddStep key={2} img={vote} title="Step 3: Cast Vote" />
          <HorizontalLineLtoR />
          <EvenStep key={3} img={pie} title="Step 4: Vote Result" />
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
