"use client"


const Chooserole=()=>{
    return(
         <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Select Your Role</h1>

      <div className="flex gap-6">
        {/* Admin Button */}
        <a
          href="/homepage"
          className="px-6 py-4 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700"
        >
          🚀 Admin
        </a>

        {/* Hospital Button */}
        <a
          href="/hospital"
          className="px-6 py-4 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700"
        >
          🏥 Hospital
        </a>
      </div>
    </div>
    )
}

export default Chooserole