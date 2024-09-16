export default function About() {
  return (
    <main className="grid grid-flow-row grid-cols-2 min-h-screen">
      <h1 className="">
        <div className="flex-col pl-24">
          {/*BOX 1*/}
          <div
            className="bg-zinc-300 bg-opacity-95 dark:bg-zinc-900 dark:bg-opacity-95 text-zinc-800
 dark:text-white shadow-lg
  m-4 mt-8 p-8 w-fit rounded-3xl mr-12
  max-w-screen-md"
          >
            {/* info box 1 */}
            <h1 className="text-3xl font-bold pb-5">Sharyq Siddiqi</h1>
            <div className="flex flex-col md:flex-row md:justify-center md:items-center">
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
            className="bg-zinc-300 bg-opacity-95 dark:bg-zinc-900 dark:bg-opacity-95
 dark:text-white shadow-lg
  m-4 mt-8 p-8 w-fit rounded-3xl mr-12
  max-w-screen-md"
          >
            {/* info box 2 */}
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
      </h1>
    </main>
  );
}
