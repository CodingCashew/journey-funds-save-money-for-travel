import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AccountProvider } from "./context/AccountContext";
import "./App.css";
import Navbar from "./Components/Navbar.tsx";
import Budget from "./Components/Budget.tsx";
import Expenses from "./Components/Expenses.tsx";
import Login from "./Components/Login.tsx";
import Signup from "./Components/Signup.tsx";

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
          </Routes>
        </div>
      </BrowserRouter>
    </AccountProvider>
  );
};

export default App;
