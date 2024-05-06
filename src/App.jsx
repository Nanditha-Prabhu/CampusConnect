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
        <FacultySignUp />
        <Footer />
      </>
    ),
  },
  // {
  //   path: "/Access_Data",
  //   element: (
  //     <>
  //       <Navbar />
  //       <AccessData/>
  //       <Footer />
  //     </>
  //   ),
  // },
  // {
  //   path: "/Upload_Data",
  //   element: (
  //     <>
  //       <Navbar />
  //       <UploadData/>
  //       <Footer />
  //     </>
  //   ),
  // },
  // {
  //   path: "/Privacy_Regulations",
  //   element: (
  //     <>
  //       <Navbar />
  //       <Footer />
  //     </>
  //   ),
  // },
  
]);

export default function App() {
  return <RouterProvider router={router} />;
}
