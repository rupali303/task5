import React, { useEffect, useRef, useState } from 'react'
import classes from "./main.module.css"
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function Register() {

    const [freshRegistration, setFreshRegistration] = useState({
        role: "",
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        department: "",
        username: "",
        password: "",
        id:uuidv4()
    });

    const [registeredData, setRegisteredData] = useState([])

    const navigate = useNavigate();

    const formRef = useRef(null);

    const handleChange = (e) => {
        setFreshRegistration((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
    };

    useEffect(() => {
        const registeredStoredData = localStorage.getItem('registeredDataFinal');
        if (registeredStoredData) {
          setRegisteredData(JSON.parse(registeredStoredData));
        }
      }, []);

    const handleRegisteredUser = (e) => {
        // e.preventDefault();
        const registeredDataFinal = [...registeredData, freshRegistration]
        setRegisteredData(registeredDataFinal);
        alert(`Registered Successfully`)
        localStorage.setItem("registeredDataFinal", JSON.stringify(registeredDataFinal));
        
        formRef.current.reset();
        setFreshRegistration({
            role: "",
            firstName: "",
            lastName: "",
            email: "",
            contact: "",
            department: "",
            username: "",
            password: "",
        })
        // navigate('/register')
    };

    const handleLoginPage = () => {
        navigate('/')
    }

    return (
        <>
            <div className={classes.container2}>
                <form ref={formRef} onSubmit={handleRegisteredUser} id='form'>
                    <div className={classes.radio}>
                        <label><input onChange={handleChange} name='option' type='radio' value='staff' id='role' required></input>Staff</label>
                        <label><input onChange={handleChange} name='option' type='radio' value='hod' id='role' required></input>HOD</label>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.group2}>
                            <label>First Name</label>
                            <input id='firstName' onChange={handleChange} type='text' value={freshRegistration.firstName} required></input>
                        </div>
                        <div className={classes.group2}>
                            <label>Last Name</label>
                            <input id='lastName' onChange={handleChange} type='text' value={freshRegistration.lastName} required></input>
                        </div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.group2}>
                            <label>Email</label>
                            <input id='email' onChange={handleChange} type='email' value={freshRegistration.email} required></input>
                        </div>
                        <div className={classes.group2}>
                            <label>Contact</label>
                            <input id='contact' onChange={handleChange} type='number' value={freshRegistration.contact} required></input>
                        </div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.group2} style={{ marginRight: "auto", marginLeft: "17px" }}>
                            <label>Department</label>
                            <select id='department' onChange={handleChange} value={freshRegistration.department} required>
                                <option value=''>Select Department</option>
                                <option value='sales'>Sales</option>
                                <option value='marketing'>Marketing</option>
                                <option value='finance'>Finance</option>
                            </select>
                        </div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.group2}>
                            <label>Username</label>
                            <input id='username' onChange={handleChange} type='text' value={freshRegistration.username} required></input>
                        </div>
                        <div className={classes.group2}>
                            <label>Password</label>
                            <input id='password' onChange={handleChange} type='password' value={freshRegistration.password} required></input>
                        </div>
                    </div>
                    <button className={classes.btn}>Register</button>
                </form>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <span>Already registered ?</span>
                    <button onClick={handleLoginPage} className={classes.btn2}>Login</button>
                </div>
            </div >

        </>
    )
}

export default Register