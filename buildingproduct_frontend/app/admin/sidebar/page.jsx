// import { Building, Ambulance, PlusSquare, BarChart3, Search, LogOut } from "lucide-react";

// const Sidebar = () => {
//   return (
//     <div className="bg-gradient-to-b from-blue-700 to-blue-900 h-full p-4 shadow-lg border-r-2 border-l-2 border-white flex flex-col justify-between">
      
//       {/* 🔹 Top Section (Menu) */}
//       <div className="flex flex-col gap-6">
//         <button className="flex items-center gap-3 text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
//           <Search size={20} /> Search Hospitals...
//         </button>

//         <button className="flex items-center gap-3 text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
//           <Building size={20} /> Hospitals List
//         </button>

//         <button className="flex items-center gap-3 text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
//           <Ambulance size={20} /> Ambulance
//         </button>

//         <button className="flex items-center gap-3 text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
//           <PlusSquare size={20} /> Add Ambulance
//         </button>

//         <button className="flex items-center gap-3 text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
//           <PlusSquare size={20} /> Add Hospitals
//         </button>

//         <button className="flex items-center gap-3 text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
//           <BarChart3 size={20} /> View Analytics
//         </button>
//       </div>

//       {/* 🔹 Bottom Section (Logout) */}
//       <div>
//         <button className="flex w-full items-center gap-3 text-red-400 font-medium px-4 py-2 rounded-lg hover:bg-red-600 hover:text-white transition duration-300">
//           <LogOut size={20} /> Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import { Building, Ambulance, PlusSquare, BarChart3, Search, LogOut } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="bg-[yellow] h-full p-4 shadow-xl border-r-2 border-black flex flex-col justify-between">
      
      {/* 🔹 Top Section (Menu) */}
      <div className="flex flex-col gap-4">
        <button className="flex items-center gap-3 text-black font-medium px-4 py-2 rounded-lg hover:bg-white/20 transition duration-300">
          <Search size={20} /> Search Hospitals...
        </button>

        <button className="flex items-center gap-3 text-black font-medium px-4 py-2 rounded-lg hover:bg-white/20 transition duration-300">
          <Building size={20} /> Hospitals List
        </button>

        <button className="flex items-center gap-3 text-black font-medium px-4 py-2 rounded-lg hover:bg-white/20 transition duration-300">
          <Ambulance size={20} /> Ambulance
        </button>

        <button className="flex items-center gap-3 text-black font-medium px-4 py-2 rounded-lg hover:bg-white/20 transition duration-300">
          <PlusSquare size={20} /> Add Ambulance
        </button>

        <button className="flex items-center gap-3 text-black font-medium px-4 py-2 rounded-lg hover:bg-white/20 transition duration-300">
          <PlusSquare size={20} /> Add Hospitals
        </button>

        <button className="flex items-center gap-3 text-black font-medium px-4 py-2 rounded-lg hover:bg-white/20 transition duration-300">
          <BarChart3 size={20} /> View Analytics
        </button>
      </div>

      {/* 🔹 Bottom Section (Logout) */}
      <div>
        <button className="flex w-full items-center gap-3 text-black font-medium px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white transition duration-300">
          <LogOut size={20} /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

// bg-gradient-to-r from-[#f1d188] to-[#f1d188]

