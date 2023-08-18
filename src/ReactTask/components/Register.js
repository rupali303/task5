import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { v4 as uuidv4 } from 'uuid';

function Register() {
    const [data, setData] = useState({
        role: "",
        fname: "",
        lname: "",
        email: "",
        contact: "",
        Department: "",
        username: "",
        password: ""
    })
   
    const navigate = useNavigate()
    const [users, setUsers] = useState(() => JSON.parse(localStorage.getItem("users")) || []
    )
    const  usernameArray=users?.map((ele)=>ele.username)
    console.log(usernameArray)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((pre) => ({ ...pre, [name]: value }))
       
    }
    const usernameCheck=(e)=>{
      
        console.log(e)
    }
    const handleRegister = (e) => {
        e.preventDefault();
        setUsers((pre) => {
            return [...pre, { ...data, id: uuidv4() }]
        })
        setData({
            role: "",
            fname: "",
            lname: "",
            email: "",
            contact: "",
            Department: "",
            username: "",
            password: ""
        })
        alert("Registation successfully Done...!")
    }
    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users))
    }, [users])

    return (
        <>
            <div className="container p-5">
                <form onSubmit={handleRegister}>
                    <div className='row'>
                        <div className="col-md-8  border mx-auto py-3">
                            <div className=" row">
                                <div className="col-md-12 form-group">
                                    <input onClick={handleChange} type="radio" name="role" value='HOD' id='HOD' className='ml-3' required />
                                    <label htmlFor="HOD">HOD</label>
                                    <input onClick={handleChange} type="radio" name="role" value='Staff' id='Staff' className='ml-3' required />
                                    <label htmlFor="Staff">Staff</label>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="fname">First Name</label>
                                    <input onChange={handleChange} value={data.fname} type="text" name="fname" id="fname" className='form-control' required />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="lname">Last Name</label>
                                    <input onChange={handleChange} value={data.lname} type="text" name="lname" id="lname" className='form-control' required />
                                </div>
                            </div>
                            <div className=" row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="email">Email</label>
                                    <input onChange={handleChange} value={data.email} type="email" name="email" id="email" className='form-control' required />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="contact">Contact</label>
                                    <input onChange={handleChange} value={data.contact} type="number" name="contact" id="contact" className='form-control' required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <label htmlFor="Department">Department</label>
                                    <select onClick={handleChange} name="Department" className='form-control' id="Department" >Department
                                        <option value="Sales">Sales</option>
                                        <option value="Purchase">Purchase</option>
                                        <option value="Testing">Testing</option>
                                        <option value="Development">Development</option>
                                    </select>
                                </div>
                            </div>
                            <div className=" row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="username">Username</label>
                                    <input onChange={ handleChange } value={data.username} type="text" name="username" id="username" className='form-control' required />
                                    {usernameArray?.filter((ele)=>ele===data.username).length>0 ?<p style={{color:"red"}}>UserName already exits.</p>:null}
                                    
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="password">Password</label>
                                    <input onChange={handleChange} value={data.password} type="password" name="password" id="password" className='form-control' required />
                                </div>
                            </div>
                            <div className="form-group">
                                <button className="btn btn lg btn-primary form-control" type='submit'>Register</button>
                            </div>
                            <div className="form-group text-center">
                                <p>Already Registered? <button onClick={() => navigate("/login")} className='text-primary border-0 bg-white'  >Login</button></p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Register