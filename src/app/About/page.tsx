import { ChangePageButton } from '../ChangePageButton';
import Image from 'next/image';

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl text-center font-bold underline py-5">
        Wow Another Page
      </h1>

      <Image
        className="w-24 h-24 md:w-48 md:h-auto rounded-3xl mx-auto"
        src="https://tsh.io/wp-content/uploads/2019/12/react-meme1_.png"
        alt="Lmao"
        width={500}
        height={500}
      />

      <div className="container py-5 px-10 mx-0 min-w-full flex flex-col items-center">
        <ChangePageButton str={'Home'} location="/" />
      </div>
    </main>
  );
}