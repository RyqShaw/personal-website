'use client';
import './globals.css';
import { ReactNode } from 'react';
import { FaAddressBook, FaBook, FaHome } from 'react-icons/fa';
import { FaGears, FaGithub, FaLinkedin } from 'react-icons/fa6';
import { useRouter, usePathname } from 'next/navigation';

const SideBar = () => {
  {
    /* Navigation tools */
  }
  const router = useRouter();

  const navigateHome = () => router.push('/');
  const navigateAbout = () => router.push('/aboutme');
  const navigateProjects = () => router.push('/projects');
  const navigateContact = () => router.push('/contact');
  const navigateGithub = () => router.push('https://github.com/RyqShaw');
  const navigateLinkedin = () => router.push('https://www.linkedin.com/in/sharyqsiddiqi/');

  const pathname = usePathname();
  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div className="fixed top-2 left-2 h-screen w-16 m-0 flex flex-col justify-between bg-zinc-300 bg-opacity-95 dark:bg-zinc-900 dark:bg-opacity-85 text-white shadow-lg rounded-lg">
      {/* Page Links Links */}
      <div className="flex flex-col justify-center h-full">
        <SideBarIcon icon={<FaHome size={'32'} />} text="Home" navigate={navigateHome} active={isActive('/')} />
        <SideBarIcon
          icon={<FaBook size={'28'} className="pt-0.5" />}
          text="About Me"
          navigate={navigateAbout}
          active={isActive('/aboutme')}
        />
        <SideBarIcon
          icon={<FaGears size={'32'} />}
          text="Projects"
          navigate={navigateProjects}
          active={isActive('/projects')}
        />
        <SideBarIcon
          icon={<FaAddressBook size={'28'} className="pl-0.5 pt-0.5" />}
          text="Contact Me"
          navigate={navigateContact}
          active={isActive('/contact')}
        />
        {/* Social Media Links */}
        <div className="flex flex-col bottom-0">
          <Divider />
          <SideBarIcon
            icon={<FaGithub size={'28'} className="pt-0.5" />}
            text="GitHub"
            navigate={navigateGithub}
            active={false}
          />
          <SideBarIcon
            icon={<FaLinkedin size={'28'} className="pt-0.5" />}
            text="Linkedin"
            navigate={navigateLinkedin}
            active={false}
          />
        </div>
      </div>
    </div>
  );
};

const SideBarIcon = ({
  icon,
  text = 'tooltip',
  navigate,
  active = false,
}: {
  icon: ReactNode;
  text: string;
  navigate: any;
  active: boolean;
}) => (
  <button onClick={navigate} className={`sidebar-icon group ${active ? 'active-icon' : ''}`}>
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </button>
);

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
