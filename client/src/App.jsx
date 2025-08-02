import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Signup from "./Signup.jsx";
import Signin from "./Signin";
import Profile from "./Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
