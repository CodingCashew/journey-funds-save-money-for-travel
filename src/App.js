import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Budget from "./Pages/Budget.tsx";
import Expenses from "./Pages/Expenses.tsx";
import Savings from "./Pages/Savings.tsx";
import Home from "./Pages/Home.tsx";
import Login from "./Pages/Login.tsx";
import Navbar from "./Components/Navbar.tsx";
import Signup from "./Pages/Signup.tsx";
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
            <Route path="/savings" element={<Savings />} />
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
