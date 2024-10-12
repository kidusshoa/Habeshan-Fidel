import React, { useState } from "react";

const geezLetters = {
  ሀ: ["ሀ", "ሁ", "ሂ", "ሃ", "ሄ", "ህ", "ሆ", "ኋ"],
  ለ: ["ለ", "ሉ", "ሊ", "ላ", "ሌ", "ል", "ሎ", "ሏ"],
  ሐ: ["ሐ", "ሑ", "ሒ", "ሓ", "ሔ", "ሕ", "ሖ", "ሗ"],
  መ: ["መ", "ሙ", "ሚ", "ማ", "ሜ", "ም", "ሞ", "ሟ"],
  ሠ: ["ሠ", "ሡ", "ሢ", "ሣ", "ሤ", "ሥ", "ሦ", "ሧ"],
  ረ: ["ረ", "ሩ", "ሪ", "ራ", "ሬ", "ር", "ሮ", "ሯ"],
  ሰ: ["ሰ", "ሱ", "ሲ", "ሳ", "ሴ", "ስ", "ሶ", "ሷ"],
  ሸ: ["ሸ", "ሹ", "ሺ", "ሻ", "ሼ", "ሽ", "ሾ", "ሿ"],
  ቀ: ["ቀ", "ቁ", "ቂ", "ቃ", "ቄ", "ቅ", "ቆ", "ቋ"],
  በ: ["በ", "ቡ", "ቢ", "ባ", "ቤ", "ብ", "ቦ", "ቧ"],
  ቨ: ["ቨ", "ቩ", "ቪ", "ቫ", "ቬ", "ቭ", "ቮ", "ቯ"],
  ተ: ["ተ", "ቱ", "ቲ", "ታ", "ቴ", "ት", "ቶ", "ቷ"],
  ቸ: ["ቸ", "ቹ", "ቺ", "ቻ", "ቼ", "ች", "ቾ", "ቿ"],
  ኀ: ["ኀ", "ኁ", "ኂ", "ኃ", "ኄ", "ኅ", "ኆ", "ኋ"],
  ነ: ["ነ", "ኑ", "ኒ", "ና", "ኔ", "ን", "ኖ", "ኗ"],
  ኘ: ["ኘ", "ኙ", "ኚ", "ኛ", "ኜ", "ኝ", "ኞ", "ኟ"],
  አ: ["አ", "ኡ", "ኢ", "ኣ", "ኤ", "እ", "ኦ", "ኧ"],
  ከ: ["ከ", "ኩ", "ኪ", "ካ", "ኬ", "ክ", "ኮ", "ኳ"],
  ኸ: ["ኸ", "ኹ", "ኺ", "ኻ", "ኼ", "ኽ", "ኾ", "ዃ"],
  ወ: ["ወ", "ዉ", "ዊ", "ዋ", "ዌ", "ው", "ዎ", "ኵ"],
  ዐ: ["ዐ", "ዑ", "ዒ", "ዓ", "ዔ", "ዕ", "ዖ", "ኧ"],
  ዘ: ["ዘ", "ዙ", "ዚ", "ዛ", "ዜ", "ዝ", "ዞ", "ዟ"],
  ዠ: ["ዠ", "ዡ", "ዢ", "ዣ", "ዤ", "ዥ", "ዦ", "ዧ"],
  የ: ["የ", "ዩ", "ዪ", "ያ", "ዬ", "ይ", "ዮ", "ዄ"],
  ደ: ["ደ", "ዱ", "ዲ", "ዳ", "ዴ", "ድ", "ዶ", "ዷ"],
  ጀ: ["ጀ", "ጁ", "ጂ", "ጃ", "ጄ", "ጅ", "ጆ", "ጇ"],
  ገ: ["ገ", "ጉ", "ጊ", "ጋ", "ጌ", "ግ", "ጎ", "ጓ"],
  ጠ: ["ጠ", "ጡ", "ጢ", "ጣ", "ጤ", "ጥ", "ጦ", "ጧ"],
  ጨ: ["ጨ", "ጩ", "ጪ", "ጫ", "ጬ", "ጭ", "ጮ", "ጯ"],
  ጰ: ["ጰ", "ጱ", "ጲ", "ጳ", "ጴ", "ጵ", "ጶ", "ጷ"],
  ጸ: ["ጸ", "ጹ", "ጺ", "ጻ", "ጼ", "ጽ", "ጾ", "ጿ"],
  ፀ: ["ፀ", "ፁ", "ፂ", "ፃ", "ፄ", "ፅ", "ፆ"],
  ፈ: ["ፈ", "ፉ", "ፊ", "ፋ", "ፌ", "ፍ", "ፎ", "ፏ"],
  ፐ: ["ፐ", "ፑ", "ፒ", "ፓ", "ፔ", "ፕ", "ፖ", "ፗ"],
  q: ["፡", "።", "፣", "፤", "፥", "፦", "፨"],
  n: ["፩", "፪", "፫", "፬", "፭", "፮", "፯", "፰", "፱", "፲"],
  nn: ["፳", "፴", "፵", "፶", "፷", "፸", "፹", "፺", "፻", "፲፻"],
};

const GeEzKeyboard = () => {
  const [inputText, setInputText] = useState(""); // For storing input text

  // Append clicked character to the text area
  const handleCharacterClick = (char) => {
    setInputText((prevText) => prevText + char);
  };

  // Handle space button
  const handleSpaceClick = () => {
    setInputText((prevText) => prevText + " ");
  };

  // Handle backspace button
  const handleBackspaceClick = () => {
    setInputText((prevText) => prevText.slice(0, -1)); // Remove last character
  };

  // Handle delete button
  const handleDeleteClick = () => {
    setInputText(""); // Clear the entire text area
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Ge'ez Keyboard</h1>
      {/* Text area to display the input */}
      <textarea
        className="w-full h-24 p-3 mb-5 text-lg border border-gray-300 rounded-lg"
        value={inputText}
        readOnly
        placeholder="Type here..."
      />

      <div className="flex w-full h-[150px] items-center flex-row justify-center gap-2">
        <button
          onClick={handleSpaceClick}
          className="bg-[#969393] w-1/4 text-white text-xl p-3 rounded-lg  hover:bg-[#7a7878] transition-colors"
        >
          Space
        </button>
        <button
          onClick={handleBackspaceClick}
          className="bg-blue-500 text-white text-xl p-3 rounded-lg w-1/4 hover:bg-blue-600 transition-colors"
        >
          Backspace
        </button>
        <button
          onClick={handleDeleteClick}
          className="bg-red-500 text-white text-xl p-3 rounded-lg w-1/4 hover:bg-red-600 transition-colors"
        >
          Delete
        </button>
      </div>

      <div className="keyboard grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7">
        {Object.keys(geezLetters).map((key) => (
          <div key={key} className="key-row space-y-2">
            {geezLetters[key].map((char, index) => (
              <button
                key={index}
                onClick={() => handleCharacterClick(char)}
                className="bg-[#CD9D0E] hover:bg-[#a98928] text-xl p-3 rounded-lg w-full transition-colors"
              >
                {char}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeEzKeyboard;
