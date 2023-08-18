import moment from 'moment/moment'
import React, { useState } from 'react'


function RequestLeave() {
    const [data, setData] = useState(() => JSON.parse(localStorage.getItem("leaveDetails")) || [])

    const signin = JSON.parse(localStorage.getItem("signin"))

    let day
    const getDays = (first, last) => {
        let start = moment(first);
        let end = moment(last);
        return day = end.diff(start, "days")
    }
    const handleApprove = (ele) => {
        const approveData = data.map((user) => {
            if (user.id === ele.id) {
                user.Status = "Approved"
                return user
            }
            return user
        })
        setData(approveData)
        localStorage.setItem("leaveDetails", JSON.stringify(approveData))
    }
    // console.log(data)
    const handleReject = (ele) => {
        const rejectData = data.map((user) => {
            if (user.id === ele.id) {
                user.Status = "Rejected"
                return user
            }
            return user
        })

        setData(rejectData)
        localStorage.setItem("leaveDetails", JSON.stringify(rejectData))
    }
    return (
        <>
            <div className='container'>
                {data.length <= 0 && <h3 className='text-center text-danger' style={{ height: "100vh", paddingTop: "40vh" }}>No request leave availble</h3>}
                <div className="row ">
                    {data?.map((ele, i) => {

                        return <div key={i} className="col-md-3 m-4 shadow border p-3" >
                                    <h6>{ele.userName}</h6>
                                    <p className='mb-0'>Leave for {ele.from}</p>
                                    <p>Number of days {getDays(ele.from, ele.to)}</p>
                                    <h5 className='mb-0'>Reason</h5>
                                    <p>{ele.reason}</p>
                                    <h5 className='mb-0'>Status</h5>
                                    <p className='text-warning'>{ele.Status}</p>
                                    <div>
                                        <button className="btn bg-success btn-lg text-white" onClick={() => handleApprove(ele)} type='button'>Approve</button>
                                        <button className="btn bg-danger ml-5 btn-lg text-white" onClick={() => handleReject(ele)} type='button'>Reject</button>
                                    </div>
                        </div>

                    })}

                </div>

            </div>
        </>


    )
}

export default RequestLeave