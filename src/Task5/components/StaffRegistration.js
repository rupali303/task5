import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'

function StaffRegistration() {

    const navigate = useNavigate()
    const [staffData, setStaffData] = useState(() => JSON.parse(localStorage.getItem("staffLoginData")) || [])
    const [input, setInput] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        deparment: "",
        username: "",
        password: "",
        role:"Staff"
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        setStaffData([...staffData, input])
        setInput({
            fname: "",
            lname: "",
            email: "",
            phone: "",
            deparment: "",
            username: "",
            password: "",
        })

    }

    useEffect(() => {
        if (staffData) {
            localStorage.setItem("staffLoginData", JSON.stringify(staffData))
        }
    }, [staffData])

    const handleChange = (e) => {
        const { name, value } = e.target
        setInput((pre) => ({ ...pre, [name]: value }))

    }
    return (
        <>
            <div>
                <form onSubmit={handleSubmit} style={{marginTop:"30px"}}>
                    <div className='d-flex justify-content-around mb-4'>
                        <div className='form-group'>
                            <label style={{fontWeight:"bold"}}>First Name</label><br />
                            <input className='form-control' onChange={handleChange} required name='fname' type='text' value={input.fname} />
                        </div>
                        <div className='form-group'>
                            <label style={{fontWeight:"bold"}}>Last Name</label><br />
                            <input className='form-control' onChange={handleChange} required name='lname' type='text' value={input.lname} />
                        </div>
                    </div>
                    <div className='d-flex justify-content-around mb-4'>
                        <div className='form-group'>
                            <label style={{fontWeight:"bold"}}>Email</label><br />
                            <input className='form-control' onChange={handleChange} required name='email' type='email' value={input.email} />
                        </div>
                        <div className='form-group'>
                            <label style={{fontWeight:"bold"}}>Contact</label><br />
                            <input className='form-control' onChange={handleChange} required name='phone' type='number' value={input.phone} />
                        </div>
                    </div>
                    <div className='form-group col-md-5' style={{ marginLeft: "25px" }}>
                        <div> <label style={{marginBottom:"5px",fontWeight:"bold"}}> Deparment </label></div>
                        <select className='form-control ' required name='deparment' onClick={handleChange} >
                            <option selected>
                            </option>
                            <option value='Accounting'>
                                Computer
                            </option>
                            <option value='Marketing'>
                                Marketing
                            </option>
                            <option value='Marketing'>
                                Sales
                            </option>
                        </select>
                    </div>

                    <div className='d-flex justify-content-around mb-4 mt-4'>
                        <div className='form-group'>
                            <label style={{fontWeight:"bold"}}>Username</label><br />
                            <input className='form-control' onChange={handleChange} required name="username" type='text' value={input.username} />
                        </div>
                        <div className='form-group'>
                            <label style={{fontWeight:"bold"}}>Password</label><br />
                            <input className='form-control' onChange={handleChange} required name='password' type='password' value={input.password} />
                        </div>
                    </div>
                    <div className='d-flex  d-block flex-row-reverse mt-3 '>
                        <div style={{ width: "100%" }}>
                            <button className='btn btn-primary' type='submit' style={{ width: "100%",marginBottom:"20px" }}>Register</button>
                        </div>
                    </div>
                    <div className=' text-center'>
                    <p>Already Registered? <NavLink to={"/login"}>Login</NavLink></p>
                </div>

                </form>
            </div>
        </>
    )
}

export default StaffRegistration