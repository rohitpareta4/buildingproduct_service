"use client"
import { me } from "../../apisectionH/apiH"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react";
import Editprofile from "../Editprofile/page";

const Page = () => {

  const [openeditbox,setEditopenbox]=useState(false)
  const [storedata,setStoredata]=useState({})

  const { data, isLoading } = useQuery({
    queryKey: ["me"],
    queryFn: me,
  });

  console.log("user....",data)
  console.log("storedata......",storedata)

  const editprofile=()=>{
    setEditopenbox(true)
  }

  if (isLoading) return <p className="text-white text-center">Loading...</p>;

  return (
<div>
  
    <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-r from-indigo-600 via-purple-800 to-pink-700 ">
      {!openeditbox && (
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-6 w-[22vw] flex flex-col items-center justify-center  shadow-[3px_3px_0_white] space-y-4">
        
        {/* Profile Image */}
        <div>
          <img
            className="h-24 w-24 rounded-full border-4 border-white shadow-lg ring-4 ring-pink-400 hover:scale-105 transition duration-300"
            src={
              storedata?.profilepic?`${process.env.NEXT_PUBLIC_API_URL}/public/images/uploads/${storedata?.profilepic}`:
              data?.profilepic
                ? `${process.env.NEXT_PUBLIC_API_URL}/public/images/uploads/${data?.profilepic}`
                : `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAV1BMVEX6+vqPj4////+Li4u5ubn8/PyIiIiFhYWJiYnk5OShoaGnp6fT09Pn5+eRkZHu7u7Z2dn19fXCwsKamprHx8exsbHOzs7X19eurq6/v7+jo6Pe3t6WlpZaNtXmAAAE3UlEQVR4nO2d25aqOhBFsUIRbgqI4AX//zsP0fa0vUfbBoKm4ljzpfvROapIIGSFKAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIEWamG+P/vn/Owhi5Juu3XZHnp6Lblutm1PT9q5aDKRriVulEqZVBqUSr9pjxh0gyrWOlr273KL05Vh/gyDTkv+jdJIsscEemrNUP9K7oU0W+f6UD1Bz+9rs4xuEOrFSrR/15T7rJwiwjU/y8gF9l3IWoyHxKLAVHxS68AYej1qZDbyRFaIocbaYIjhNHHlajTqygIS2CUqRiquDYqHFAinS0H2S+0WUwijzYThP/KFahjDY8vUWvtIEUkeK5hkkYMz9X83rUoJsQ+pTy2YIrFcJ4ytn8EoZRRCocBEMoostVeFH0LfAUOs4dSK8kpfQ2pbOT4Gp1Et6mvHZr0vEOXPhYQ7vU0TCphRueHAXFj6bsKij95pSrOY9N/xQxktymPLgbJqKfobh3HWhGw0GyIW3d5vuLoeg5f/6j4TdpL9qwczdUoh+DYWhDuhPdpY5PFhdD2dfhboGxdC/ZkMsFZvxMtOH64+9pGnfDjWTBBR7xxT/ku08XqejpcGzTvWub6rXsLnW/EIVfhu7LGNIXMdxnRC16NjRw5FZD2as0F9xuTWU//l7hxmVNeCO/hKaI89dqdAAljBxe4wdxFRp4P7dPpc/2/zNnv5AhFT8X3uBonuE5FMG57/IT4e/VfkDldEU9hFPCyCx+T1XU+6AEzaw4TVH3gQmaZbcpisFV0DDlWkzD3K1Pa8ud0EnbBClotut3NmXUx9B2sd9B2fmZo86DjgVFTOXmr4d+fa4DLuAV4rJ9EF5TOg/fz2ACiBud/rRUiT5vPyF+eIWJ1v3hnGidGMY/566sPione00CR1U21HU9rCs2YWffP+kV8A3fPwQAAIAP7k/1WApJkwpTM/THeFmOfRYJuelhGgo13nYuTaJX3VqCI1W5awDhIUof/K+hzlkZneKY+F7Bmb4uOhXPq3DUv1rQ85t916CaHcrjtegSF51gePDWp1y/o4Q+X5y+p4RjETtPRVxiq6UlnmrovkvPFl9tusS2dTt87SNaInpgh68IBh3eJLhSWxjCcK7h265DX4afP9IsEDa0w1cUaomQkx2+olBLhJwsDT09IrqfEGFt6CkKxY17cNsOb3ujqX2Tobfj+N41mCbeUqVzT56bis+T6t4i6HN/+3va1Gde7z3zhdfd0e4H7jzHb5rN7fg5OzwfUjc3WmGPOvp9NeOW47Iy9P16jXavvf3W/o/+ovyVfeptufsO19Do34IiwmxLnO/1EP8vuQ30sttTJeWIjFcpihE0W/Jf0KhqI0fQbDmZeIz+c9JWxjV4g7lYtlN1LGGz0A+of/jBnOkoJTGMSM1iZdSdzNMhmYbzEiOObkVsZ/sVpv7PDJCdn+wcDfH+UQbIhiByQkzZQc8qpEqSWG5/3sMUlYVOJn5nRieHOpxPzfEoWXcbW0uT8oqHcPS+GH9wVXZ33wT81c18JzCP96F+DfGS5lrvt4d8oy65tTS9bJZOr/k1dc67XV1Foae8Lrv4uamqoS77frfd7nZ9X9ZZ1TQsbEe+E1+Zte+gARJsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACJP/AAFSQ7wNy+LTAAAAAElFTkSuQmCC`
            }
            alt="Profile"
          />
        </div>

        {/* Info */}
        <p className="text-2xl font-semibold text-white">{storedata?.fullname?storedata.fullname:data.fullname}</p>
        <p className="text-sm text-gray-200">{data?.email}</p>

        {/* Action button */}
        <button className="mt-3 px-5 py-2 bg-pink-500 text-white rounded-xl shadow-md hover:bg-pink-600 transition" onClick={editprofile}>
          Edit Profile
        </button>
       
      </div>
        )}
         {openeditbox && <Editprofile setEditopenbox={setEditopenbox} setStoredata={setStoredata}/>}
    </div>

    </div>
  );
};

export default Page;

