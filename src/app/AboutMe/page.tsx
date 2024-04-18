'use client'
import { useRouter } from 'next/navigation';

export default function AboutMe() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl text-center font-bold underline py-5">
        Wow Another Page
      </h1>

      <div className="container py-5 px-10 mx-0 min-w-full flex flex-col items-center">
        <ChangePageButton str={'Home'} />
      </div>
    </main>
  );
}

function ChangePageButton({ str }: { str: string }) {
  const router = useRouter();

  const navigateToOtherPage = () => {
    router.push('/');
  };
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={navigateToOtherPage}
    >
      {str}
    </button>
  );
}
