"use client"
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useHospitalstore } from '../../store/useHopitalstore';
import toast from 'react-hot-toast';


const Editprofile=({setEditopenbox,setStoredata})=>{

  const {Editprofile}=useHospitalstore()

    const [fullname,setFullname]=useState("")
    const [profilepic,setProfilepic]=useState("")

   

    const mutation=useMutation({
      mutationFn:Editprofile,
      onSuccess:(data)=>{
        setStoredata(data)
        toast.success("profile updated succesfully...")
        // console.log("done_data",data)
        // console.log("done...")
      }
    })

    const handlesubmit=(e)=>{
      e.preventDefault()
      const formdata=new FormData()
      formdata.append('fullname',fullname)
      if(profilepic) formdata.append('profilepic',profilepic)
      mutation.mutate(formdata)  
      setTimeout(() => {
        setEditopenbox(false)
      }, 1500);
    }

    return(
         <div className="fixed inset-0  z-50 flex justify-center items-center bg-black/40 backdrop-blur-sm px-4 ">
      <div className="relative  h-[420px] w-[40vw] bg-white ring-1 ring-gray-700/50 bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden animate-fadeIn border-2 border-black  shadow-[3px_3px_0px_white] hover:shadow-[4px_4px_0px_white]">
    

           <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-4 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-white">Update profile</h2>
                    <span><CloseIcon onClick={()=>setEditopenbox(false)} className="text-white cursor-pointer" /></span>
                  </div>

                  <form onSubmit={handlesubmit} className='p-6 flex flex-col justify-between gap-4'>
                    <input type='file'
                     className="w-full border-4 border-black  shadow-[6px_6px_0px_black] hover:shadow-[8px_8px_0px_black] p-2 bg-white focus:border-blue-500 outline-none"
                     onChange={(e)=>setProfilepic(e.target.files[0])}/>

                     <input type='text'
                      className="w-full font-semibold text-black border-4 border-black  shadow-[6px_6px_0px_black] hover:shadow-[8px_8px_0px_black] p-2 bg-white focus:border-blue-500 outline-none"
                      placeholder='Update Name...' value={fullname} onChange={(e)=>setFullname(e.target.value)}/>

                  <div className="absolute bottom-0 left-0 right-0 p-4">
                     <button type='submit'
                      className="w-full cursor-pointer  h-10  border-4 border-black  shadow-[6px_6px_0px_black] hover:shadow-[8px_8px_0px_black]  bg-blue text-[white] font-semibold focus:border-blue-500 outline-none"
                     >UPDATE</button>
                 </div>
                  </form>
          </div>
      </div>
    )
}

export default Editprofile