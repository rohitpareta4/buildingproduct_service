import CloseIcon from '@mui/icons-material/Close';
import { useQuery } from '@tanstack/react-query';
import { useHospitalstore } from '../store/useHopitalstore';
import { FaUserDoctor } from "react-icons/fa6"; // doctor icon
import { MdVerified } from "react-icons/md";   // verified tick

const Allavailabledoctor=({setShowalldoctors})=>{

  const {getavailabledoctors,AvailabledoctorList}=useHospitalstore()

  console.log("AvailabledoctorList......",AvailabledoctorList)

  const {data,isLoading}=useQuery({
    queryKey:["doctor"],
    queryFn:getavailabledoctors
  })

  console.log("doctors list...",data)

  // if(isLoading){
  //   return <p>loading....</p>
  // }

    return(
            <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/40 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-2xl h-[400px] overflow-y-scroll bg-white ring-1 ring-gray-700/50 bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden animate-fadeIn border-2 border-black shadow-[3px_3px_0px_white] hover:shadow-[4px_4px_0px_white]">
           <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-4 flex justify-between items-center">
                   <h2 className="text-xl font-bold text-white">View All doctor's</h2>
                   <span>
                     <CloseIcon onClick={() => setShowalldoctors(false)} className="text-white cursor-pointer" />
                   </span>
                 </div>


                    <div className="p-4 overflow-y-auto h-[calc(500px-64px)] space-y-3">
          {data && data.length > 0 ? (
            data.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-white rounded-xl shadow-md hover:shadow-lg transition px-4 py-3 border border-gray-200"
              >
                {/* Left side: icon + name */}
                <div className="flex items-center gap-3">
                  <FaUserDoctor className="text-blue-600 text-2xl" />
                  <p className="font-semibold text-gray-800">{item.doctorname}</p>
                </div>

                {/* Right side: status */}
                {item.isdoctor ? (
                  <span className="flex items-center gap-1 text-green-600 font-medium text-sm bg-green-100 px-2 py-1 rounded-full">
                    <MdVerified /> Available
                  </span>
                ) : (
                  <span className="text-red-500 font-medium text-sm bg-red-100 px-2 py-1 rounded-full">
                    Not Available
                  </span>
                )}
              </div>
            ))
          ) : (
            <p className="text-center text-white">No doctors available</p>
          )}
        </div>
      </div>
      </div>
    )
}

export default Allavailabledoctor

