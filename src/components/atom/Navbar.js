import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import Logo from "./Logo";
import icon from '../../images/icon.png'
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav =()=>{
    return setNav(!nav)
  }
  return (
    <>
    <div className="w-100 d-none redd d-lg-flex justify-content-between align-items-center">
      <div className="navbtntwo d-flex justify-content-between align-items-center">
        <NavLink to="" className="text-decoration-none navtextcolor">
          Certificate Courses
        </NavLink>
        <NavLink to="" className="text-decoration-none navtextcolor">
          Why Pluralcode?
        </NavLink>
        <NavLink to="" className="text-decoration-none navtextcolor">
          Testimonies
        </NavLink>
        <NavLink to="" className="text-decoration-none navtextcolor">
          Accreditation
        </NavLink>
        <NavLink to="" className="text-decoration-none navtextcolor">
          FAQ
        </NavLink>
      </div>
      <div className="navbtnone d-flex justify-content-between">
        <Button
          children="Speak to Advisor"
          className="ptcolor px-4 btn pborder"
        />
        <Button children="Enroll Now" className="pbcolor btn px-4 button" />
      </div>
    </div>
    <div onClick={handleNav}>

    <Logo src={icon} className="d-block d-lg-none" />
    </div>
    {nav ? <Sidebar /> : null}
    </>
  );
};

export default Navbar;
