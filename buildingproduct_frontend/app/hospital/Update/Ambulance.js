import CloseIcon from '@mui/icons-material/Close';
import { useHospitalstore } from '../store/useHopitalstore';
import { useQuery } from '@tanstack/react-query';


const Ambulance=({setShowambulances})=>{

    const {AmbulanceList}=useHospitalstore()

    const {data}=useQuery({
        queryKey:["ambulance"],
        queryFn:AmbulanceList
    })

    

    return(
          <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/40 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-2xl h-[400px] bg-white ring-1 ring-gray-700/50 bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden animate-fadeIn border-2 border-black shadow-[3px_3px_0px_white] hover:shadow-[4px_4px_0px_white]">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">Ambulance Info list</h2>
          <span>
            <CloseIcon onClick={() => setShowambulances(false)} className="text-white cursor-pointer" />
          </span>
        </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 p-4 overflow-y-scrool">
  {data?.length > 0 ? (
    data.map((item, i) => (
      <div
        key={i}
        className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
      >
        <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
          🚑 {item.drivername}
        </h2>
        <p className="text-gray-200 text-sm">📞 {item.phone}</p>
      </div>
    ))
  ) : (
    <div className="text-gray-400 text-center p-6">
      No ambulance data available
    </div>
  )}
</div>


       
        </div>
         </div>
    )
}
export default Ambulance

