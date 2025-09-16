

"use client"
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useHospitalstore } from '../store/useHopitalstore';

const AddAmbulance = ({ setOpenAmbulance }) => {
  const [drivername, setDrivername] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");

  const {AddAmbulance}=useHospitalstore()

  // Function to get current location
  const handleUseLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords = `${position.coords.latitude}, ${position.coords.longitude}`;
          setLocation(coords);
        },
        () => {
          alert("Unable to fetch location. Please allow location access.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const mutation=useMutation({
    mutationFn:AddAmbulance,
    onSuccess:()=>{
        console.log("done...")
    }
  })

  const handlesubmit=(e)=>{
     e.preventDefault()
     const adddata={
        drivername:drivername,
        phone:phone,
        location:location
     }
     mutation.mutate(adddata)
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/40 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-2xl h-[450px] bg-white ring-1 ring-gray-700/50 bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden animate-fadeIn border-2 border-black shadow-[3px_3px_0px_white] hover:shadow-[4px_4px_0px_white]">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">Add Ambulance</h2>
          <span>
            <CloseIcon onClick={() => setOpenAmbulance(false)} className="text-white cursor-pointer" />
          </span>
        </div>

        {/* Form */}
        <form onSubmit={handlesubmit} className="p-6 flex flex-col justify-center items-center gap-3">
          <input
            type="text"
            className="w-full border-4 border-black shadow-[6px_6px_0px_black] hover:shadow-[8px_8px_0px_black] p-2 bg-white focus:border-blue-500 outline-none"
            value={drivername}
            onChange={(e) => setDrivername(e.target.value)}
            placeholder="Driver Name..."
          />

          <input
            type="text"
            className="w-full border-4 border-black shadow-[6px_6px_0px_black] hover:shadow-[8px_8px_0px_black] p-2 bg-white focus:border-blue-500 outline-none"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone..."
          />

          <div className="w-full flex gap-2">
           
            <button
              type="button"
              onClick={handleUseLocation}
              className="px-4 bg-yellow-400 font-bold border-4 border-black shadow-[4px_4px_0px_black] hover:shadow-[6px_6px_0px_black] transition-all"
            >
              Use Location
            </button>
          </div>
               <div className="absolute bottom-0 left-0 right-0 p-4">
          <button type="submit" className="w-full h-10 font-bold bg-yellow-400 hover:bg-yellow-500 border-4 border-gray shadow-[6px_6px_0px_white] hover:shadow-[8px_8px_0px_white] transition-all">
            UPDATE
          </button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default AddAmbulance;
