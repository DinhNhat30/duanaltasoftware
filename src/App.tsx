import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./login/Login";
import PassForgot from "./password/passforgot";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/send-mail" element={<PassForgot />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
