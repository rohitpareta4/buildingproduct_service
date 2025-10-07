"use client";
import { motion } from "framer-motion";
import SearchIcon from '@mui/icons-material/Search';
import PhonelinkEraseIcon from "@mui/icons-material/PhonelinkErase";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useState } from "react";

const Sidebar = () => {

  const [isslide,setIsslide]=useState(false)

  const slidetoleft=()=>{
    setIsslide(prev => !prev)
  }

  return (
    <motion.div
      initial={{ 
        x: -80, opacity: 0
       }}
       animate={{
       x: isslide ? -300 : 0, // slides left when true, visible when false
       opacity: 1,
  }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="h-screen  bg-[#181818] shadow-lg flex flex-col justify-between p-2 border-r border-gray-700"
    >
      {/* Header Section */}
      <div>
        <div className="flex justify-between items-center">
          <img
            className="object-contain h-28 w-28 -ml-6 mt-2"
            src="/dna.png"
            alt="DNA Logo"
            // style={{ width: "48px", height: "48px" }}
          />
          <PhonelinkEraseIcon
             onClick={slidetoleft}
            style={{ height:"36px", width:"36px" }}
            className="text-white cursor-pointer hover:text-gray-300 transition"
          />
        </div>

          <div className="space-y-2">
          <button className="text-white flex items-center gap-3 w-full py-2 px-4 rounded-md hover:bg-[#2a2a2a] transition">
            <SearchIcon style={{ fontSize: "22px" }} />
            <span className="font-medium">Search</span>
          </button>
        </div>

        {/* Library Section */}
        <div className="mt-3 space-y-2">
          <button className="text-white flex items-center gap-3 w-full py-2 px-4 rounded-md hover:bg-[#2a2a2a] transition">
            <PhotoLibraryIcon style={{ fontSize: "22px" }} />
            <span className="font-medium">Library</span>
          </button>
        </div>

        {/* Chats Label */}
        <div className="mt-6 pl-4">
          <span className="tracking-wide text-sm text-gray-400 font-semibold">
            Chats
          </span>
        </div>
      </div>

      {/* Profile Section */}
      <div className="border-t border-gray-700 p-2 flex items-center gap-3 text-white">
        <AccountCircleOutlinedIcon fontSize="medium" />
        <div>
          <p className="font-semibold">John Doe</p>
          <p className="text-sm text-gray-400">View Profile</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;

