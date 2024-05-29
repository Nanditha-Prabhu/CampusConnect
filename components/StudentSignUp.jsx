import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import axios from "axios";
import Loading from "./Loading";

export default function StudentSignUp() {
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
      //   console.log(r.data)
      //   console.log(areaOfInt)
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

  const [formData, setFormData] = useState({
    student_name: "",
    usn: "",
    email_id: "",
    department: "",
    area_of_int1: "",
    area_of_int2: "",
    sem: 0,
    skills: [],
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSklsChange = (e) => {
    console.log(e);
    // Destructuring
    const { value, checked } = e.target;
    let { skils } = "";

    console.log(`${value} is ${checked}`);

    // Case 1 : The user checks the box
    if (checked) {
      skils = value;
      formData.skills.push(skils);
    }

    // Case 2  : The user unchecks the box
    else {
      skils = value;
      const index = formData.skills.indexOf(skils);
      if (index !== -1) {
        formData.skills.splice(index, 1);
      }
    }
    // console.log(formData);
  };

  const [response, setResponse] = useState([]);
  const handleSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();

    try {
      const r = await axios.post(
        "http://localhost:8080/create_student",
        formData
      );
      // console.log(r.data);
      const data = r.data;

      if (data.length == 0) {
        setResponse("Successful");
      } else {
        setResponse("Unsuccessful");
      }

      // console.log(response);
      setIsLoading(false);
    } catch (error) {
      setResponse(null);
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section>
      {/* form section */}
      <div className="  dark:bg-slate-700 flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-center text-2xl font-bold leading-tight text-black dark:text-white">
            Sign up to create student account
          </h2>
          
          <form
            onSubmit={handleSubmit}
            method="POST"
            className="mt-8 text-gray-900 dark:text-slate-200"
          >
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="text-base font-medium text-gray-900 dark:text-slate-200"
                >
                  Full Name
                </label>
                <div className="mt-2">
                  <input
                    required
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Full Name"
                    id="name"
                    name="student_name"
                    value={formData.student_name}
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
              <div>
                <label
                  htmlFor="usn"
                  className="text-base font-medium text-gray-900 dark:text-slate-200"
                >
                  USN
                </label>
                <div className="mt-2">
                  <input
                    required
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="USN"
                    id="usn"
                    name="usn"
                    value={formData.usn}
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-base font-medium text-gray-900 dark:text-slate-200"
                >
                  {" "}
                  Email address{" "}
                </label>
                <div className="mt-2">
                  <input
                    required
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Email"
                    id="email"
                    name="email_id"
                    value={formData.email_id}
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="department"
                    className="text-base font-medium text-gray-900 dark:text-slate-200"
                  >
                    Department
                  </label>
                </div>
                <div className="mt-2">
                  <select
                    required
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    id="dept"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                  >
                    <option className="text-black" value="">
                      Select your department
                    </option>
                    <option className="text-black" value="Computer Science">
                      Computer Science
                    </option>
                    <option className="text-black" value="Information Science">
                      Information Science
                    </option>
                    <option className="text-black" value="Mechanical Engineering">
                      Mechanical Engineering
                    </option>
                    <option className="text-black" value="Civil Engineering">
                      Civil Engineering
                    </option>
                  </select>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="area-of-interest"
                    className="text-base font-medium text-gray-900 dark:text-slate-200"
                  >
                    First Area of Interest
                  </label>
                </div>
                <div className="mt-2">
                  <select
                    required
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    name="area_of_int1"
                    placeholder="areas"
                    id="area-of-interest"
                    value={formData.area_of_int1}
                    onChange={handleChange}
                  >
                    <option value="">Select area of interest</option>
                    {areaOfInt &&
                      areaOfInt.flat().map((item, idx) => {
                        return (
                          <option
                            className="text-black"
                            key={item}
                            value={item}
                          >
                            {item}
                          </option>
                        );
                      })}
                  </select>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="area-of-interest"
                    className="text-base font-medium text-gray-900 dark:text-slate-200"
                  >
                    Second Area of Interest
                  </label>
                </div>
                <div className="mt-2">
                  <select
                    required
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    name="area_of_int2"
                    placeholder="areas"
                    id="area-of-interest"
                    value={formData.area_of_int2}
                    onChange={handleChange}
                  >
                    <option value="">Select area of interest</option>
                    {areaOfInt &&
                      areaOfInt.flat().map((item, idx) => {
                        return (
                          <option
                            className="text-black"
                            key={item}
                            value={item}
                          >
                            {item}
                          </option>
                        );
                      })}
                  </select>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="sem"
                    className="text-base font-medium text-gray-900 dark:text-slate-200"
                  >
                    Semester
                  </label>
                </div>
                <div className="mt-2">
                  <select
                    required
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="number"
                    id="sem"
                    name="sem"
                    value={formData.sem}
                    onChange={handleChange}
                  >
                    <option className="text-black" value="">
                      Select your semester
                    </option>
                    <option className="text-black" value="1">
                      1
                    </option>
                    <option className="text-black" value="2">
                      2
                    </option>
                    <option className="text-black" value="3">
                      3
                    </option>
                    <option className="text-black" value="4">
                      4
                    </option>
                    <option className="text-black" value="5">
                      5
                    </option>
                    <option className="text-black" value="6">
                      6
                    </option>
                    <option className="text-black" value="7">
                      7
                    </option>
                    <option className="text-black" value="8">
                      8
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label className="text-base font-medium text-gray-900 dark:text-slate-200">
                    Skills
                  </label>
                </div>
                <div className="mt-2 space-y-2">
                  <div className=" justify-between grid grid-cols-3 gap-4">
                    {skls &&
                      skls.flat().map((item, idx) => {
                        return (
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id={item}
                              name="skills"
                              value={item}
                              onChange={handleSklsChange}
                              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            />
                            <label
                              htmlFor={item}
                              className="text-sm font-medium text-gray-900 dark:text-slate-200"
                            >
                              {item}
                            </label>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center  bg-black px-3.5 py-2.5 font-semibold leading-7   rounded  border border-gray-800 dark:border-green-200 bg-transparent hover:bg-green-400 text-sm  text-slate-800 dark:text-white shadow  active:bg-green-700"
                >
                  Create Account <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
          {/* message section */}
          {isLoading ? (
            <Loading />
          ) : (
            response && (
              <p
                className={`p-5 text-center font-semibold text-lg ${
                  response === "Successful" ? "text-green-500" : "text-red-500"
                }`}
              >
                {response}
              </p>
            )
          )}
        </div>
      </div>
    </section>
  );
}
