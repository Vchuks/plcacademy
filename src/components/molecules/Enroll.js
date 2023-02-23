import React from "react";
import Enrollpill from "../atom/Enrollpill";
import picc1 from "../../images/Frame 110 (1).png";
import picc2 from "../../images/Frame 110.png";
import picc3 from "../../images/Frame 110 (3).png";
import picc4 from "../../images/Frame 110 (2).png";
import Button from "../atom/Button";

const Enroll = () => {
  return (
    <div className="pad padd enbg">
      <h2 className="text-center pseccolor py-lg-5">How to Enroll?</h2>
      <div className="d-flex flex-column flex-lg-row gap-4 py-3">
        <Enrollpill
          h3="Step One"
          h5="Book a Session"
          to="#"
          linkchildren="click here"
          p="Select the course you are interested in and speak with the Student Advisor for 5 - 10 minutes to get all the relevant information about the program"
          src={picc1}
          className="w-100 rounded-4 text-white encol stepone d-flex"
        />
        <Enrollpill
          h3="Step Two"
          h5="Enrollment Guide"
          p="After your session, you will be walked through the process of enrollment, payment plans, self-paced study pack and calendar for instructor-led classes."
          src={picc2}
          className="w-100 rounded-4 text-white encol steptwo d-flex swap"
        />
      </div>
      <div className="d-flex flex-column flex-lg-row gap-4 py-3">
        <Enrollpill
          h3="Step Three"
          h5="Pay Tuition"
          p="Once you pay tuition, you will be forwarded all necessary course materials, a welcome pack, and an invite into the course community on slack where you join other students."
          src={picc3}
          className="w-100 rounded-4 text-white encol steptwo d-flex"
        />
        <Enrollpill
          h3="Step Four"
          h5="You Are All Set!" 
          p="Take full advantage a world class training program and a community of like minds."
          children={<Button children="Start Now" className="btn col-sm-12 col-md-6 col-lg-12 pbcolor button py-1 py-lg-2"/>}
          src={picc4}
          className="w-100 rounded-4 text-white encol stepone swap d-flex"
        />
      </div>
    </div>
  );
};

export default Enroll;
