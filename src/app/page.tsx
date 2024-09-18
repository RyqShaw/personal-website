import Image from 'next/image';
const me = {
  name: 'Sharyq Siddiqi',
  imageUrl: 'https://avatars.githubusercontent.com/u/62477104?v=4',
  imageSize: 180,
};

export default function Home() {
  const roundedBox =
  'bg-zinc-300 bg-opacity-85 dark:bg-zinc-900 dark:bg-opacity-85 text-zinc-800 dark:text-white shadow-lg m-4 mt-8 p-8 w-fit rounded-3xl';
  const quickLinkBox = "hidden lg:block mr-12" + roundedBox;
  const featuredProjects = roundedBox + " lg:mr-12 lg:row-span-2";
  const aboutMe = roundedBox + " mr-12 col-span-2"
  return (
    // TODO: Make a component for these small boxes to reuse\
    // TODO: Make a bigger box thats horizontal
    <main>
      <div className="lg:grid lg:grid-cols-3 md:flex md:flex-col auto-rows-max pl-24 gap-4 lg:pt-16">
        {/*BOX 1*/}
        <div
          className={roundedBox}
        >
          <h1 className="text-3xl font-bold pb-5">Sharyq Siddiqi</h1>
          <div className="flex flex-col md:flex-row md:justify-center md:items-center">
            <Image
              className="h-56 w-56 rounded-3xl object-cover"
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
        <div
            className={quickLinkBox}
          >
            <h1 className="text-2xl font-bold">Quick Links</h1>
            <div className="flex flex-col md:flex-row md:justify-center md:items-center">
              <p className="p-8 pl-0 text-pretty text-left">
                Github
              </p>
              <p className="p-8 pl-0 text-pretty text-left">
                Linkedin
              </p>
              <p className="p-8 pl-0 text-pretty text-left">
                More About Me
              </p>
              <p className="p-8 pl-0 text-pretty text-left">
                Get in Contact with Me
              </p>
            </div>
          </div>

        {/*BOX 3*/}
        <div
          className={featuredProjects}
        >
          <h1 className="text-3xl font-bold pb-5">Featured Projects
          </h1>
          <div className="flex flex-col md:flex-row md:justify-center md:items-center">
            <Image
              className="h-56 w-56 rounded-3xl object-cover"
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
              An Entry to <br></br>
              a 48 hour Game Competition <br></br>
              made in the Godot 4 Game Engine <br></br>
            </p>
            <Image
              className="h-56 w-56 rounded-3xl object-cover"
              src={me.imageUrl}
              alt={'Photo of ' + me.name}
              width={me.imageSize}
              height={me.imageSize}
            />
          </div>
        </div>

        {/*BOX 4*/}
        <div
            className={aboutMe}
          >
            <h1 className="text-2xl font-bold">Who Am I?</h1>
            <div className="flex flex-col md:flex-row md:justify-center md:items-center">
              <p className="p-8 pl-0 text-pretty text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
      </div>
    </main>
  );
}
