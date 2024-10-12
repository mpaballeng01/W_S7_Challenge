import React from "react";
import Home from "./Home";
import Form from "./Form";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <div id="app">
      <nav>
        <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() => navigate('/order')}>Order</button>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;









