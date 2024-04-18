'use client'
import { useRouter } from 'next/navigation';
function ChangePageButton({ str } : { str: string }) {
   const router = useRouter();
 
   const navigateToOtherPage = () => {
     router.push('/')
   }
   return (
   <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
   onClick={navigateToOtherPage}>
     {str}
   </button>);
}