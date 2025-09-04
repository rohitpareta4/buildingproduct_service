// "use client";
// import Sidebar from "../sidebar/page";
// import Navbar from "../components/Navbar";

// const Homepage = () => {
//   return (
//     <div className="flex flex-col h-screen">
//     <div className="h-[80px]">
//       <Navbar/>
//     </div>
//     <div className="bg-gray-700 grid grid-cols-4 h-[calc(100%-80px)]">
//       <div className="col-span-1">
//         <Sidebar/>
//       </div>
//       <div className="col-span-3">
//         helllllllllllo
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Homepage;

"use client";
import Sidebar from "../sidebar/page";
import Navbar from "../components/Navbar";

const Homepage = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar (already has height inside component) */}
      <Navbar />

      {/* Content below navbar */}
      <div className="bg-gray-700 grid grid-cols-4 h-[calc(100vh-80px)]">
        <div className="col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-3 p-4 text-white">
          helllllllllllo
        </div>
      </div>
    </div>
  );
};

export default Homepage;
