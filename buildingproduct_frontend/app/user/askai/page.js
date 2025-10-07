import Sidebar from "../componentsU/sidebar/page"
import NavbarU from "../componentsU/NavbarU/page"
import Chatcontainer from "../chat/chatcontainer"
import Chatinput from "../chat/chatinput"

const askai=()=>{
    return(
        <div className="grid grid-cols-4">
          <div className=" col-span-1 ">
            <Sidebar/>
          </div>
          <div className="bg-[#181818] col-span-3">
            <NavbarU/>
            <Chatcontainer/>
            <Chatinput/>
          </div>
        </div>
    )
}
export default askai