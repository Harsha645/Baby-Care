import React from "react";
import { Card } from "flowbite-react";
import Description from "./Description";
import { useNavigate } from "react-router";

export default function AnimatedCard() {
  const navigate = useNavigate();

  function onClick(){
    
    navigate("/sign-in")

  }
  return (
    <Card
      className="max-w-sm rounded-2xl ml-6 mb-10 bg-gray-100 "
      // imgSrc="./src/assets/about.jpg"
    >
      <div className="ml-4 mr-2 mt-2 mb-2 ">
        <h3 className="font-extrabold text-3xl items-center justify-center mb-1">
          About
        </h3>

        <p className="font-normal text-gray-700 ">
          <Description />
        </p>
        <button className=" mt-4 mb-2 bg-slate-800 text-white px-7 py-2 rounded-full font-medium text-lg shadow-md hover:bg-slate-900 transition duration-150  hover:scale-105 transition-scale  ease-in hover:shadow-lg active:bg-black"
          onClick={onClick}
        >
          Get Started
        </button>
      </div>
    </Card>
  );
}
