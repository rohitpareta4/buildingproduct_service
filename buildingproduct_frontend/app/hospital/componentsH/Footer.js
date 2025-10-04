// const Footer=()=>{
//     return(
//         <div className="">
//             <div className="flex">
//                 <div>
//                     <img className="h-40 w-80" src='/footerpic_1.png'/>
//                 </div>
//                 <div>
//                     <img className="h-40 w-80" src='/footerpic_2.png'/>
//                 </div>
//                 <div>
//                     <img className="h-40 w-80"  src='/footerpic_3.png'/>
//                 </div>
//                 <div>
//                     <img className="h-40 w-80"  src='/footerpic_4.png'/>

//                 </div>
//                 <div>
//                     <img className="h-40 w-80"  src='/footerpic_5.png'/>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Footer
"use client"

import { Phone, Mail, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <div className="">
          <div className="max-w-7xl mx-auto mt-10 flex  justify-center gap-6 px-6 py-6 ">
        <img className="h-40 w-80 object-contain" src="/footerpic_1.png" alt="Partner 1" />
        <img className="h-40 w-80 object-contain" src="/footerpic_2.png" alt="Partner 2" />
        <img className="h-40 w-80 object-contain" src="/footerpic_3.png" alt="Partner 3" />
        <img className="h-40 w-80 object-contain" src="/footerpic_4.png" alt="Partner 4" />
        <img className="h-40 w-80 object-contain" src="/footerpic_5.png" alt="Partner 5" />
      </div>
    <footer className="bg-gradient-to-r from-blue-800 to-blue-600 text-white mt-12 border-2  shadow-[0_-2px_2px_white]">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Hospital Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">🏥 HealthCare Panel</h2>
          <p className="text-sm leading-relaxed">
            Providing real-time information about hospital beds, doctors, and ambulance availability to save lives faster.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-yellow-300 transition-colors">Home</a></li>
            <li><a href="/beds" className="hover:text-yellow-300 transition-colors">Available Beds</a></li>
            <li><a href="/doctors" className="hover:text-yellow-300 transition-colors">Doctors</a></li>
            <li><a href="/ambulance" className="hover:text-yellow-300 transition-colors">Ambulance</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-yellow-300" /> +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-yellow-300" /> support@healthpanel.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-yellow-300" /> Kota, Rajasthan, India
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Images Row */}
      

      {/* Bottom Bar */}
      <div className="bg-blue-900 py-4 text-center text-sm">
        © {new Date().getFullYear()} HealthCare Panel. All rights reserved.
      </div>
    </footer>
    </div>
  )
}

export default Footer
