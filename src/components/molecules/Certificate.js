import React from "react";
import Logo from "../atom/Logo";
import frame1 from "../../images/Frame 49 (12).png";
import frame2 from "../../images/Frame 49 (11).png";
import frame3 from "../../images/Frame 49 (22).png";
import frame4 from "../../images/Frame 49 (3).png";
import frame5 from "../../images/Frame 49 (4).png";
import frame6 from "../../images/Frame 49 (5).png";
import frame7 from "../../images/Frame 49 (6).png";
import frame8 from "../../images/Frame 49 (7).png";
import frame9 from "../../images/Frame 49 (8).png";

const Certificate = () => {
  return (
    <div className="pad certbg">
      <section className="text-center">
        <h2 className="pseccolor fs-1 fw-semibold">Certificate Courses</h2>
        <p className="cert pt-md-3 m-auto fw-semibold navtextcolor">
          Choose the Certificate Course you would like to learn and click the
          link underneath to chat with the Student Advisor and begin your
          enrollment
        </p>
      </section>
      <section className="w-100 d-md-flex gap-4 seccert certwrap justify-content-center">
        <div className="imgfolder shadow-lg">
          <Logo src={frame1} />
          <div className="pt-3 d-flex flex-column">
            <div>
              <h5 className="fw-semibold">Product Design (UI / UX)</h5>
              <p className="text">
                Learn the principles of Product Design, User Research and
                Interface Design.
              </p>
            </div>
            <div className="d-flex align-items-center">
              <box-icon type="logo" name="whatsapp" color="#F8991D"></box-icon>
              <a href="tel:080" className="ptcolor text-decoration-none ps-1">
                Speak to Advisor
              </a>
            </div>
          </div>
        </div>

        <div className="imgfolder shadow-lg">
          <Logo src={frame2} />
          <div className="pt-3 d-flex flex-column">
            <div>
              <h5 className="fw-semibold">Product Managment</h5>
              <p className="text">
                Master Product Management through our 8-week Masterclass. Speak
                to Advisor
              </p>
            </div>
            <div className="d-flex align-items-center">
              <box-icon type="logo" name="whatsapp" color="#F8991D"></box-icon>
              <a href="tel:080" className="ptcolor text-decoration-none ps-1">
                Speak to Advisor
              </a>
            </div>
          </div>
        </div>
        <div className="imgfolder shadow-lg">
          <Logo src={frame3} />
          <div className="pt-3 d-flex flex-column">
            <div>
              <h5 className="fw-semibold">Product Marketing</h5>
              <p className="text">
                Learn the skills to take tech products to market and grow
                successfully.
              </p>
            </div>
            <div className="d-flex align-items-center">
              <box-icon type="logo" name="whatsapp" color="#F8991D"></box-icon>
              <a href="tel:080" className="ptcolor text-decoration-none ps-1">
                Speak to Advisor
              </a>
            </div>
          </div>
        </div>

        <div className="imgfolder shadow-lg">
          <Logo src={frame4} />
          <div className="pt-3 d-flex flex-column">
            <div>
              <h5 className="fw-semibold">Full-Stack Development</h5>
              <p className="text">
                Master JS Based FullStack Development in a practical
                environment.
              </p>
            </div>
            <div className="d-flex align-items-center">
              <box-icon type="logo" name="whatsapp" color="#F8991D"></box-icon>
              <a href="tel:080" className="ptcolor text-decoration-none ps-1">
                Speak to Advisor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* second image section */}
      <section className="w-100 d-md-flex flex-md-wrap gap-4 seccert justify-content-center">
        <div className="imgfolder shadow-lg">
          <Logo src={frame5} />
          <div className="pt-3 d-flex flex-column">
            <div>
              <h5 className="fw-semibold">Front-End Development</h5>
              <p className="text">
                Master Web Development through React, Bootstrap and others.
              </p>
            </div>
            <div className="d-flex align-items-center">
              <box-icon type="logo" name="whatsapp" color="#F8991D"></box-icon>
              <a href="tel:080" className="ptcolor text-decoration-none ps-1">
                Speak to Advisor
              </a>
            </div>
          </div>
        </div>

        <div className="imgfolder shadow-lg">
          <Logo src={frame6} />
          <div className="pt-3 d-flex flex-column">
            <div>
              <h5 className="fw-semibold">Cloud Computing</h5>
              <p className="text">
                Become a Cloud Computing Expert through our 16-20 weeks program.
              </p>
            </div>
            <div className="d-flex align-items-center">
              <box-icon type="logo" name="whatsapp" color="#F8991D"></box-icon>
              <a href="tel:080" className="ptcolor text-decoration-none ps-1">
                Speak to Advisor
              </a>
            </div>
          </div>
        </div>

        <div className="imgfolder shadow-lg">
          <Logo src={frame7} />
          <div className="pt-3 d-flex flex-column">
            <div>
              <h5 className="fw-semibold">Data Analytics</h5>
              <p className="text">
                Become a Professional Data Analyst with mastery of modern tools.
              </p>
            </div>
            <div className="d-flex align-items-center">
              <box-icon type="logo" name="whatsapp" color="#F8991D"></box-icon>
              <a href="tel:080" className="ptcolor text-decoration-none ps-1">
                Speak to Advisor
              </a>
            </div>
          </div>
        </div>
        <div className="imgfolder shadow-lg">
          <Logo src={frame8} />
          <div className="pt-3 d-flex flex-column">
            <div>
              <h5 className="fw-semibold">Data Science</h5>
              <p className="text">
                Learn Python-Based Data Science and Machine Learning.
              </p>
            </div>
            <div className="d-flex align-items-center">
              <box-icon type="logo" name="whatsapp" color="#F8991D"></box-icon>
              <a href="tel:080" className="ptcolor text-decoration-none ps-1">
                Speak to Advisor
              </a>
            </div>
          </div>
        </div>

        <div className="imgfolder shadow-lg">
          <Logo src={frame9} />
          <div className="pt-3 d-flex flex-column">
            <div>
              <h5 className="fw-semibold">Data Engineering</h5>
              <p className="text">
                Become a Data Engineer after taking our 20-week hands-on
                program.
              </p>
            </div>
            <div className="d-flex align-items-center">
              <box-icon type="logo" name="whatsapp" color="#F8991D"></box-icon>
              <a href="tel:080" className="ptcolor text-decoration-none ps-1">
                Speak to Advisor
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certificate;
