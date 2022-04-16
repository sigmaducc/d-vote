import React from "react";
import { Navbar, Home, Zy, Footer } from "./components/";
import { User, Admin } from "./pages";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/admin" exact element={<Admin />} />
          <Route path="/user" exact element={<User />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
