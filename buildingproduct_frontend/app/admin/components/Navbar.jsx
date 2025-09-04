const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 border-2  border-white h-[80px] flex justify-between items-center px-8 py-4 shadow-lg">
      {/* Logo */}
      <h1 className="tracking-wide cursor-pointer">
        <img className="h-40 w-48" src="/healix.png"/>
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
