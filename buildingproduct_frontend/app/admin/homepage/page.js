"use client";
import Sidebar from "../sidebar/page";
import Navbar from "../components/Navbar";

const Homepage = () => {
  return (
    <div className="flex flex-col">
    <div className="">
      <Navbar/>
    </div>
    <div className="bg-gray-700 grid grid-cols-4 ">
      <div className="grid-col-span-1">
        <Sidebar/>
      </div>
      <div className="grid-col-span-3">
        helllllllllllo
      </div>
    </div>
    </div>
  );
};

export default Homepage;