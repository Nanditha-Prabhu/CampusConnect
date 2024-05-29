import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "./Loading";

export default function FindStudents() {
  const [formData, setFormData] = useState({
    areaOfInterest: "",
    skill: "",
  });
  let [response, setResponse] = useState([]);
  const [areaOfInt, setAreaOfInt] = useState([]);
  const [skls, setSkls] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    applyAreaOfInterest();
  }, []);

  const applyAreaOfInterest = async () => {
    try {
      const r = await axios.get("http://localhost:8080/all_areas");
      setAreaOfInt(r.data);
      // console.log(r.data);
      // console.log(areaOfInt);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    applySkls();
  }, []);

  const applySkls = async () => {
    try {
      const r = await axios.get("http://localhost:8080/all_skills");
      setSkls(r.data);
      //console.log(r.data);
      //console.log(skls);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();

    try {
      const r = await axios.post(
        "http://localhost:8080/find_students",
        formData
      );
      // console.log(r.data);
      const data = r.data;

      // Transpose the array
      //   const data2 = data[0].map((_, colIndex) => data.map(row => row[colIndex]));
      if (data.length == 0) {
        alert("No students found :(");
      } else {
        data.map((item, idx) => {
          response.push(item);
        });
        setResponse(data);
      }

      // console.log(response);
      setIsLoading(false);
    } catch (error) {
      setResponse(null);
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      {/* input form */}
      <div className="mx-auto max-w-screen-2xl px-4 py-32 dark:bg-slate-700 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl dark:text-white font-bold sm:text-3xl">
            Find students with right skills 🎖
          </h1>

          <p className="mt-4 text-gray-500">
            Find students who has interests and skills just like you need for
            your project..
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className=" mx-auto mb-0 mt-8 max-w-md space-y-4"
        >
          <div>
            <label className="dark:text-white" htmlFor="areaOfInterest">
              Area of interest
            </label>

            <div className="relative pt-2">
              <select
                required
                name="areaOfInterest"
                value={formData.areaOfInterest}
                onChange={handleChange}
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              >
                <option value="">Select area of interest</option>
                {areaOfInt &&
                  areaOfInt.flat().map((item, idx) => {
                    return (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>

          <div>
            <label className="dark:text-white">Skills</label>
            <div className="relative pt-2">
              <select
                required
                name="skill"
                value={formData.skill}
                onChange={handleChange}
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              >
                <option value="">Select skill</option>
                {skls &&
                  skls.flat().map((item, idx) => {
                    return (
                      <option id={item} name="skills" value={item}>
                        {item}
                      </option>
                    );
                  })}
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
          <div className="mx-auto max-w-screen-lg text-center">
            <h2 className="text-xl dark:text-white font-bold sm:text-2xl py-8">
              Results
            </h2>
            <table className=" w-full border-collapse">
              <thead>
                <tr>
                  <th className=" border-2 text-amber-500 px-3 py-10">Name</th>
                  <th className=" border-2 text-amber-500 px-3 py-10">
                    Department
                  </th>
                  <th className=" border-2 text-amber-500 px-3 py-10">
                    Area of Interests
                  </th>
                  <th className=" border-2 text-amber-500 px-3 py-10">
                    Skills
                  </th>
                  <th className=" border-2 text-amber-500 px-3 py-10">
                    Contact
                  </th>
                </tr>
              </thead>
              <tbody>
                {response.map((arr, idx) => {
                  return (
                    <tr key={idx}>
                      <td
                        key={idx}
                        className=" border-2 px-3 text-slate-700 dark:text-slate-100 text-left"
                      >
                        {arr[0]}
                      </td>
                      <td
                        key={idx}
                        className=" border-2 px-3 text-slate-700 dark:text-slate-100 text-left"
                      >
                        {arr[1]}
                      </td>
                      <td
                        key={idx}
                        className=" border-2 px-3 text-slate-700 dark:text-slate-100 text-left"
                      >
                        {arr[2].map((aoi, i) => {
                          return <li key={i}>{aoi}</li>;
                        })}
                      </td>
                      <td
                        key={idx}
                        className=" border-2 px-3 text-slate-700 dark:text-slate-100 text-left"
                      >
                        {arr[3].map((sk, i) => {
                          return <li key={i}>{sk}</li>;
                        })}
                      </td>
                      <td
                        key={idx}
                        className=" border-2 px-3 text-slate-700 dark:text-slate-100 text-left"
                      >
                        {arr[4]}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}
