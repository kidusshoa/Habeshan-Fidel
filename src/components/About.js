import React from "react";
import Logo from "./../assets/logo11.png";

const About = () => {
  return (
    <div className="h-screen md:h-[500px] w-full bg-[#cd9d0e48] flex flex-col md:flex-row items-center justify-center">
      <div className="w-1/3 flex items-center justify-center">
        <img src={Logo} alt="img" />
      </div>
      <div className="w-2/3 p-2 text-center flex flex-col gap-5">
        <h1 className="text-3xl">Habeshan Fidel</h1>
        <h3>
          Developed to fix the issue that arise from scarcity of Amharic
          alphabet interpreter in linux distributions.{" "}
        </h3>
      </div>
    </div>
  );
};

export default About;
