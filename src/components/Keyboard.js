import React, { useState } from "react";
import GeezKeyboard from "./GeezKeyboard";

const Keyboard = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (character) => {
    setInputValue(inputValue + character);
  };

  const handleClear = () => {
    setInputValue("");
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <h1 className="text-[#CD9D0E] mb-4 text-center text-2xl font-bold">
        Ge'ez Keyboard
      </h1>
      <textarea
        className="w-full p-4 border fixed rounded-lg mb-4"
        rows="8"
        value={inputValue}
        readOnly
      />
      <GeezKeyboard handleInput={handleInput} />
      <button
        className="mt-4 bg-[#CD9D0E] text-white py-2 px-4 rounded-lg hover:bg-[#b08b0c]"
        onClick={handleClear}
      >
        Clear Text
      </button>
    </div>
  );
};

export default Keyboard;
