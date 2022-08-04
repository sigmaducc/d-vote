import React from "react";
import { Navbar, Footer, TimeLine, Blockchain, Democracy,Metamask } from "../components";
var account;

const Home =  () => {
  Metamask()
  return (
    <div>
      <Navbar/>
      <TimeLine />
      <Blockchain />
      <Democracy />
      <Footer />
    </div>
  );
};

export default Home;
