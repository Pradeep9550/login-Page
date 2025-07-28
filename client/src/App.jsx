import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Signup.jsx";
import Signin from "./Signin";
import Profile from "./Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
