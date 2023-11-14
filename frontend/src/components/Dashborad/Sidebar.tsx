import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import GetAllMentor from '../mentor/Pages/Getallmentor';

const Sidebar = () => {
  return (
    <>
     <div className="sidenav">
        <Link to="#"><i className="bi bi-person-fill-check"></i>Admin</Link>
        <Link to="#"><i className="bi bi-people-fill"></i> Mentor</Link>
        <Link to="#"><i className="bi bi-person-lines-fill"></i>Student</Link>
        <Link to="/course"><i className="bi bi-boxes"></i>Course</Link>
        <Link to="#"><i className="bi bi-receipt"></i>Curriculum</Link>
       

    </div>
    </>
  )
}

export default Sidebar;
