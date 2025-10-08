"use client"
import { useState } from "react"
import Sidebar from "../componentsU/sidebar/page"
import NavbarU from "../componentsU/NavbarU/page"
import Chatcontainer from "../chat/chatcontainer"
import Chatinput from "../chat/chatinput"
import PhonelinkEraseIcon from "@mui/icons-material/PhonelinkErase";


const askai=()=>{

  const [expand,setExpand]=useState(false)
  const [isslide,setIsslide]=useState(false)

    return(
        // <div className={`grid grid-cols-4`}>
        <div className={`flex w-full`}>

          {/* <div className={`col-span-1`}> */}
          <div className={`relative ${expand?'w-1/12':'w-1/4'} transition-[width] duration-300 ease-in-out bg-[#181818]`}>
            <Sidebar expand={expand} setExpand={setExpand} setIsslide={setIsslide} isslide={isslide}/>
            <PhonelinkEraseIcon className="text-white top-4 left-4 absolute" style={{ height:"36px", width:"36px" }}/>
          </div>
    

          {/* <div className={`bg-[#181818] col-span-3`}> */}
          <div className={`${expand?'w-11/12':'w-3/4'}`}>
            <NavbarU expand={expand}/>
            <Chatcontainer expand={expand}/>
            <Chatinput expand={expand}/>
          </div>
        </div>
 
    )
}
export default askai

