import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../atom/Logo';
import pix1 from '../../images/Frame 49.png';
import pix2 from '../../images/Frame 49 (1).png';
import pix3 from '../../images/Frame 49 (2).png';

const Press = () => {
  return (
    <div className='text-center py-5 mt-3'>
      <h2 className='pseccolor fw-semibold fs-2'>Pluralcode in the press</h2>
      <p className='press pb-3 m-auto navtextcolor'>Good things are hard to keep hidden and we are no exception. Find out what has been written in the news about Pluralcode, we will continue to work hard and build Africa’s largest school of technology.</p>

      <section className="w-100 d-flex flex-column flex-wrap flex-md-row gap-4 seccert text-start justify-content-center align-items-center">
        <div className="imgfoldertwo shadow-lg">
          <Logo src={pix1} className="w-100"/>
          <div className="pt-3">
            <h5 className='fw-semibold'>Techpoint Africa</h5>
            <p className="text">
            Pluralcode partners with Finquest Finance to launch ‘Learn Now, Pay Later’
            </p>
            <div className="">
              <Link to="#" className="ptcolor text-decoration-none ps-1">
                View Magazine
              </Link>
            </div>
          </div>
        </div>

        <div className="imgfoldertwo shadow-lg">
          <Logo src={pix2} className="w-100"/>
          <div className="pt-3">
            <h5 className='fw-semibold'>TechNext NG</h5>
            <p className="text">Pluralcode, is on a mission to build Africa’s largest tech school</p>
            <div className="d-flex align-items-center">
              <Link to="#" className="ptcolor text-decoration-none ps-1">
                View Magazine
              </Link>
            </div>
          </div>
        </div>

        <div className="imgfoldertwo shadow-lg">
          <Logo src={pix3} className="w-100"/>
          <div className="pt-3">
            <h5 className='fw-semibold'>Business Day</h5>
            <p className="text">
            Introducing Pluralcode, a fast-growing Ed-tech company.
            </p>
            <div className="d-flex align-items-center">
              <Link to="" className="ptcolor text-decoration-none ps-1">
                View Magazine
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Press
