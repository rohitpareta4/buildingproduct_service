
    
    "use client"
    import { useState } from "react"
    import { useRouter } from "next/navigation"
    import { useMutation } from "@tanstack/react-query"
    // import { login } from "../../apisection/api"
    import { login } from "../../apisectionH/apiH"
    

    const Login = () => {
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const router = useRouter()

      const mutation=useMutation({
        mutationFn:login,
        onSuccess:()=>{
          router.push('/hospital/Hospitalinfo')
          console.log('done...');
        }
      })

      const handlesubmit=(e)=>{
        e.preventDefault()
          const loginHdata={
            email:email,
            password:password
          }

          mutation.mutate(loginHdata)
      }
    
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-yellow-300 to-red-400">
          <form 
          onSubmit={handlesubmit}
            className="bg-yellow-300 border-4 border-black p-8 w-full max-w-md flex flex-col gap-6  shadow-[6px_6px_0px_black] hover:shadow-[8px_8px_0px_black] transition-all duration-300"
          >
            {/* Mario Style Title */}
            <h2 className="text-5xl font-['Luckiest_Guy'] text-center text-[#e52521] 
                           [-webkit-text-stroke:3px_#ffd200] 
                           [text-shadow:4px_4px_0_#000] 
                           tracking-wide -skew-x-3 -rotate-1">
              Join Us Today
            </h2>
    
            <div className="space-y-5">
              {/* Full Name */}
              
              {/* Email */}
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-base font-bold text-black">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="mario@nintendo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3  border-4 border-black text-blue-600 font-semibold bg-white 
                             focus:outline-none focus:ring-4 focus:ring-green-400 transition-all duration-200 placeholder-gray-400"
                  required
                />
              </div>
    
              {/* Password */}
              <div className="flex flex-col gap-1">
                <label htmlFor="password" className="text-base font-bold text-black">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3  border-4 border-black text-blue-600 font-semibold bg-white 
                             focus:outline-none focus:ring-4 focus:ring-yellow-400 transition-all duration-200 placeholder-gray-400"
                  required
                />
              </div>
            </div>
    
            {/* Signup Button */}
            <button
              type="submit"
              className="mt-4 bg-[#e52521] text-white font-['Luckiest_Guy'] text-xl p-4  
                         border-4 border-black shadow-[4px_4px_0px_black] 
                         hover:translate-y-1 hover:shadow-[2px_2px_0px_black] 
                         transition-all duration-200"
            >
            login
            </button>
    
            {/* Login Link */}
            <p className="text-base text-black text-center mt-4 font-semibold">
              Already have an account?{' '}
              <button 
                onClick={() => router.push('/hospital/auth/signup')} 
                className="text-blue-600 underline hover:text-red-600 transition-colors duration-200 font-bold"
              >
                signup
              </button>
               <button 
                onClick={() => router.push('/hospital/Hospitalinfo')} 
                className="text-blue-600 underline hover:text-red-600 transition-colors duration-200 font-bold"
              >
                Info
              </button>
            </p>
          </form>
        </div>
      )
    }
    
    export default Login