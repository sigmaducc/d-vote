import React from "react";
import { Navbar, Footer, TimeLine, Blockchain, Democracy } from "../components";


const Home = () => {
  return (
    <div>
      <Navbar />
      <TimeLine />
      <Blockchain />
      <Democracy />
      <Footer />
    </div>
  );
};

export default Home;
