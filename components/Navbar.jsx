export default function Navbar() {
  return (
    <>
      <header className=" z-30 fixed w-screen bg-slate-200 dark:bg-gray-900">
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
            <p className=" font-bold font-mono text-teal-600 dark:text-teal-300">
              Campus Connect
            </p>
          </div>
        </div>
      </header>
    </>
  );
}
