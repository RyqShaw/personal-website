'use client';
import './globals.css';
import { ReactNode } from 'react';
import { FaAddressBook, FaBook, FaHome } from 'react-icons/fa';
import { FaGears, FaGithub, FaLinkedin } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';

const SideBar = () => {
  const router = useRouter();

  const navigateHome = () => {
    router.push('/');
  };

  const navigateAbout = () => {
    router.push('/about');
  };

  const navigateProjects = () => {
    router.push('/projects');
  };

  const navigateContact = () => {
    router.push('/contact');
  };

  const navigateGithub = () => {
    router.push('https://github.com/RyqShaw');
  };

  const navigateLinkedin = () => {
    router.push('https://www.linkedin.com/in/sharyqsiddiqi/');
  };

  return (
    <div>
      <div
        className="fixed top-0 left-0 h-screen w-16 m-0 justify-center
                     flex flex-col bg-zinc-300
                     dark:bg-zinc-900 text-white shadow-lg"
      >
          <SideBarIcon icon={<FaHome size={'32'} />} text="Home" navigate={navigateHome} />
          <SideBarIcon icon={<FaBook size={'28'} className="pt-0.5" />} text="About Me" navigate={navigateAbout} />
          <SideBarIcon icon={<FaGears size={'32'} />} text="Projects" navigate={navigateProjects} />
          <SideBarIcon icon={<FaAddressBook size={'28'} className="pl-0.5 pt-0.5" />} text="Contact Me"  navigate={navigateContact}/>
      </div>
      <div
        className="fixed bottom-0 left-0 w-16 m-0 justify-end
                     flex flex-col"
      >
        <SideBarIcon icon={<FaGithub size={'28'} className="pt-0.5" />} text="GitHub" navigate={navigateGithub} />
        <SideBarIcon icon={<FaLinkedin size={'28'} className="pt-0.5" />} text="Linkedin" navigate={navigateLinkedin} />
      </div>
    </div>
  );
};

const SideBarIcon = ({ icon, text = 'tooltip', navigate }: { icon: ReactNode; text: string, navigate: any }) => (
  <button onClick={navigate} className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </button>
);

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
