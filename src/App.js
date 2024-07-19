import React from 'react';
import "./App.css";
import Navbar from "./Components/Navbar.tsx";
import Budget from "./Components/Budget.tsx";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Budget />
    </div>
  );
}

export default App;
