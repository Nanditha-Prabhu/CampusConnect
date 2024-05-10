import React from 'react';
import Sidebar from './Sidebar';

export default function Home() {
  return (
    <>
        <section className="flex bg-slate-500 dark:bg-gradient-to-r  dark:from-slate-900 dark:via-slate-700 dark:to-slate-500 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 items-start lg:flex lg:h-screen lg:items-center">
          <div className=" max-w-5xl">
            <h1 className="bg-gradient-to-r from-green-400 via-yellow-200  to-red-300 bg-clip-text text-5xl font-extrabold text-transparent sm:text-5xl">
              Campus Connect.
            </h1>

            <p className="mx-auto mt-4 max-w-3xl sm:text-xl/relaxed">
            We empower collaboration in academia.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                className="  rounded  border border-gray-800 dark:border-green-200 bg-transparent hover:bg-green-400 px-5 py-2.5 text-sm font-medium text-slate-800 dark:text-white shadow  active:bg-green-700"
                href="#"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
