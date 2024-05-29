import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Navbar from "../components/Navbar"
import Home from "../components/Home"
import Ongoing from "../components/Ongoing"
import Navbar from "../components/Navbar";
import StudentSignUp from "../components/StudentSignUp"
import StudentSignIn from "../components/StudentSignIn"
import FacultySignUp from "../components/FacultySignUp"
import Footer from "../components/Footer"
import YourProfile from '../components/YourProfile';
import FindPeople from '../components/FindPeople';
import Sidebar from '../components/Sidebar';
import FindProjects from '../components/FindProjects';
import FindStudents from '../components/FindStudents';
// import Graph from '../components/Graph';
import KnowTeamMembers from '../components/KnowTeamMembers';
import Statistics from '../components/Statistics';
// import UploadData from '../components/UploadData';
// import AccessData from '../components/AccessData';

const router = createBrowserRouter([
  {
    path: "/ongoing",
    element: (
      <>
        <Ongoing/>
      </>
    ),
  },
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
    path: "/student_signin",
    element: (
      <>
        <Navbar />
        <Sidebar/>
        <StudentSignIn />
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
    path: "/your_profile",
    element: (
      <>
        <Navbar />
        <Sidebar/>
        <YourProfile/>
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
