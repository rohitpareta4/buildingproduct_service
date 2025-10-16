


"use client"
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useHospitalstore } from "@/app/hospital/store/useHopitalstore"
import { useState } from 'react';
// import toast from 'react-hot-toast';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const ChatContainer = ({ input,load,setLoad }) => {
  const { responses,get_bot_response } = useHospitalstore()

  console.log("responses...............",responses)

   const {data}=useQuery({
     queryKey:["bot"],
     queryFn:get_bot_response
   })

   console.log("get_bot_response.............",data)

  const [copyindex,setCopyindex]=useState(null)
  const [goodrespo,setGoodrespo]=useState(false)
  const [badrespo,setBadrespo]=useState(false)

  const handlegood=()=>{
    setGoodrespo(!goodrespo)
    if(!goodrespo){
    toast.success('Good response submitted!')
    }
  }
  const handlebad=()=>{
    setBadrespo(!badrespo)
    if(!badrespo){
    toast.success('Bad response submitted!')
    }
  }

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
                {/* {item.sender==="user"?item.text:load===false?<span className='text-white'>loading</span>:item.text} */}
                {item?.sender === "user" ? (
  item.text
) : load && item?.text === "" ? (
  <span className="text-white w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin">loading...</span>
) : (
  item?.text
)}

              </div>
              <div className={`${item.sender==="bot"?"flex gap-4 p-2":""}`}
                
              >
                <div>
              {item.sender==="user"?<span onClick={()=>handlecopy(item.text,index)} className='text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer
'><ContentCopyIcon/></span>:<span onClick={()=>handlecopy(item.text,index)} className='text-gray-400 cursor-pointer'><ContentCopyIcon/></span>}
</div>

  {/* flex gap-4 p-2 */}
   <div className='text-gray-400'>
    <button className='cursor-pointer' onClick={handlegood}>{item.sender==="bot" && !goodrespo?<ThumbUpOffAltIcon/>:<span><ThumbUpIcon/></span>}</button>
   </div>
   <div className='text-gray-400'>
    <button className='cursor-pointer' onClick={handlebad}>{item.sender==="bot" && !badrespo?<ThumbDownOffAltIcon/>:<span><ThumbDownAltIcon/></span>}</button>
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

