import React from "react";
import Logo from "../atom/Logo";
import frameone from "../../images/Frame 143.png";
import acc from "../../images/Frame 60917.png";
import qt1 from "../../images/quoteone.png";
import qt2 from "../../images/quotetwo.png";

const Accredit = () => {
  return (
    <div className="pad pseccolorbg text-white topbody">
      <div className="pseccolorbg top d-flex flex-column flex-md-row align-items-center flex-column-reverse justify-content-between">
        <div>
          <h3>Internationally Accredited</h3>
          <p className="pt-3">
            Pluralcode Institute is formally accredited by the American Council
            of Training and Development (ACTD) after meeting its global
            standards for accreditation. We are immensely proud of this and will
            continue to build the largest school of tech in Africa.
          </p>
        </div>
        <div className="log">
          <Logo src={acc} className="ac"/>
        </div>
      </div>
      {/* carousel */}
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner py-5">
          <div class="carousel-item active">
            <div className="d-flex flex-column flex-md-row mt-5 accpic">
              <div className="w-100 m-auto pt-5 pt-lg-0 d-flex justify-content-center">
                <Logo src={frameone} className="d-flex w-50 pi" />
              </div>
              <div className="w-100 p-4">
                <h3 className="our">
                  What <span className="ptcolor">Our Students</span> Are Saying
                </h3>
                <div className="relative pt-4">
                  <Logo src={qt1} className="qtone" />
                  <p className="ps-4 pt-2">
                    <span className="fw-semibold">Bukola Lawal</span> | Product
                    Designer
                  </p>
                  <p className="accp px-4 lh-lg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Cum consectetur quisquam ex, distinctio nobis non deleniti
                    beatae iste molestiae porro, quibusdam ad fugiat deserunt!
                    Nobis quo at libero quia voluptatibus.
                  </p>
                  <Logo src={qt2} className="qttwo" />
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="d-flex mt-5 flex-column flex-md-row accpic">
              <div className="w-100 m-auto pt-5 pt-lg-0 d-flex justify-content-center">
                <Logo src={frameone} className="d-flex w-50 pi" />
              </div>
              <div className="w-100 p-4">
                <h3 className="our">
                  What <span className="ptcolor">Our Students</span> Are Saying
                </h3>
                <div className="relative pt-4">
                  <Logo src={qt1} className="qtone" />
                  <p className="ps-4 pt-2">
                    <span className="fw-semibold">Bukola Lawal</span> | Product
                    Designer
                  </p>
                  <p className="accp px-4 lh-lg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Cum consectetur quisquam ex, distinctio nobis non deleniti
                    beatae iste molestiae porro, quibusdam ad fugiat deserunt!
                    Nobis quo at libero quia voluptatibus.
                  </p>
                  <Logo src={qt2} className="qttwo" />
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="d-flex mt-5 flex-column flex-md-row accpic">
              <div className="w-100 m-auto pt-5 pt-lg-0 d-flex justify-content-center">
                <Logo src={frameone} className="d-flex w-50 pi" />
              </div>
              <div className="w-100 p-4">
                <h3 className="our">
                  What <span className="ptcolor">Our Students</span> Are Saying
                </h3>
                <div className="relative pt-4">
                  <Logo src={qt1} className="qtone" />
                  <p className="ps-4 pt-2">
                    <span className="fw-semibold">Bukola Lawal</span> | Product
                    Designer
                  </p>
                  <p className="accp px-4 lh-lg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Cum consectetur quisquam ex, distinctio nobis non deleniti
                    beatae iste molestiae porro, quibusdam ad fugiat deserunt!
                    Nobis quo at libero quia voluptatibus.
                  </p>
                  <Logo src={qt2} className="qttwo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accredit;
