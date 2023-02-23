import React from 'react'

const Why = ({h3="", p="", className="rounded-4 why text-white pbcolor p-4"}) => {
  return (
    <div className={className}>
      <h3 className='fw-normal'>{h3}
      </h3>
      <p>{p}
</p>

    </div>
  )
}

export default Why
