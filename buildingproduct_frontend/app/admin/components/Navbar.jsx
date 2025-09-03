// const Navbar=()=>{
//     return(
//         <div className="bg-[gray] flex justify-around">
//            <div className="">
//               <h1 className="text-[white]">HospitalLogo</h1>
//            </div>
//            <div className="flex gap-4">
//             <div>
//              <h1 className="text-[white]">Admin</h1>
//              </div>
//                 <div>
//              <h1 className="text-[white]">settings</h1>
//              </div>
//            </div>
//         </div>
//     )
// }

// export default Navbar
const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 flex justify-between items-center px-8 py-4 shadow-lg">
      {/* Logo */}
      <h1 className="text-white font-bold text-2xl tracking-wide cursor-pointer">
        HospitalLogo
      </h1>

      {/* Right Section */}
      <div className="flex gap-6 items-center">
        <h1 className="text-white font-medium hover:text-yellow-300 transition-colors cursor-pointer">
          Admin
        </h1>
        <h1 className="text-white font-medium hover:text-yellow-300 transition-colors cursor-pointer">
          Settings
        </h1>
      </div>
    </div>
  )
}

export default Navbar
