


"use client"
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useHospitalstore } from "@/app/hospital/store/useHopitalstore"
import { useState } from 'react';
import toast from 'react-hot-toast';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { useQuery } from '@tanstack/react-query';

const ChatContainer = ({ input }) => {
  const { responses,get_bot_response } = useHospitalstore()

  console.log("responses...............",responses)

   const {data}=useQuery({
     queryKey:["bot"],
     queryFn:get_bot_response
   })

   console.log("get_bot_response.............",data)

  const [copyindex,setCopyindex]=useState(null)

  const handlecopy=async(text,index)=>{
    try {
        await navigator.clipboard.writeText(text)
    setCopyindex(index)
    toast.success("copied!!")
    setTimeout(() => {
      setCopyindex(null)
    }, 1500);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="bg-[#212121] h-[calc(100vh-10rem)] flex flex-col items-center overflow-y-auto scrollbar-gray ">
      {/* Chat Messages Area */}
      <div className="w-full max-w-3xl flex-1  p-4 space-y-4 ">
        {responses.length === 0 ? (
          <div className="h-full flex justify-center items-center">
            <h1 className="text-white text-center text-xl font-semibold opacity-70">
              Your Trusted Guide to Hospital Availability
            </h1>
          </div>
        ) : (
          responses.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col gap-2 group ${
                item.sender === "user" ? "justify-end items-end" : "justify-center"
              }`}
            >
              <div
                className={`max-w-[100%] p-3  text-sm leading-relaxed ${
                  item.sender === "user"
                    ? "bg-blue-600 text-white rounded-2xl"
                    : " text-gray-100"
                } shadow-md`}
              >
                {item.text}
              </div>
              <div className={`${item.sender==="bot"?"flex gap-4 p-2":""}`}
                
              >
                <div>
              {item.sender==="user"?<span onClick={()=>handlecopy(item.text,index)} className='text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer
'><ContentCopyIcon/></span>:<span onClick={()=>handlecopy(item.text,index)} className='text-gray-400 cursor-pointer'><ContentCopyIcon/></span>}
</div>

  {/* flex gap-4 p-2 */}
   <div className='text-gray-400'>
    <button>{item.sender==="bot"?<ThumbUpOffAltIcon/>:<span></span>}</button>
   </div>
   <div className='text-gray-400'>
    <button>{item.sender==="bot"?<ThumbDownOffAltIcon/>:<span></span>}</button>
   </div>
   


              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default ChatContainer

