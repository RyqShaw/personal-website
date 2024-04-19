'use client';
import { useRouter } from 'next/navigation';

const ChangePageButton = ({ str, location }: { str: string; location: string }) => {
  const router = useRouter();

  const navigateToOtherPage = () => {
    router.push(location);
  };
  return (
    <button
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      onClick={navigateToOtherPage}
    >
      {str}
    </button>
  );
};

export default ChangePageButton;
