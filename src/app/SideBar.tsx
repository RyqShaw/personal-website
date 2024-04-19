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
        <button onClick={navigateHome}>
          <SideBarIcon icon={<FaHome size={'32'} />} text="Home" />
        </button>

        <button onClick={navigateAbout}>
          <SideBarIcon icon={<FaBook size={'28'} className="pt-0.5" />} text="About Me" />
        </button>
        <button onClick={navigateProjects}>
          <SideBarIcon icon={<FaGears size={'32'} />} text="Projects" />
        </button>
        <button onClick={navigateContact}>
          <SideBarIcon icon={<FaAddressBook size={'28'} className="pl-0.5 pt-0.5" />} text="Contact Me" />
        </button>
      </div>
      <div
        className="fixed bottom-0 left-0 w-16 m-0 justify-end
                     flex flex-col"
      >
        <button onClick={navigateGithub}>
        <SideBarIcon icon={<FaGithub size={'28'} className="pt-0.5" />} text="GitHub" />
        </button>
        <button onClick={navigateLinkedin}>
        <SideBarIcon icon={<FaLinkedin size={'28'} className="pt-0.5" />} text="Linkedin" />
        </button>
      </div>
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
