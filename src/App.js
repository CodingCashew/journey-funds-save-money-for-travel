import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Budget from "./Components/Budget.tsx";
import Expenses from "./Components/Expenses.tsx";
import Home from "./Components/Home.tsx";
import Login from "./Components/Login.tsx";
import Navbar from "./Components/Navbar.tsx";
import Signup from "./Components/Signup.tsx";
import { AccountProvider } from "./context/AccountContext";

const App = () => {
  return (
    <AccountProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/budget" element={<Budget />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AccountProvider>
  );
};

export default App;
