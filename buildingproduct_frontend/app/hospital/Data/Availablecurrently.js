
"use client"
import { Bed } from "lucide-react";
import Updatebeds from "../Update/Updatebeds";
import { useState } from "react";

const Available = () => {


    const [showupdatebeds,setShowupdatebeds]=useState(false)

    const updatebedsModal=()=>{
        setShowupdatebeds(true)
    }

  return (
    <div className="flex gap-6 p-8 justify-center  h-[80%] items-stretch">
      {/* Available Beds Card */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 border-2 border-white w-1/3 flex flex-col shadow-2xl transition-all duration-300  hover:shadow-blue-900/30">
        <div className="flex flex-col items-center flex-1">
          <div className="bg-blue-500 p-4 rounded-full mb-4">
            <Bed className="text-yellow-300 w-16 h-16" />
          </div>
          <h1 className="text-white font-bold text-2xl mb-4 tracking-wide">Available Beds</h1>
          <div className="w-full bg-blue-500/30 p-4 rounded-lg mb-4">
            <p className="flex flex-col text-white font-medium gap-2">
              <span className="flex justify-between"><span>ICU Beds:</span> <span className="text-yellow-300 font-semibold">5 available</span></span>
              <span className="flex justify-between"><span>Private Beds:</span> <span className="text-yellow-300 font-semibold">12 available</span></span>
              <span className="flex justify-between"><span>General Beds:</span> <span className="text-yellow-300 font-semibold">20 available</span></span>
            </p>
          </div>
        </div>
        <button onClick={updatebedsModal} className="mt-auto text-blue-900 bg-yellow-400 hover:bg-yellow-300 px-6 py-2  font-semibold transition-colors duration-200 shadow-md w-full">Edit</button>
        {showupdatebeds && (
            <Updatebeds setShowupdatebeds={setShowupdatebeds}/>
        )}
      </div>

      {/* Available Doctors Card */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 border-2 border-white w-1/3 flex flex-col shadow-2xl transition-all duration-300  hover:shadow-blue-900/30">
        <div className="flex flex-col items-center flex-1">
          <div className="bg-blue-500 p-4 rounded-full mb-4">
            <img className="h-16 w-16 object-contain" src="/stethoscope.png" alt="Doctors Icon" />
          </div>
          <h1 className="text-white font-bold text-2xl mb-4 tracking-wide">Available Doctors</h1>
          <div className="w-full bg-blue-500/30 p-4 rounded-lg mb-4">
            <p className="text-white font-medium text-center">
              <span className="text-3xl font-bold text-yellow-300 block">50</span>
              <span className="text-lg">doctors available</span>
            </p>
          </div>
        </div>
        <button className="mt-auto text-blue-900 bg-yellow-400 hover:bg-yellow-300 px-6 py-2  font-semibold transition-colors duration-200 shadow-md w-full">View All</button>
      </div>

      {/* Available Ambulance Card */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 border-2 border-white w-1/3 flex flex-col shadow-2xl transition-all duration-300  hover:shadow-blue-900/30">
        <div className="flex flex-col items-center flex-1">
          <div className="bg-blue-500 p-4 rounded-full mb-4">
            <img className="h-16 w-16 object-contain" src="/amb.png" alt="Ambulance Icon" />
          </div>
          <h1 className="text-white font-bold text-2xl mb-4 tracking-wide">Available Ambulance</h1>
          <div className="w-full bg-blue-500/30 p-4 rounded-lg mb-4">
            <p className="text-white font-medium text-center">
              <span className="text-3xl font-bold text-yellow-300 block">8</span>
              <span className="text-lg">ambulances available</span>
            </p>
          </div>
        </div>
        <button className="mt-auto text-blue-900 bg-yellow-400 hover:bg-yellow-300 px-6 py-2  font-semibold transition-colors duration-200 shadow-md w-full">Request</button>
      </div>
    </div>
  );
};

export default Available;
