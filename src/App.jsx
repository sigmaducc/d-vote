import React from "react";
import { Navbar, MainSection, Footer } from "./components/";
import "./index.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <MainSection />
      <Footer />
    </div>
  );
};

export default App;
