"use client"
import { useState } from "react"
import Sidebar from "../componentsU/sidebar/page"
import NavbarU from "../componentsU/NavbarU/page"
import Chatcontainer from "../chat/chatcontainer"
import Chatinput from "../chat/chatinput"
import ViewSidebarIcon from '@mui/icons-material/ViewSidebar';



const askai=()=>{

  // const [expand,setExpand]=useState(false)
  const [isslide,setIsslide]=useState(false)
   const [input,setInput]=useState("")
  // expand={expand} setExpand={setExpand} 

    return(
        // <div className={`grid grid-cols-4`}>
        <div className={`flex w-full`}>

          {/* <div className={`col-span-1`}> */}
          {!isslide && (
          <div className={` ${isslide?'w-1/12':'w-1/4'} transition-[width] duration-300 ease-in-out bg-[#181818]`}>
            <Sidebar 

            setIsslide={setIsslide} isslide={isslide} input={input}/>
          </div>
          )}
        {isslide && (
            <div className="w-20 bg-[#181818] transition-all duration-500 ease-in-out">
              <ViewSidebarIcon onClick={()=>setIsslide(prev => !prev)} className="text-white top-16 left-4 cursor-pointer absolute" style={{ height:"36px", width:"36px" }}/>
            </div>
        )}
          
    

          {/* <div className={`bg-[#181818] col-span-3`}> */}
          <div className={`${isslide?'w-11/12':'w-3/4'}`}>
            <NavbarU/>
            <Chatcontainer input={input}/>
            <Chatinput input={input} setInput={setInput}/>
          </div>
        </div>
 
    )
}
export default askai


