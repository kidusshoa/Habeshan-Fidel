import React, { useState } from "react";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import GeEzKeyboard from "./components/Geez";

const App = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="app p-4">
      <Header />
      <GeEzKeyboard />
    </div>
  );
};

export default App;
