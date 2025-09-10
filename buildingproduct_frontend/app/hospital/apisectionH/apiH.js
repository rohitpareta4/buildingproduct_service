import axios from "axios"


export const login=async(loginHdata)=>{
    try {
            const res=await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/loginH`,loginHdata,{
            withCredentials:true
        })
        console.log('hadmin..........',res.data)
        return res.data
        
    } catch (error) {
        console.log(error)
    }
}
export const signup=async(signupHdata)=>{
    try {
        const res=await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/signupH`,signupHdata,{
            withCredentials:true
        })
        console.log('hadmin..........',res.data)
        return res.data
        
    } catch (error) {
        console.log(error)
    }
}