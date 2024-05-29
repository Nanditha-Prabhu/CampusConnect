import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../components/Home"
import Navbar from "../components/Navbar";
import StudentSignUp from "../components/StudentSignUp"
import FacultySignUp from "../components/FacultySignUp"
import Footer from "../components/Footer"
import FindPeople from '../components/FindPeople';
import Sidebar from '../components/Sidebar';
import FindProjects from '../components/FindProjects';
import FindStudents from '../components/FindStudents';
import KnowTeamMembers from '../components/KnowTeamMembers';
import Statistics from '../components/Statistics';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
      <Navbar/>
      <Sidebar/>
        <Home/>
        <Footer />
      </>
    ),
  },
  {
    path: "/student_signup",
    element: (
      <>
        <Navbar />
        <Sidebar/>
        <StudentSignUp />
        <Footer />
      </>
    ),
  },
  {
    path: "/faculty_signup",
    element: (
      <>
        <Navbar />
        <Sidebar/>
        <FacultySignUp />
        <Footer />
      </>
    ),
  },
  {
    path: "/find_people",
    element: (
      <>
        <Navbar />
        <Sidebar/>
        <FindPeople/>
        <Footer />
      </>
    ),
  },
  {
    path: "/find_projects",
    element: (
      <>
        <Navbar />
        <Sidebar/>
        <FindProjects/>
        <Footer />
      </>
    ),
  },
  {
    path: "/find_students",
    element: (
      <>
        <Navbar />
        <Sidebar/>
        <FindStudents/>
        <Footer />
      </>
    ),
  },
  {
    path: "/know_team_members",
    element: (
      <>
        <Navbar />
        <Sidebar/>
        <KnowTeamMembers/>
        <Footer />
      </>
    ),
  },
  {
    path: "/statistics",
    element: (
      <>
        <Navbar />
        <Sidebar/>
        <Statistics/>
        <Footer />
      </>
    ),
  },

  
]);

export default function App() {
  return <RouterProvider router={router} />;
}
