import React from "react";
import Navbar from "../components/Navbar";
import Course from "../components/Course";
import Footer from "../components/Footer";
import list from "../../public/list.json"

function Courses() {
    console.log(list);
  return (
    <>
      <div>
        <Navbar />
        <Course />
        <Footer />
      </div>
    </>
  );
}

export default Courses;
