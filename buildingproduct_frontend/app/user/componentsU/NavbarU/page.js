"use client";
import ClearAllIcon from "@mui/icons-material/ClearAll";

const NavbarU = () => {
  return (
    <div className="bg-[#212121] h-16 flex justify-between items-center p-4 shadow-2xl border-b border-gray-700">
      <div className="flex items-center">
        <img className="h-24 w-24 mt-2" src="/dna.png" />
        <h2 className="text-white text-xl">healix</h2>
      </div>

      {/* Tooltip on hover */}
      <div className="relative group cursor-pointer">
        <ClearAllIcon className="text-white" />
        <span className="absolute right-0 top-full mt-1 hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
          Delete
        </span>
      </div>
    </div>
  );
};

export default NavbarU;
