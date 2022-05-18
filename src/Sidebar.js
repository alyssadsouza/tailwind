import React from "react";
import { FaHorseHead, FaPaperPlane, FaMoon, FaSkull, FaHamburger } from 'react-icons/fa';

function Sidebar() {
  return (
    <div className='fixed top-0 left-0 h-screen w-16 m-0
                    flex flex-col
                    bg-gray-800 text-emerald-400 shadow-lg'>
      <li><SidebarIcon icon={<FaHorseHead size="28" />} /></li>
      <li><SidebarIcon icon={<FaPaperPlane size="28" />} /></li>
      <li><SidebarIcon icon={<FaMoon size="28" />} /></li>
      <li><SidebarIcon icon={<FaSkull size="28" />} /></li>
      <li><SidebarIcon icon={<FaHamburger size="28" />} /></li>
    </div>
  );
}

const SidebarIcon = ({ icon, text = "tooltip 💡" }) => {
    return (
        <div className="sidebar-icon group">
            {icon}

            <span class="sidebar-tooltip group-hover:scale-100">
                {text}
            </span>
        </div>
    );
}

export default Sidebar;