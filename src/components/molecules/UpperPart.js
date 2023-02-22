import React from "react";
import "boxicons";
import Button from "../atom/Button";

const UpperPart = () => {
  return (
    <div className="upp pad mag upbg">
      <h1 className="pseccolor bold">
        Acquire <span className="ptcolor">Tech Skills</span> For a Borderless
        Career.
      </h1>
      <p className="navtextcolor normal pt-3">
        Learn from elite level mentor and become a top level professional in the
        field of tech
      </p>
      <div className="btncont">
        <Button children="Enroll Now" className="btn button px-5 pbcolor" />
        <div className="d-flex align-items-center">
          <box-icon type="logo" name="whatsapp" color="#F8991D"></box-icon>
          <a href="tel:080" className="ptcolor text-decoration-none ps-1">
            Chat On WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default UpperPart;
