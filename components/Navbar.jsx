export default function Navbar() {
  return (
    <>
      <header className=" fixed w-screen bg-slate-200 dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-row mx-auto h-16 items-center justify-between">

            {/* drawer init and show */}
            <div className="text-center">
              <button
                className=" rounded  border border-gray-800 dark:border-green-200 bg-transparent hover:bg-green-400 px-5 py-2.5 text-sm font-medium text-slate-800 dark:text-white shadow  active:bg-green-700"
                type="button"
                data-drawer-target="drawer-navigation"
                data-drawer-show="drawer-navigation"
                aria-controls="drawer-navigation"
              >
                Show navigation
              </button>
            </div>
            <p className=" font-bold font-mono text-rose-400 dark:text-amber-200">Campus Connect</p>

            <div className=" text-center">
              <button 
                className=" rounded  border border-gray-800 dark:border-green-200 bg-transparent hover:bg-green-400 px-5 py-2.5 text-sm font-medium text-slate-800 dark:text-white shadow  active:bg-green-700"
                >
                Your Profile
              </button>
            </div>

            {/* <div className="md:flex md:items-center md:gap-12">
        
        

        <div className="flex items-center gap-4">
          <div className="sm:flex sm:gap-4">
            <a
              className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow dark:hover:bg-teal-500"
              href="#"
            >
              Login
            </a>

            <div className="hidden sm:flex">
              <a
                className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                href="#"
              >
                Register
              </a>
            </div>
          </div>

          <div className="block md:hidden">
            <button
              className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div> */}
          </div>
        </div>
      </header>
    </>
  );
}
