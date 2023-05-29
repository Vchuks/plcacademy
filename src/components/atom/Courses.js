import React from 'react'

const Courses = ({cname, fullpay, partpay}) => {
  return (
    <div className="d-flex justify-content-between tuitc">
        <p>{cname}</p>
        <p>{fullpay}</p>
        <p>{partpay}</p>
    </div>
  )
}

export default Courses
