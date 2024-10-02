import React from "react";

const consonants = [
  "ሀ",
  "ለ",
  "ሐ",
  "መ",
  "ሠ",
  "ረ",
  "ሰ",
  "ሸ",
  "ቀ",
  "በ",
  "ቨ",
  "ተ",
  "ቸ",
  "ኀ",
  "ነ",
  "ኘ",
  "አ",
  "ከ",
  "ኸ",
  "ወ",
  "ዐ",
  "ዘ",
  "ዠ",
  "የ",
  "ደ",
  "ጀ",
  "ገ",
  "ጠ",
  "ጨ",
  "ጰ",
  "ጸ",
  "ፀ",
  "ፈ",
  "ፐ",
];

const GeezKeyboard = ({ handleInput }) => {
  return (
    <div className="grid grid-cols-7 gap-2">
      {consonants.map((consonant) => (
        <GeezKey
          key={consonant}
          consonant={consonant}
          handleInput={handleInput}
        />
      ))}
    </div>
  );
};

export default GeezKeyboard;
