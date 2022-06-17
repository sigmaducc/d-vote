import React from "react";
import data from "../data";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import Slider from "react-slick";


const Card = ({ description, spokesman }) => {
  return (
    <div className="white-glassmorphism mx-2">
      <div className="flex flex-col justify-around items-center h-80 text-slate-300 text-md px-8">
        <div className="text-center">{description}</div>
        <div className="text-center text-md">- {spokesman}</div>
      </div>
    </div>
  );
};

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos />
    </div>
  );
};

const Democracy = () => {
  const settings = {
    dots: false,
    prevArrow: <PreviousBtn style={{ color: "white" }} />,
    nextArrow: <NextBtn style={{ color: "white" }} />,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="gradient-bg-timeline">
      <div className="max-w-[1600px] m-auto flex flex-col justify-between items-start  p-20">
        <div className="text-5xl text-slate-200 text-gradient">
          Why should you vote?
        </div>
        <div className="w-full text-white mt-20 p-2">
          <Slider {...settings}>
            {data.map((val) => (
              <Card
                key={val.id}
                description={val.description}
                spokesman={val.spokesman}
              />
            ))}
            <div></div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Democracy;
