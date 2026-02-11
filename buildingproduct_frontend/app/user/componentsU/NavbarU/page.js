"use client";
// import { useState } from "react";
import ClearAllIcon from "@mui/icons-material/ClearAll";

const NavbarU = ({expand,vibrate}) => {

   

  return (
    <div className={`bg-[#212121] ${expand?'w-full':''}  h-16 flex justify-between items-center p-4 shadow-2xl border-b border-gray-700`}>
      
      <div className="flex items-center">
        <img  key={vibrate ? "vibrating" : "still"}  className={`h-24 w-24 mt-2 ${vibrate ? "vibrate" : ""}`} src="/dna.png" />
        <h2 className="text-white text-xl">healix</h2>
      </div>

      {/* Tooltip on hover */}
      <div className="relative group cursor-pointer">
        <ClearAllIcon className="text-white" />
        <span className="absolute right-0 top-full mt-1 hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
          Delete
        </span>
      </div>
         <style jsx>{`
        @keyframes vibrate {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          10% {
            transform: translate(-2px, -1px) rotate(-0.5deg);
          }
          20% {
            transform: translate(2px, 1px) rotate(0.5deg);
          }
          30% {
            transform: translate(-1px, 2px) rotate(-0.5deg);
          }
          40% {
            transform: translate(1px, -2px) rotate(0.5deg);
          }
          50% {
            transform: translate(-2px, 0px) rotate(-0.5deg);
          }
          60% {
            transform: translate(2px, 1px) rotate(0.5deg);
          }
          70% {
            transform: translate(-1px, -2px) rotate(-0.5deg);
          }
          80% {
            transform: translate(2px, 0px) rotate(0.5deg);
          }
          90% {
            transform: translate(-1px, 1px) rotate(-0.5deg);
          }
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
        }

        .vibrate {
          animation: vibrate 0.15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default NavbarU;
