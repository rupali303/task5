import React, { useState } from 'react'
import { useEffect } from 'react'

function HodHomePage() {
  const [data, setData] = useState(() => JSON.parse(localStorage.getItem("leaveData")))

  const handleChange = ({ id }) => {
    const approveLeave = data.map((res) => {
      if (res.id === id) {
        res.status = "Approved"
        return res
      }
      return res
    })
    setData(approveLeave)
    localStorage.setItem("leaveData", JSON.stringify(approveLeave))

  }
  const handleReject = ({ id }) => {
    const updateLeave = data.map((res) => {
      if (res.id === id) {
        res.status = "Rejected"
      }
      return res
    })
    setData(updateLeave)
    localStorage.setItem("leaveData", JSON.stringify(updateLeave))

  }

  return (
    <>
      <div className='container' style={{ margin: " 0 auto" }}>
        <div className='row' style={{marginTop:"80px"}}>
          {data?.map((data, i) => {
            return <div className="card col-sm-3 m-3" key={i}>
              <div className="card-body">
                <h3>{data.name}</h3>
                <p>Leave for {data.fromDate} to {data.toDate}</p>
                <p>Number Of Days {data.days}</p>
                <p><strong>Reason:</strong> <br /> {data.reason}</p>
                <p><strong>Status: </strong>{data.status}</p>
                <div className='d-flex justify-content-around'>
                  <button type='submit' className='btn btn-danger px-4' onClick={() => handleReject(data)}>Reject</button>
                  <button type='submit' className='btn btn-success px-4' onClick={() => handleChange(data)}>Approve</button>
                </div>
              </div>
            </div>
          })}

        </div>
      </div>
    </>
  )
}

export default HodHomePage