import React from "react";
import ArrowIcon from "../assets/arrow_icon.svg";
import bgImg from "../assets/heroImage.jpeg";

const Header = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
      className="bg-cover bg-center rounded-lg"
    >
      <div className="flex flex-col md:flex-row flex-wrap backdrop-filter backdrop-blur-sm bg-gray-900 bg-opacity-50 rounded-lg px-6 md:px-10 lg:px-20">
        {/* Left Side */}
        <div className="md:w-2/3 flex flex-col items-center justify-center text-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
          <p className="text-3xl md:text-4xl lg-text-5xl text-gray-100 font-semibold leading-tight md:leading-tight lg:leading-tight">
            <span className="border-b">Welcome to IIEST Shibpur</span> <br />{" "}
            <span className="text-5xl">Faculty and Alumini Page</span>
          </p>
          <div className="flex flex-col md:flex-row items-center gap-3 text-yellow-100 text-sm font-light">
            <p>
              {" "}
              We are dedicated to maintaining national growth in educational and
              <br className="hidden sm:block" /> engineering sector with
              innovative and ethical environment.
            </p>
          </div>
          <a
            className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300"
            href=""
          >
            Explore More <img className="w-3" src={ArrowIcon} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
