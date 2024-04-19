import Image from 'next/image';
import { ChangePageButton } from './ChangePageButton';
const me = {
  name: 'Sharyq Siddiqi',
  imageUrl: 'https://avatars.githubusercontent.com/u/62477104?v=4',
  imageSize: 180,
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl text-center font-bold underline py-5">
        {me.name}
      </h1>
      <Image
        className="w-24 h-24 md:w-48 md:h-auto rounded-3xl mx-auto"
        src={me.imageUrl}
        alt={'Photo of ' + me.name}
        width={me.imageSize}
        height={me.imageSize}
      />
      <div className="container py-5 px-10 mx-0 min-w-full flex flex-col items-center">
        <ChangePageButton str={'About Me'} location="/AboutMe" />
      </div>
    </main>
  );
}
