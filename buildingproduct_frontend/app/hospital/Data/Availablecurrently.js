import HotelIcon from '@mui/icons-material/Hotel';
import MedicationIcon from '@mui/icons-material/Medication';

const Available=()=>{
    return(
        <div className="flex gap-2 p-6 justify-center ">
            <div className="bg-[blue] p-4 border-2 border-black">
            {/* Available beds */}
            <span><HotelIcon  style={{color:'yellow',fontSize: 80}}/></span>
               <h1 className="text-[white] font-semibold">Available beds</h1>
               <p className="flex flex-col text-[white] font-semibold">
               <span> ICU Beds: 5 available</span>
               <span> Private Beds: 12 available</span>
              <span> General Beds: 20 available</span>
              </p>
            </div>
             <div className="bg-[blue] p-4 border-2 border-black">
            {/* Available beds */}
               <img src='/stethoscope.png'/>
               <h1 className="text-[white] font-semibold">Available doctors</h1>
               <p className="flex flex-col text-[white] font-semibold">
               <span> Doctors: 50 available</span>
              </p>
            </div>
            <div className="bg-[blue] p-4 border-2 border-black">
            {/* Available beds */}
            <img src='/amb.png'/>
               <h1 className="text-[white] font-semibold">Available ambulance</h1>
               <p className="flex flex-col text-[white] font-semibold">
               <span> ambulance: 8 available</span>
              </p>
            </div>
        </div>
    )
}

export default Available
