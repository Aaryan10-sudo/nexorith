import React from "react";
import { FaPlay } from "react-icons/fa";
import { HiCash } from "react-icons/hi";

const Home = () => {
  return (
    <>
      <div className="sm:flex mt-[10px] justify-between">
        <div className=" ">
          <h1 className="sm:ml-[75px] mx-[20px] mt-[20px] sm:font-[400] text-[50px] font-sora font-extrabold">
            We are providing <br />a{" "}
            <span className="underline decoration-green-400 decoration-[15px] underline-offset-[1px]">
              full services
            </span>{" "}
            of strategic
          </h1>
          <br />
          <p className="sm:ml-[75px] mx-[20px] text-[20px] font-manrope">
            We are Investment company, whose team is working on making <br />
            money from the volatility of cryptocurrency and other great returns
            to our clients.
          </p>
          <br />
          <div className="flex sm:gap-[27px] gap-[30px]">
            <button className="bg-[#6864F9] sm:h-[39px] sm:w-[100px] h-[50px] w-[150px] sm:ml-[75px] ml-[20px] text-white rounded-lg">
              Register
            </button>
            <div className="flex items-center text-white bg-[#6864F9] sm:w-[39px] sm:h-[39px] w-[50px] h-[50px] text-center justify-center rounded-full">
              <FaPlay />
            </div>
            <span className="text-[#6864F9] h-[39px] text-center sm:mt-[10px] mt-[15px] ml-[-15px]">
              Watch video
            </span>
          </div>
        </div>

        <div className="bg-[#DDDDDD] h-[330px] sm:w-[600px] w-[405px] ml-[20px] transform relative rounded-tl-[15px] rounded-bl-[30px] sm:m-0 top-[50px] -skew-y-12">
          <div className="h-[250px] border-[3px] border-l-white border-b-white border-t-0 border-r-0 rounded-bl-[50px] ml-[120px]"></div>
        </div>
      </div>
      <center>
        <div className="flex flex-col sm:h-[150px] h-[170px] w-[300px] bg-[white] relative sm:top-[0px] top-[50px] rounded-xl drop-shadow-2xl p-[20px]">
          <div className=" bg-[#6864F9] h-[35px] w-[35px] rounded-full">
            <HiCash className="text-[30px] text-white" />
          </div>
          <br />
          <p className="text-start font-bold font-manrope text-[20px]">
            $ 800,460,000
          </p>
          <p className="text-start mt-[10px]">
            Our Client Overall Investment in 2024
          </p>
        </div>
      </center>
    </>
  );
};

export default Home;
