import axios from "axios"

export const signup=async(signupdata)=>{
    try {
        const res=await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/signup`,signupdata,{
            withCredentials:true
        })
        return res.data
    } catch (error) {
        console.log('error.....',error)
    }
}

export const login=async(logindata)=>{
    try {
        const res=await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,logindata,{
            withCredentials:true
        })
        return res.data
    } catch (error) {
        console.log('error',error)
    }
}

export const userprofile=async()=>{
    try {
        const res=await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/me`,{
            withCredentials:true
        })
        console.log('profile....',res.data)
        return res.data
        
    } catch (error) {
        console.log(error)
        return null
    }
}