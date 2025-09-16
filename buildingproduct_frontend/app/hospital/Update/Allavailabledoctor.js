import CloseIcon from '@mui/icons-material/Close';

const Allavailabledoctor=({setShowalldoctors})=>{
    return(
            <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/40 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-2xl h-[400px] bg-white ring-1 ring-gray-700/50 bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden animate-fadeIn border-2 border-black shadow-[3px_3px_0px_white] hover:shadow-[4px_4px_0px_white]">
           <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-4 flex justify-between items-center">
                   <h2 className="text-xl font-bold text-white">View All doctor's</h2>
                   <span>
                     <CloseIcon onClick={() => setShowalldoctors(false)} className="text-white cursor-pointer" />
                   </span>
                 </div>
      </div>
      </div>
    )
}

export default Allavailabledoctor