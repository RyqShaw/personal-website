import { ChangePageButton } from '../ChangePageButton';

export default function AboutMe() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl text-center font-bold underline py-5">
        Wow Another Page
      </h1>

      <div className="container py-5 px-10 mx-0 min-w-full flex flex-col items-center">
        <ChangePageButton str={'Home'} location='/' />
      </div>
    </main>
  );
}
