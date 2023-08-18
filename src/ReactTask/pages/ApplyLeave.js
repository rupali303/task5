import moment from 'moment/moment'
import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


function ApplyLeave() {
    const [showForm, setShowForm] = useState(false)
    const signin = JSON.parse(localStorage.getItem("signin"))

    const [data, setData] = useState({
        from: '',
        to: "",
        reason: "",
        Status: "Pending",
        userName: `${signin.fname} ${signin.lname}`
    })
    const [dataArray, setDataArray] = useState(() => JSON.parse(localStorage.getItem("leaveDetails")) || [])
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((pre) => ({ ...pre, [name]: value }))

    }
    let day
    const getDays = (first, last) => {
        let start = moment(first);
        let end = moment(last);
        return day = end.diff(start, "days")
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setDataArray((pre) => [...pre, { ...data, id: uuidv4() }])
        console.log(dataArray)
        setShowForm(false)
        console.log(data, typeof data)
        setData({
            from: '',
            to: "",
            reason: "",
            Status: "Pending",
            userName: `${signin.fname} ${signin.lname}`


        })
    }
    const handleShow = () => setShowForm(true)
    const handlecancelShow = () => setShowForm(false)
    useEffect(() => {
        if (dataArray && dataArray.length > 0) {
            localStorage.setItem("leaveDetails", JSON.stringify(dataArray))
        }
    }, [dataArray])

    return (
        <div style={{ backgroundColor: "#eee" }}>

            <>
                <>
                    {dataArray.length === 0 && <div style={{ display: "flex", justifyContent: "center" }}><h3 className='text-danger'>Not applied any leave yet</h3></div>}
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <button type="button" className="btn btn-primary mt-5 mb-5" onClick={handleShow}>
                            + Apply Leave
                        </button>
                    </div>


                    {showForm && <div className="row">
                        <div className="col-md-6 mx-auto border shadow p-5">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <h4 >Leave Details</h4>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label htmlFor="from">From</label>
                                        <input onChange={handleChange} type="date" name="from" id="from" value={data.from} className='form-control' required />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="to">To</label>
                                        <input onChange={handleChange} type="date" name="to" id="to" value={data.to} className='form-control' required />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="reason">Reason</label>
                                        <textarea onChange={handleChange} name="reason" id="reason" value={data.reason} cols="75" rows="5" className='form-control' required></textarea>
                                    </div>

                                    <div>
                                        <button className="btn bg-success ml-3" type='submit'>Submit</button>
                                        <button className="btn bg-danger ml-4" onClick={handlecancelShow}>Cancel</button>
                                    </div>

                                </div>

                            </form>
                        </div>
                    </div>}




                </>
                <div className='pt-5'>
                    <div className='container'>
                        <div className="row">


                            <div className="col-md-2">
                                <h1 className='text-success'>
                                    {dataArray.filter((ele) => {
                                        if (ele.Status === "Approved" && ele.userName === `${signin.fname} ${signin.lname}`) {
                                            return ele
                                        }
                                    }).length}</h1>
                                <p>Approved</p>
                            </div>
                            <div className="col-md-2">
                                <h1 className='text-danger'>{dataArray.filter((ele) => {
                                    if (ele.Status === "Rejected" && ele.userName === `${signin.fname} ${signin.lname}`) {
                                        return ele
                                    }
                                }).length}</h1>
                                <p>Rejected</p>
                            </div>
                            <div className="col-md-2">
                                <h1 className='text-warning'>{dataArray.filter((ele) => {
                                    if (ele.Status === "Pending" && ele.userName === `${signin.fname} ${signin.lname}`) {
                                        return ele
                                    }
                                }).length}</h1>
                                <p>Pending</p>
                            </div>
                        </div>
                        <div className="row">
                            {dataArray?.map((ele) => {
                                if (ele.userName === `${signin.fname} ${signin.lname}`) {
                                    return <>

                                        <div className="col-md-3 mr-1 shadow border p-3 mb-4" style={{ backgroundColor: "white" }}>
                                            <p className='mb-0'><strong>Leave for</strong> {moment().format(ele.from)}</p>
                                            <p>Number of days- {getDays(ele.from, ele.to)}</p>
                                            <h5>Reason:</h5>
                                            <p>{ele.reason}</p>
                                            <h5>Status:</h5>
                                            <p>{ele.Status}...</p>
                                        </div>

                                    </>
                                }

                            })}

                        </div>
                    </div>
                </div>

            </>

        </div>
    )
}

export default ApplyLeave