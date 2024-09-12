import React from "react";
import { FaPlay } from "react-icons/fa";
import { HiCash } from "react-icons/hi";

const Home = () => {
  return (
    <>
      <div className="flex mt-[10px] justify-between">
        <div className=" ">
          <h1 className="ml-[75px] mt-[20px] font-[400] text-[50px] font-sora">
            We are providing <br />a full services of strategic
          </h1>
          <br />
          <p className="ml-[75px] text-[20px] font-manrope">
            We are Investment company, whose team is working on making <br />
            money from the volatility of cryptocurrency and other great returns
            to our clients.
          </p>
          <br />
          <div className="flex gap-[27px]">
            <button className="bg-[#6864F9] h-[39px] w-[100px] ml-[75px] text-white">
              Register
            </button>
            <div className="flex items-center text-white bg-[#6864F9] w-[39px] h-[39px] text-center justify-center rounded-full">
              <FaPlay />
            </div>
            <span className="text-[#6864F9] h-[39px] text-center mt-[10px] ml-[-15px]">
              Watch video
            </span>
          </div>
        </div>

        <div className="bg-[#DDDDDD] h-[330px] w-[738px] transform -rotate-12 relative rounded-tl-[10px] rounded-bl-[20px] left-[90px] top-[40px] -skew-x-12">
          <div className="h-[250px] border-[3px] border-l-white border-b-white border-t-0 rounded-bl-[50px] ml-[120px]"></div>
        </div>
      </div>
      <center>
        <div className="flex flex-col h-[150px] w-[300px] bg-[white] relative top-[-50px] rounded-xl drop-shadow-2xl p-[20px]">
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
