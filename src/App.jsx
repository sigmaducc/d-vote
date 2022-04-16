import React from "react";
import { User, Admin, Home } from "./pages";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import "./index.css";
import {
  BrowserRouter,Routes ,Route 
} from "react-router-dom";
import { Footer, Navbar } from "./components";





const App = () => {
 

  
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/admin" exact element={<Admin />} />
          <Route path="/user" exact element={<User />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;



