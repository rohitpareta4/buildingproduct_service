"use client"
import MicIcon from "@mui/icons-material/Mic"

const Chatinput = () => {
  return (
    <div className="bg-[#212121] h-[6rem] flex justify-center items-center">
      <div className="relative w-2/3">
        {/* Input Field */}
        <input
          type="text"
          className="text-white h-16 w-full bg-[#303030] rounded-full p-4 pr-12 placeholder-gray-400 focus:outline-none"
          placeholder="Ask about availability"
        />

        {/* Mic Icon inside input */}
        <MicIcon
          className="text-white absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer bg-[blue] rounded-full p-2 hover:text-gray-300 transition"
          style={{ height: "40px", width: "40px" }}
        />
      </div>
    </div>
  )
}

export default Chatinput

