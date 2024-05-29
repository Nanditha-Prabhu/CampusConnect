import React from "react";

export default function Home() {
  return (
    <>
      {/* welcome section */}
      <section className="flex bg-slate-500 dark:bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 pt-48 items-start lg:flex lg:h-screen lg:items-center">
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
                href="#special"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* features section */}
      <section
        id="special"
        className="bg-slate-500 dark:bg-gray-900 text-white px-20 "
      >
        <div className="max-w-screen-xl flex flex-col items-center px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-20">
          <div className="max-w-xl text-center ">
            <h2 className="text-3xl font-bold sm:text-4xl">
              What makes us special
            </h2>

            <p className="mt-4 text-gray-300">
              Our objective is to create a comprehensive database and web
              application for managing student and faculty projects, interests,
              and skills in an academic environment.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <div>
                <h2 className="text-lg font-bold">Student and Faculty Data</h2>

                <p className="mt-1 text-sm text-gray-300">
                  Maintain detailed data for students and faculty members.
                  Profiles include information such as name, email, department,
                  semester (for students), designation (for faculty), areas of
                  interest, and skills.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <div>
                <h2 className="text-lg font-bold">Project Management</h2>

                <p className="mt-1 text-sm text-gray-300">
                  Create and manage project records, including title,
                  description, status (ongoing, planned, completed), and
                  associated students and faculty. Track which students and
                  faculty are involved in which projects.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <div>
                <h2 className="text-lg font-bold">
                  Interests and Skills Matching
                </h2>

                <p className="mt-1 text-sm text-gray-300">
                  Extract and display unique areas of interest and skills from
                  student and faculty profiles. Find common and unique interests
                  and skills among students and faculty.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <div>
                <h2 className="text-lg font-bold">Dynamic Querying</h2>

                <p className="mt-1 text-sm text-gray-300">
                  Perform dynamic queries to find students or faculty with
                  specific interests or skills. Retrieve detailed information
                  about projects and the people associated with them.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <div>
                <h2 className="text-lg font-bold">Statistics and Insights</h2>

                <p className="mt-1 text-sm text-gray-300">
                  Display statistical information, such as total number of
                  students and faculty, number of students and faculty engaged
                  in projects, total number of projects and their statuses,
                  number of laboratories.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <div>
                <h2 className="text-lg font-bold">
                  Frontend and Backend Integration
                </h2>

                <p className="mt-1 text-sm text-gray-300">
                  Backend developed with Flask to handle data processing and API
                  endpoints. Frontend developed with React for dynamic and
                  interactive user interface. Seamless communication between
                  frontend and backend using RESTful APIs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
