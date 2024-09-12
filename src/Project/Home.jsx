import React from "react";
import { FaPlay } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiCash } from "react-icons/hi";
import { IoBarChartSharp } from "react-icons/io5";
import { LiaSuitcaseSolid } from "react-icons/lia";
import { MdBusinessCenter } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="sm:flex mt-[10px] justify-between">
        <div className=" ">
          <h1 className="sm:ml-[75px] mx-[20px] mt-[20px] sm:font-[400] text-[50px] font-sora font-[900]">
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

        <div className="bg-[#DDDDDD] h-[330px] sm:w-[600px] w-[405px] ml-[20px] transform relative rounded-tl-[15px] rounded-bl-[30px] sm:m-0 top-[50px] -skew-y-12 float-right">
          <div className="h-[250px] border-[3px] border-l-white border-b-white border-t-0 border-r-0 rounded-bl-[50px] ml-[120px]"></div>
        </div>
      </div>
      <center>
        <div className="flex flex-col sm:h-[150px] h-[170px] w-[300px] bg-[white] relative sm:top-[-50px] top-[50px] rounded-xl drop-shadow-2xl p-[20px]">
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

      <main className="mx-[20px] sm:mx-[80px] sm:mt-[60] mt-[90px]">
        <h1 className=" text-[40px] sm:font-[400] font-extrabold font-sora">
          We Expertise in
          <br />
          the main areas
        </h1>
        <div className="flex sm:flex-row flex-col justify-between gap-[20px] mt-[40px]">
          <div className="sm:w-[530px] sm:h-[350px] h-[400px] bg-[#f3f2f2] rounded-xl pt-[40px] pl-[40px] relative overflow-hidden">
            <div className="bg-[#6864F9] w-[50px] h-[50px] items-center flex justify-center rounded-full">
              <MdBusinessCenter className="text-[30px] text-white" />
            </div>
            <br />
            <p className="font-manrope text-[30px] font-[400]">
              Investor Startups
            </p>
            <br />
            <p className="pr-[20px]">
              Our team analyzes the market and potential risks, develops
              business plans, prepares a budget and selects personal appropriate{" "}
            </p>
            <br />
            <NavLink className="text-blue-400 flex items-center gap-[10px]">
              Read more <FaArrowRightLong />{" "}
            </NavLink>
            <div className="float-end border-2  border-black rounded-full  h-[250px] w-[250px] border-b-0 relative left-[90px] top-[-20px] overflow-hidden">
              <div className="float-end border-2 border-blue-500 rounded-full h-[200px] w-[200px] mt-[40px]"></div>
            </div>
          </div>
          {/* Expertise Section */}
          <div className="sm:w-[530px] sm:h-[350px] h-[400px] bg-[#f3f2f2] rounded-xl pt-[40px] pl-[40px] relative overflow-hidden">
            <div className="bg-[rgb(104,100,249)] w-[50px] h-[50px] items-center flex justify-center rounded-full">
              <IoBarChartSharp className="text-[30px] text-white" />
            </div>
            <br />
            <p className="font-manrope text-[30px] font-[400] ">
              Business Scaling
            </p>
            <br />
            <p className="pr-[20px]">
              We help companies overcome the growth ceiling and enter a new
              stage of development
            </p>
            <br />
            <NavLink className="text-blue-400 flex items-center gap-[10px]">
              Read more <FaArrowRightLong />{" "}
            </NavLink>
            <div className="flex float-end gap-[20px]">
              <div className="h-[150px] w-[100px] border-2 border-black transform -skew-x-12 mt-[30px] ml-[100px] rounded-xl"></div>
              <div className="h-[150px] w-[100px] border-2 border-b-0 rounded-bl-none border-blue-500 transform -skew-x-12 ml-[30px] mr-[-50px] mt-[-30px] rounded-xl"></div>
            </div>
          </div>
        </div>
        <br />
      </main>
      <div className="flex flex-col sm:flex-row justify-between gap-[80px]">
        <div className="relative w-[400px] h-[300px] sm:w-[550px] sm:h-[350px] bg-[#DDDDDD] left-0 -skew-y-12 rounded-3xl rounded-tl-none rounded-bl-none sm:mt-[100px] mt-[50px]">
          <div className="w-[300px] h-[250px] sm:w-[450px] border-4 border-white border-t-0 rounded-br-3xl"></div>
        </div>
        <div className="sm:mx-[80px] mx-[20px]">
          We foresee opportunities and growth prospects, create companies and
          effectively manage them, lead business to success and prosperity for
          the benefit of the investor, society and country
        </div>
      </div>
    </>
  );
};

export default Home;
