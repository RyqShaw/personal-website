import './globals.css';
import { ReactNode } from 'react';
import { BsFillLightningFill } from 'react-icons/bs';
import { FaHome, FaPhone } from 'react-icons/fa';
import { FaPerson } from 'react-icons/fa6';

const SideBar = () => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 m-0 justify-center
                     flex flex-col
                     bg-zinc-900 text-white shadow-lg"
    >
      <SideBarIcon icon={<FaHome size={'32'} />} text="Home" />
      <SideBarIcon icon={<FaPerson size={'32'} />} text="About Me" />
      <SideBarIcon icon={<BsFillLightningFill size={'32'} />} text="Projects" />
      <SideBarIcon icon={<FaPhone size={'28'} />} text="Contact Me" />
    </div>
  );
};

const SideBarIcon = ({ icon, text = 'tooltip' }: { icon: ReactNode; text: string }) => (
  <div className="sidebar-icon group">
    {icon}

    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
