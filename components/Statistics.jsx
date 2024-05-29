import { useState, useEffect } from "react";
import axios from "axios";

export default function Statistics() {
  const [totalStudents, setTotalStudents] = useState(0);
  const [totalFaculty, setTotalFaculty] = useState(0);
  const [totalLabs, setTotalLabs] = useState(0);
  const [engagedStudents, setEngagedStudents] = useState(0);
  const [engagedFaculty, setEngagedFaculty] = useState(0);
  const [ongoingProjects, setOngoingProjects] = useState(0);
  const [plannedProjects, setPlannedProjects] = useState(0);
  const [completedProjects, setCompletedProjects] = useState(0);

  useEffect(() => {
    applyStatCountTotalPpl();
    applyStatCountLabs();
    applyStatCountEngagedPpl();
    applyStatCountProjects();
  }, []);

  const applyStatCountTotalPpl = async () => {
    try {
      const r = await axios.get("http://localhost:8080/stat_count_total_ppl");
      setTotalStudents(r.data[0][0]);
      setTotalFaculty(r.data[0][1]);
      console.log(r.data);
      console.log(totalStudents);
      console.log(totalFaculty);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const applyStatCountLabs = async () => {
    try {
      const r = await axios.get("http://localhost:8080/stat_count_labs");
      setTotalLabs(r.data[0][0]);
      console.log(r.data);
      console.log(totalLabs);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const applyStatCountEngagedPpl = async () => {
    try {
      const r = await axios.get("http://localhost:8080/stat_count_engaged_ppl");
      setEngagedStudents(r.data[0][0]);
      setEngagedFaculty(r.data[0][1]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const applyStatCountProjects = async () => {
    try {
      const r = await axios.get("http://localhost:8080/stat_count_projects");
      setOngoingProjects(r.data[0][0]);
      setPlannedProjects(r.data[0][1]);
      setCompletedProjects(r.data[0][2]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="py-20 px-5 dark:bg-slate-700">
      <div className=" m-8 text-center text-3xl font-bold dark:text-white">
        Statistics
      </div>
      <div className=" w-full grid sm:grid-cols-2 md:grid-cols-4  gap-4">
        <div className=" flex flex-col justify-center p-5 rounded-lg text-center bg-teal-600 dark:bg-teal-500 text-white">
          <h3 className=" text-amber-300 dark:text-amber-400 text-xl font-semibold mb-3">
            Total number of students
          </h3>
          <p className=" text-5xl font-medium">{totalStudents}</p>
        </div>
        <div className=" flex flex-col justify-center p-5 rounded-lg text-center bg-teal-600 dark:bg-teal-500 text-white">
          <h3 className="  text-amber-300 dark:text-amber-400  text-xl font-semibold mb-3">
            Total number of faculties
          </h3>
          <p className=" text-5xl font-medium">{totalFaculty}</p>
        </div>
        <div className=" flex flex-col justify-center p-5 rounded-lg text-center bg-teal-600 dark:bg-teal-500 text-white">
          <h3 className="  text-amber-300 dark:text-amber-400  text-xl font-semibold mb-3">
            Total number of Laboratories
          </h3>
          <p className=" text-5xl font-medium">{totalLabs}</p>
        </div>
        <div className=" flex flex-col justify-center p-5 rounded-lg text-center bg-teal-600 dark:bg-teal-500 text-white">
          <h3 className="  text-amber-300 dark:text-amber-400  text-xl font-semibold mb-3">
            Number of students engaged in projects
          </h3>
          <p className=" text-5xl font-medium">{engagedStudents}</p>
        </div>
        <div className=" flex flex-col justify-center p-5 rounded-lg text-center bg-teal-600 dark:bg-teal-500 text-white">
          <h3 className="  text-amber-300 dark:text-amber-400  text-xl font-semibold mb-3">
            Number of faculties engaged in projects
          </h3>
          <p className=" text-5xl font-medium">{engagedFaculty}</p>
        </div>
        <div className=" flex flex-col justify-center p-5 rounded-lg text-center bg-teal-600 dark:bg-teal-500 text-white">
          <h3 className="  text-amber-300 dark:text-amber-400  text-xl font-semibold mb-3">
            Number of Ongoing projects
          </h3>
          <p className=" text-5xl font-medium">{ongoingProjects}</p>
        </div>
        <div className=" flex flex-col justify-center p-5 rounded-lg text-center bg-teal-600 dark:bg-teal-500 text-white">
          <h3 className="  text-amber-300 dark:text-amber-400  text-xl font-semibold mb-3">
            Number of Planned projects
          </h3>
          <p className=" text-5xl font-medium">{plannedProjects}</p>
        </div>
        <div className=" flex flex-col justify-center p-5 rounded-lg text-center bg-teal-600 dark:bg-teal-500 text-white">
          <h3 className="  text-amber-300 dark:text-amber-400  text-xl font-semibold mb-3">
            Number of Completed projects
          </h3>
          <p className=" text-5xl font-medium">{completedProjects}</p>
        </div>
      </div>
      {/* <p className=" py-32">{totalStudents}</p>
        <p className=" py-32">{totalFaculty}</p>
        <p className=" py-32">{totalLabs}</p>
        <p className=" py-32">{engagedStudents}</p>
        <p className=" py-32">{engagedFaculty}</p>
        <p className=" py-32">{ongoingProjects}</p>
        <p className=" py-32">{plannedProjects}</p>
        <p className=" py-32">{completedProjects}</p> */}
    </div>
  );
}
