import { SiWechat } from "react-icons/si";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineChatAlt } from "react-icons/hi";
import { RiGroupLine } from "react-icons/ri";
import { TiContacts } from "react-icons/ti";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineDarkMode } from "react-icons/md";
import user from "../assets/dp/user.jpeg"

export default function Aside() {
  return (
    <aside>
      <div>
      <SiWechat size={30} color="7369ee"/>
      </div>

      <div>
        <div><FaRegUser /></div>
        <div><HiOutlineChatAlt /></div>
        <div><RiGroupLine /></div>
        <div><TiContacts /></div>
        <div><IoSettingsOutline /></div>      
      </div>

      <div className="aside-profile">
        <MdOutlineDarkMode />
        <div className="profile icon" style={{backgroundImage: `url(${user})`}}>
          
        </div>
      </div>
      
    </aside>
  )
}
