
"use client"
import { Bed } from "lucide-react";
import Updatebeds from "../Update/Updatebeds";
import Markdoctor from "../Update/MarkA&Udoctor";
import { useState,useRef } from "react";
import { useHospitalstore } from "../store/useHopitalstore";
import { useQuery } from "@tanstack/react-query";
import Allavailabledoctor from "../Update/Allavailabledoctor";
import AddAmbulance from "../Update/AddAmbulance";
import Ambulance from "../Update/Ambulance";


const Available = () => {

  const {Availablebeds,getAvailablebedsdata,AvailabledoctorList,getavailabledoctors}=useHospitalstore()

  console.log(Availablebeds)

  const {data}=useQuery({
    queryKey:['beds'],
    queryFn:getAvailablebedsdata
  })

  
  

  console.log("AvailabledoctorList......",AvailabledoctorList)

  const {data:someData,isLoading}=useQuery({
    queryKey:["doctor"],
    queryFn:getavailabledoctors
  })

  console.log("beds data",someData)


    const [showupdatebeds,setShowupdatebeds]=useState(false)
    const [showdoctorAvailability,setShowdoctorAvailability]=useState(false)
    const [showalldoctors,setShowalldoctors]=useState(false)
    const [openAmbulance,setOpenAmbulance]=useState(false)
    const [showambulances,setShowambulances]=useState(false)

    const updatebedsModal=()=>{
        setShowupdatebeds(true)
    }

    const doctorAvailability=()=>{
      setShowdoctorAvailability(true)
    }

    const open_view_alldoctors=()=>{
      setShowalldoctors(true)
    }

    const addAmbulance=()=>{
        setOpenAmbulance(true)
    }

    const bedsref=useRef(null)
    const doctorsref=useRef(null)
    const ambulanceref=useRef(null)

    const scrooltocards=(ref)=>{
      if(ref.current){
        ref.current.scrollIntoView({
          behavior: "smooth",
           block: "center",
        })
      }
    }

    const showambulance=()=>{
        setShowambulances(true)
    }

  return (
    <div className="">
    

  

    <div className="flex flex-col items-center gap-6 p-8 justify-center  h-[80%] ">
      {/* Available Beds Card */}
      <div ref={bedsref} className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 border-2 border-white shadow-[4px_4px_0_white] w-2/3 flex flex-col shadow-2xl transition-all duration-300  hover:shadow-blue-900/30">
        <div className="flex flex-col items-center flex-1">
          <div className="bg-blue-500 p-4 rounded-full mb-4">
            <Bed className="text-yellow-300 w-16 h-16" />
          </div>
          <h1 className="text-white font-bold text-2xl mb-4 tracking-wide">Available Beds</h1>
          <div className="w-full bg-blue-500/30 p-4 rounded-lg mb-4">
          {data && data.length > 0 &&  (
            <p className="flex flex-col text-white font-medium gap-2">
              <span className="flex justify-between"><span>ICU Beds:</span> <span className="text-yellow-300 font-semibold">{data[data.length-1]?.Icubeds} available</span></span>
              <span className="flex justify-between"><span>Private Beds:</span> <span className="text-yellow-300 font-semibold">{data[data.length-1]?.generalbeds} available</span></span>
              <span className="flex justify-between"><span>General Beds:</span> <span className="text-yellow-300 font-semibold">{data[data.length-1]?.privatebeds} available</span></span>
            </p>
          )}
          </div>
        </div>
        <button onClick={updatebedsModal} className="mt-auto text-blue-900 bg-yellow-400 hover:bg-yellow-300 px-6 py-2  font-semibold transition-colors border-4 border-balck shadow-[4px_4px_0_black] duration-200  w-full">Edit</button>
        {showupdatebeds && (
            <Updatebeds setShowupdatebeds={setShowupdatebeds}/>
        )}
      </div>

      {/* Available Doctors Card */}
      <div ref={doctorsref} className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 border-2 border-white shadow-[4px_4px_0_white]  w-2/3 flex flex-col shadow-2xl transition-all duration-300  hover:shadow-blue-900/30">
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
        {isLoading ? (
        <button className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" onClick={open_view_alldoctors}></button>
        ):(
         <button className="mt-auto text-blue-900 bg-yellow-400 hover:bg-yellow-300 px-6 py-2  font-semibold transition-colors border-4 border-balck shadow-[4px_4px_0_black] duration-200  w-full" onClick={open_view_alldoctors}>View All</button>
        )}
       
        {showalldoctors && (
          <Allavailabledoctor setShowalldoctors={setShowalldoctors}/>
        )}
        <button className="mt-auto text-blue-900 bg-green-400 hover:bg-green-300 px-6 py-2  font-semibold transition-colors border-4 border-balck shadow-[4px_4px_0_black] duration-200  w-full" onClick={doctorAvailability}>Mark available & Unavailable</button>
        {showdoctorAvailability && (
          <Markdoctor setShowdoctorAvailability={setShowdoctorAvailability}/>
        )}
      </div>

      {/* Available Ambulance Card */}
      <div ref={ambulanceref} className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 border-2 border-white shadow-[4px_4px_0_white]  w-2/3 flex flex-col shadow-2xl transition-all duration-300  hover:shadow-blue-900/30 ">
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
        <div className="flex w-full">
        <button className="mt-auto text-blue-900 bg-yellow-400 hover:bg-yellow-300 px-6 py-2  font-semibold transition-colors border-4 border-balck shadow-[4px_4px_0_black] duration-200  w-[80%]" onClick={showambulance}>Available Ambulance</button>
        {
          showambulances && (
            <Ambulance setShowambulances={setShowambulances}/>
          )
        }
        <button className="mt-auto text-black-900 bg-yellow-400 hover:bg-yellow-300 px-6 py-2  font-semibold transition-colors border-4 border-balck shadow-[4px_4px_0_black] duration-200  w-[20%]" onClick={addAmbulance}>Add</button>
        {openAmbulance && (
          <AddAmbulance setOpenAmbulance={setOpenAmbulance}/>
        )}
        </div>

      </div>
    </div>
        <div className="absolute fixed top-30 right-6 flex flex-col gap-4">
  {/* Beds */}
  <button
  onClick={()=>scrooltocards(bedsref)}
    className="w-20 h-20 flex items-center justify-center rounded-2xl cursor-pointer
    bg-white/10 backdrop-blur-lg border border-white/20 
    shadow-lg hover:scale-110 hover:shadow-yellow-400/40 
    transition-all duration-300 ease-in-out"
    title="Available Beds"
  >
    <Bed className="text-yellow-300 w-12 h-12" />
  </button>

  {/* Doctors */}
  <button
  onClick={()=>scrooltocards(doctorsref)}
    className="w-20 h-20 flex items-center justify-center rounded-2xl cursor-pointer
    bg-white/10 backdrop-blur-lg border border-white/20 
    shadow-lg hover:scale-110 hover:shadow-green-400/40 
    transition-all duration-300 ease-in-out"
    title="Available Doctors"
  >
    <img
      className="h-12 w-12 object-contain"
      src="/stethosp2.png"
      alt="Doctors Icon"
    />
  </button>

  {/* Ambulance */}
  <button
  onClick={()=>scrooltocards(ambulanceref)}
    className="w-20 h-20 flex items-center justify-center rounded-2xl cursor-pointer
    bg-white/10 backdrop-blur-lg border border-white/20 
    shadow-lg hover:scale-110 hover:shadow-red-400/40 
    transition-all duration-300 ease-in-out"
    title="Available Ambulance"
  >
    <img
      className="h-12 w-12 object-contain"
      src="/amb.png"
      alt="Ambulance Icon"
    />
  </button>
</div>
    </div>
  );
};

export default Available;


// flex flex-col justify-end items-star gap-4 p-4


// "use client"
// import { Bed } from "lucide-react";
// import Updatebeds from "../Update/Updatebeds";
// import { useRef, useState } from "react";

// const Available = () => {
//   const [showupdatebeds, setShowupdatebeds] = useState(false);

//   const bedsRef = useRef(null);
//   const doctorsRef = useRef(null);
//   const ambulanceRef = useRef(null);

//   const updatebedsModal = () => {
//     setShowupdatebeds(true);
//   };

//   // Scroll function
//   const scrollToSection = (ref) => {
//     if (ref.current) {
//       ref.current.scrollIntoView({
//         behavior: "smooth",
//         block: "center",
//       });
//     }
//   };

//   return (
//     <div className="flex mt-2">
//       {/* Sidebar */}
//       <div className="flex flex-col bg-black/40 fixed left-4 gap-4">
//         <button
//           onClick={() => scrollToSection(bedsRef)}
//           className="border-2 border-white bg-red-600 w-20 h-20 flex items-center justify-center rounded-xl hover:scale-110 hover:shadow-xl transition-transform duration-300"
//           title="Available Beds"
//         >
//           <Bed className="text-yellow-300 w-12 h-12" />
//         </button>

//         <button
//           onClick={() => scrollToSection(doctorsRef)}
//           className="border-2 border-white bg-red-600 w-20 h-20 flex items-center justify-center rounded-xl hover:scale-110 hover:shadow-xl transition-transform duration-300"
//           title="Available Doctors"
//         >
//           <img
//             className="h-12 w-12 object-contain"
//             src="/stethoscope.png"
//             alt="Doctors Icon"
//           />
//         </button>

//         <button
//           onClick={() => scrollToSection(ambulanceRef)}
//           className="border-2 border-white bg-red-600 w-20 h-20 flex items-center justify-center rounded-xl hover:scale-110 hover:shadow-xl transition-transform duration-300"
//           title="Available Ambulance"
//         >
//           <img
//             className="h-12 w-12 object-contain"
//             src="/amb.png"
//             alt="Ambulance Icon"
//           />
//         </button>
//       </div>

//       {/* Main content */}
//       <div className="flex flex-col items-center gap-12 p-8 justify-center w-full ml-40">
//         {/* Available Beds Card */}
//         <div
//           ref={bedsRef}
//           className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 border-2 border-white w-1/2 flex flex-col shadow-2xl  transition-all duration-300 hover:shadow-blue-900/40 hover:-translate-y-2"
//         >
//           <div className="flex flex-col items-center flex-1">
//             <div className="bg-blue-500 p-4 rounded-full mb-4 shadow-md">
//               <Bed className="text-yellow-300 w-16 h-16" />
//             </div>
//             <h1 className="text-white font-bold text-2xl mb-4 tracking-wide">
//               Available Beds
//             </h1>
//             <div className="w-full bg-blue-500/30 p-4 rounded-lg mb-4 backdrop-blur-md border border-white/20">
//               <p className="flex flex-col text-white font-medium gap-2">
//                 <span className="flex justify-between">
//                   <span>ICU Beds:</span>
//                   <span className="text-yellow-300 font-semibold">
//                     5 available
//                   </span>
//                 </span>
//                 <span className="flex justify-between">
//                   <span>Private Beds:</span>
//                   <span className="text-yellow-300 font-semibold">
//                     12 available
//                   </span>
//                 </span>
//                 <span className="flex justify-between">
//                   <span>General Beds:</span>
//                   <span className="text-yellow-300 font-semibold">
//                     20 available
//                   </span>
//                 </span>
//               </p>
//             </div>
//           </div>
//           <button
//             onClick={updatebedsModal}
//             className="mt-auto text-blue-900 bg-yellow-400 hover:bg-yellow-300 px-6 py-2 font-semibold transition-colors duration-200 shadow-md w-full "
//           >
//             Edit
//           </button>
//           {showupdatebeds && (
//             <Updatebeds setShowupdatebeds={setShowupdatebeds} />
//           )}
//         </div>

//         {/* Available Doctors Card */}
//         <div
//           ref={doctorsRef}
//           className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 border-2 border-white w-1/2 flex flex-col shadow-2xl  transition-all duration-300 hover:shadow-blue-900/40 hover:-translate-y-2"
//         >
//           <div className="flex flex-col items-center flex-1">
//             <div className="bg-blue-500 p-4 rounded-full mb-4 shadow-md">
//               <img
//                 className="h-16 w-16 object-contain"
//                 src="/stethoscope.png"
//                 alt="Doctors Icon"
//               />
//             </div>
//             <h1 className="text-white font-bold text-2xl mb-4 tracking-wide">
//               Available Doctors
//             </h1>
//             <div className="w-full bg-blue-500/30 p-4 rounded-lg mb-4 backdrop-blur-md border border-white/20">
//               <p className="text-white font-medium text-center">
//                 <span className="text-3xl font-bold text-yellow-300 block">
//                   50
//                 </span>
//                 <span className="text-lg">doctors available</span>
//               </p>
//             </div>
//           </div>
//           <button className="mt-auto text-blue-900 bg-yellow-400 hover:bg-yellow-300 px-6 py-2 font-semibold transition-colors duration-200 shadow-md w-full">
//             View All
//           </button>
//         </div>

//         {/* Available Ambulance Card */}
//         <div
//           ref={ambulanceRef}
//           className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 border-2 border-white w-1/2 flex flex-col shadow-2xl  transition-all duration-300 hover:shadow-blue-900/40 hover:-translate-y-2"
//         >
//           <div className="flex flex-col items-center flex-1">
//             <div className="bg-blue-500 p-4 rounded-full mb-4 shadow-md">
//               <img
//                 className="h-16 w-16 object-contain"
//                 src="/amb.png"
//                 alt="Ambulance Icon"
//               />
//             </div>
//             <h1 className="text-white font-bold text-2xl mb-4 tracking-wide">
//               Available Ambulance
//             </h1>
//             <div className="w-full bg-blue-500/30 p-4 rounded-lg mb-4 backdrop-blur-md border border-white/20">
//               <p className="text-white font-medium text-center">
//                 <span className="text-3xl font-bold text-yellow-300 block">
//                   8
//                 </span>
//                 <span className="text-lg">ambulances available</span>
//               </p>
//             </div>
//           </div>
//           <button className="mt-auto text-blue-900 bg-yellow-400 hover:bg-yellow-300 px-6 py-2 font-semibold transition-colors duration-200 shadow-md w-full ">
//             Request
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Available;

