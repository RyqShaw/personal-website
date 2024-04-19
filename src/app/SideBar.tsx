import './globals.css';
import { ReactNode } from 'react';
import { FaAddressBook, FaBook, FaHome } from 'react-icons/fa';
import { FaGears } from 'react-icons/fa6';

const SideBar = () => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 m-0 justify-center
                     flex flex-col bg-zinc-300
                     dark:bg-zinc-900 text-white shadow-lg"
    >
      <SideBarIcon icon={<FaHome size={'32'} />} text="Home" />
      <SideBarIcon icon={<FaBook size={'28'} className='pt-0.5'/>} text="About Me" />
      <SideBarIcon icon={<FaGears size={'32'} />} text="Projects" />
      <SideBarIcon icon={<FaAddressBook size={'28'} className='pl-0.5 pt-0.5'/>} text="Contact Me" />
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
