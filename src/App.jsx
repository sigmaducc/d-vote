import React from "react";
import { User, About, Home,Aadhaar, Four04page,AdminLogin,Admin} from "./pages";
import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import "./index.css";




const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/user" exact element={<User />} />
          <Route path="/aadhaar" exact element={<Aadhaar/>} />
          <Route path="/login" exact element={<AdminLogin/>} />
          <Route path="/admin" exact element={<AdminLogin/>} />
          <Route path="*" exact element={< Four04page/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;



