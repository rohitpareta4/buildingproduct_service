import Navbar from "../componentsH/Navbar"
import Footer from "../componentsH/Footer"
import Available from "../Data/Availablecurrently"

const Homepage=()=>{
    return(
        <div className="p-2">
           <Navbar/>
           <Available/>
           <Footer/>
        </div>
    )
}

export default Homepage