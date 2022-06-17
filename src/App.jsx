import React from "react";
import { User, Admin, Home,AdhaarAuth } from "./pages";
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
          <Route path="/admin" exact element={<Admin />} />
          <Route path="/user" exact element={<User />} />
          <Route path="/adhaar" exact element={< AdhaarAuth/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;



