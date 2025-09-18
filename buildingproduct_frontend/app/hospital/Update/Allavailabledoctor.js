import CloseIcon from '@mui/icons-material/Close';
import { useQuery } from '@tanstack/react-query';
import { useHospitalstore } from '../store/useHopitalstore';
import { FaUserDoctor } from "react-icons/fa6"; // doctor icon
import { MdVerified } from "react-icons/md";   // verified tick

const Allavailabledoctor = ({ setShowalldoctors }) => {

  const { getavailabledoctors } = useHospitalstore();

  const { data, isLoading } = useQuery({
    queryKey: ["doctor"],
    queryFn: getavailabledoctors
  });

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/40 backdrop-blur-sm px-4">
        <p className="text-white text-lg">Loading doctors...</p>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/40 backdrop-blur-sm px-4">
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800  w-full max-w-2xl h-[400px] bg-white ring-1 ring-gray-700/50 shadow-[3px_3px_0px_white] border-2 border-black">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">View All Doctors</h2>
          <CloseIcon
            onClick={() => setShowalldoctors(false)}
            className="text-white cursor-pointer"
          />
        </div>

        {/* Scrollable content */}
        <div className="p-4 overflow-y-auto h-[calc(100%-64px)] space-y-3">
          {data && data.length > 0 ? (
            data.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-white rounded-xl shadow-md hover:shadow-lg transition px-4 py-3 border border-gray-200"
              >
                {/* Left: icon + name + specialty */}
                <div className="flex items-center gap-3">
                  <FaUserDoctor className="text-blue-600 text-2xl" />
                  <div className="flex flex-col">
                    <p className="font-semibold text-gray-800">{item.doctorname}</p>
                    <p className="font-semibold text-gray-500">{item.speciality || "none"}</p>
                  </div>
                </div>

                {/* Right: availability status */}
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
            <p className="text-center text-gray-600">No doctors available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Allavailabledoctor;


