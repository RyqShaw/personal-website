'use client';
import Image from 'next/image';
import { ReactNode } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { FaAddressBook, FaBook } from 'react-icons/fa';
import { useRouter, usePathname } from 'next/navigation';

const me = {
  name: 'Sharyq Siddiqi',
  imageUrl: 'https://avatars.githubusercontent.com/u/62477104?v=4',
  imageSize: 180,
};

export default function Home() {
  const router = useRouter();
  const navigateGithub = () => router.push('https://github.com/RyqShaw');
  const navigateLinkedin = () => router.push('https://www.linkedin.com/in/sharyqsiddiqi/');
  const navigateAbout = () => router.push('/aboutme');
  const navigateContact = () => router.push('/contact');
  
  const roundedBox =
    'bg-zinc-300 bg-opacity-85 dark:bg-zinc-900 dark:bg-opacity-85 text-zinc-800 dark:text-white shadow-lg m-4 mt-2 p-8 w-full rounded-3xl overflow-hidden';
  const quickLinkBox = 'hidden xl:block ' + roundedBox;
  const featuredProjects = roundedBox + ' xl:mr-12 xl:row-span-2';
  const aboutMe = roundedBox + 'mr-12 col-span-2';
  return (
    // TODO: Make a component for these small boxes to reuse\
    // TODO: Make a bigger box thats horizontal
    <main>
      <div className="xl:grid xl:grid-cols-3 xl:auto-rows-fr pl-24 gap-4 lg:pt-20">
        {/*BOX 1*/}
        <div className={roundedBox}>
          <h1 className="text-3xl font-bold pb-5">Sharyq Siddiqi</h1>
          <div className="flex flex-col md:flex-row md:justify-center md:items-center">
            <Image
              className="h-56 w-56 rounded-3xl object-cover max-w-full max-h-full"
              src={me.imageUrl}
              alt={'Photo of ' + me.name}
              width={me.imageSize}
              height={me.imageSize}
            />
            <p className="p-8 md:pl-8 pl-0 text-pretty text-left text-lg">
              Software Engineer <br></br>
              Enthusiastic Learner <br></br>
              Game Developer <br></br>
              Guitarist
            </p>
          </div>
        </div>

        {/*BOX 2*/}
        <div className={quickLinkBox}>
          <h1 className="text-2xl font-bold">Quick Links</h1>
          <div className="flex flex-row justify-center items-center mt-20">
            <SideBarIcon
            icon={<FaGithub size={'48'} className="pt-0.5" />}
            text="GitHub"
            navigate={navigateGithub}
            active={false}
          />
            <SideBarIcon
            icon={<FaLinkedin size={'48'} className="pt-0.5" />}
            text="Linkedin"
            navigate={navigateLinkedin}
            active={false}
          />
            <SideBarIcon
          icon={<FaBook size={'48'} className="pt-0.5" />}
          text="More About Me"
          navigate={navigateAbout}
          active={false}
        />
        <SideBarIcon
          icon={<FaAddressBook size={'48'} className="pl-0.5 pt-0.5" />}
          text="Contact Me"
          navigate={navigateContact}
          active={false}
        />
          </div>
        </div>

        {/*BOX 3*/}
        <div className={featuredProjects}>
          <h1 className="text-3xl font-bold pb-5">Featured Projects</h1>
          <div className="flex flex-col md:flex-row md:justify-center md:items-center">
            <Image
              className="h-56 w-56 rounded-3xl object-cover max-w-full max-h-full" // Added max-w-full max-h-full
              src={me.imageUrl}
              alt={'Photo of ' + me.name}
              width={me.imageSize}
              height={me.imageSize}
            />
            <p className="p-8 md:pl-8 pl-0 text-pretty text-left text-lg">
              An Awesome Calendar <br></br>
              Project made in Java <br></br>
              using the Swing Library <br></br>
            </p>
          </div>
          <div className="flex flex-col pt-12 md:flex-row md:justify-center md:items-center">
            <p className="p-8 md:pl-8 pl-0 text-pretty text-left text-lg">
              An Entry to <br></br>a 48 hour Game Competition <br></br>
              made in the Godot 4 Game Engine <br></br>
            </p>
            <Image
              className="h-56 w-56 rounded-3xl object-cover max-w-full max-h-full" // Added max-w-full max-h-full
              src={me.imageUrl}
              alt={'Photo of ' + me.name}
              width={me.imageSize}
              height={me.imageSize}
            />
          </div>
        </div>

        {/*BOX 4*/}
        <div className={aboutMe}>
          <h1 className="text-2xl font-bold">Who Am I?</h1>
          <div className="flex flex-col md:flex-row md:justify-center md:items-center">
            <p className="p-8 pl-0 text-pretty text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

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
  <button onClick={navigate} className={`m-2 mt-2 panel-icon group ${active ? 'active-icon' : ''}`}>
    {icon}
    <span className="panel-tooltip group-hover:scale-100">{text}</span>
  </button>
);
