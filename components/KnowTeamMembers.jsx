import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";

function KnowTeamMembers() {
  const [formData, setFormData] = useState({
    status: "",
  });
  let [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    try {
      const r = await axios.post("http://localhost:8080/know-team", formData);
      //   r.then((response) => response.json())
      //   r.then((data) => setResponse(data));

      // console.log("r value");
      // console.log(r);
      const data = r.data;
      //   r = r.json()
      if (data.length == 0) {
        alert("No teams found :(");
      } else {
        setResponse(r.data);
      }
      setIsLoading(false);
    } catch (error) {
      setResponse(null);
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
    {/* input form */}
      <div className="mx-auto max-w-screen-2xl px-4 py-32 dark:bg-slate-700 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl dark:text-white font-bold sm:text-3xl">
            Know the team behind the project 🌟
          </h1>

          <p className="mt-4 text-gray-500">
            Know the students and faculties who are the backbone of a particular
            project..
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className=" mx-auto mb-0 mt-8 max-w-md space-y-4"
        >
          <div>
            <label className="dark:text-white" htmlFor="status">
              Status
            </label>

            <div className="relative pt-2">
              <select
                required
                name="status"
                value={formData.status}
                onChange={handleChange}
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              >
                <option value="">Select area of interest</option>
                <option value="Ongoing">Ongoing</option>
                <option value="Planned">Planned</option>
                <option value="Completed">Completed</option>
                <option value="All">All</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className=" w-full inline-block  bg-blue-500 px-5 py-3  rounded  border border-gray-800 dark:border-green-200 bg-transparent hover:bg-green-400 text-sm font-medium text-slate-800 dark:text-white shadow  active:bg-green-700"
            >
              Find!
            </button>
          </div>
        </form>
        {/* results section */}
        {isLoading ? (
          <Loading />
        ) : (
          <div className="mx-auto flex flex-col justify-items-center  text-center">
            <h2 className="text-xl dark:text-white font-bold sm:text-2xl py-8">
              Team
            </h2>
            <table className=" min-w-screen-md overflow-scroll  border-collapse">
              <thead>
                <tr>
                  <th className=" border-2 text-amber-500 px-3 py-10">Title</th>
                  <th className=" border-2 text-amber-500 px-3 py-10">
                    Description
                  </th>
                  <th className=" border-2 text-amber-500 px-3 py-10">
                    Status
                  </th>
                  <th className=" border-2 text-amber-500 px-3 py-10">
                    Students
                  </th>
                  <th className=" border-2 text-amber-500 px-3 py-10">
                    Faculties
                  </th>
                </tr>
              </thead>
              <tbody>
                {response.map((project, index) => (
                  <tr key={index}>
                    <td className=" max-w-40 border-2 px-3 text-slate-700 dark:text-slate-100 text-left">
                      {project.ProjectTitle}
                    </td>
                    <td className=" max-w-lg border-2 px-3 text-slate-700 dark:text-slate-100 text-left">
                      {project.ProjectDescription}
                    </td>
                    <td className=" border-2 px-3 text-slate-700 dark:text-slate-100 text-left">
                      {project.ProjectStatus}
                    </td>
                    <td className=" max-w-lg border-2 px-3 text-slate-700 dark:text-slate-100 text-left">
                      {project.Students.length > 1
                        ? project.Students.map((student, idx) => (
                            <li key={idx}>{student}</li>
                          ))
                        : project.Students[0]}
                    </td>
                    <td className=" border-2 px-3 text-slate-700 dark:text-slate-100 text-left">
                      {project.Faculties.length > 1
                        ? project.Faculties.map((faculty, idx) => (
                            <li key={idx}>{faculty}</li>
                          ))
                        : project.Faculties[0]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}

export default KnowTeamMembers;
