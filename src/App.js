import React, { useState } from "react";

const App = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="app p-4">
      <h1 className="text-2xl font-bold mb-4">Habeshan Fidel</h1>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Type here..."
        className="w-full h-32 border-2 border-gray-300 p-2 rounded-lg focus:border-blue-500"
      />
      <div className="output mt-4">
        <h2 className="text-xl font-semibold">Output</h2>
        <p className="border p-2 mt-2 bg-gray-100">{text}</p>
      </div>
    </div>
  );
};

export default App;
