import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar.tsx";
import Budget from "./Components/Budget.tsx";
import Expenses from "./Components/Expenses.tsx";


const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/budget" element={<Budget />} />
          <Route path="/expenses" element={<Expenses />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
