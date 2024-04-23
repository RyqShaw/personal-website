import Image from 'next/image';
const me = {
  name: 'Sharyq Siddiqi',
  imageUrl: 'https://avatars.githubusercontent.com/u/62477104?v=4',
  imageSize: 180,
};

export default function Home() {
  return (
    <main>
      <div className="flex min-h-screen flex-col pl-24">
        {/* info box 1 */}
        <div className="bg-zinc-300 dark:bg-zinc-900 text-zinc-800 dark:text-white shadow-lg m-4 mt-8 p-8 w-fit rounded-3xl mr-10 max-w-screen-lg">
          <h1 className="text-3xl font-bold underline pb-5">{me.name}</h1>
          <div className='flex flex-row'>
          <Image
            className="h-48 w-48 md:h-auto rounded-3xl object-cover"
            src={me.imageUrl}
            alt={'Photo of ' + me.name}
            width={me.imageSize}
            height={me.imageSize}
          />
          <p className='p-8 text-a'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          </div>
        </div>
      </div>
    </main>
  );
}
