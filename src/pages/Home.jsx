import React from "react";
import { Navbar, Footer, TimeLine, Blockchain, Democracy,Metamask } from "../components";



const Home = () => {
  return (
    <div>
      <Metamask/>
      <Navbar />
      <TimeLine />
      <Blockchain />
      <Democracy />
      <Footer />
    </div>
  );
};

export default Home;
