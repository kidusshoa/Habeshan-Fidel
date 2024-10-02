import React, { useState } from "react";
import Logo1 from "./../assets/logo11.png";
import { IoMdMenu } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <header className="bg-white p-4 w-full sticky top-0 shadow shadow-[#CD9D0E]">
      <div className="lg:w-2/3 w-full mx-auto flex justify-between items-center">
        <div className="flex flex-row items-center gap-2">
          <img src={Logo1} alt="Logo" className="w-20 md:w-[120px]" />
          <h1 className="lg:text-3xl sm:text-2xl text-[#ad8a22]">
            Habeshan ፊደል
          </h1>
        </div>
        {!showNavbar ? (
          <IoMdMenu
            className="text-[#CD9D0E] sm:hidden text-3xl cursor-pointer"
            onClick={handleShowNavbar}
          />
        ) : (
          <AiOutlineClose
            className="text-[#CD9D0E] sm:hidden text-3xl cursor-pointer"
            onClick={handleShowNavbar}
          />
        )}
        <ul className="hidden sm:flex space-x-6 lg:text-2xl sm:text-xl">
          <li>
            <a href="#home" className="text-[#CD9D0E] hover:text-gray-600">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-[#CD9D0E] hover:text-gray-600">
              About
            </a>
          </li>
          <li>
            <a href="#settings" className="text-[#CD9D0E] hover:text-gray-600">
              Settings
            </a>
          </li>
        </ul>
      </div>
      {showNavbar && (
        <ul className="flex flex-col items-center space-y-4 sm:hidden bg-white text-[#CD9D0E] mt-4">
          <li>
            <a
              href="#home"
              className="hover:text-gray-600"
              onClick={handleShowNavbar}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-gray-600"
              onClick={handleShowNavbar}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#settings"
              className="hover:text-gray-600"
              onClick={handleShowNavbar}
            >
              Settings
            </a>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
