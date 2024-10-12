import React, { useState } from "react";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import GeEzKeyboard from "./components/Geez";
import About from "./components/About";

const App = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="app p-4 bg-[#cd9d0e48]">
      <Header />
      <GeEzKeyboard />
      <About />
    </div>
  );
};

export default App;
