import React, { useEffect, useRef, useState } from 'react'
import classes from "./main.module.css"
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function Register() {

    const [registration, setRegistration] = useState({
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
        setRegistration((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
    };

    useEffect(() => {
        const registeredStoredData = localStorage.getItem('register');
        if (registeredStoredData) {
          setRegisteredData(JSON.parse(registeredStoredData));
        }
      }, []);

    const handleRegisteredUser = (e) => {
        // e.preventDefault();
        const register = [...registeredData, registration]
        setRegisteredData(register);
        alert(`Registered Successfully`)
        localStorage.setItem("register", JSON.stringify(register));
        
        formRef.current.reset();
        setRegistration({
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
                        <label style={{fontWeight:"bold"}}><input onChange={handleChange} name='option' type='radio' value='staff' id='role' required></input>Staff</label>
                        <label style={{fontWeight:"bold"}}><input onChange={handleChange} name='option' type='radio' value='hod' id='role' required></input>HOD</label>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.group2}>
                            <label style={{fontWeight:"bold"}}>First Name</label>
                            <input id='firstName' onChange={handleChange} type='text' value={registration.firstName} required></input>
                        </div>
                        <div className={classes.group2}>
                            <label style={{fontWeight:"bold"}}>Last Name</label>
                            <input id='lastName' onChange={handleChange} type='text' value={registration.lastName} required></input>
                        </div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.group2}>
                            <label style={{fontWeight:"bold"}}>Email</label>
                            <input id='email' onChange={handleChange} type='email' value={registration.email} required></input>
                        </div>
                        <div className={classes.group2}>
                            <label style={{fontWeight:"bold"}}>Contact</label>
                            <input id='contact' onChange={handleChange} type='number' value={registration.contact} required></input>
                        </div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.group2} style={{ marginRight: "auto", marginLeft: "17px" }}>
                            <label style={{fontWeight:"bold"}}>Department</label>
                            <select id='department' onChange={handleChange} value={registration.department} required>
                                {/* <option value=''>Select Department</option> */}
                                <option value='sales'>Sales</option>
                                <option value='marketing'>Marketing</option>
                                <option value='computer'>Computer</option>
                            </select>
                        </div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.group2}>
                            <label style={{fontWeight:"bold"}}>Username</label>
                            <input id='username' onChange={handleChange} type='text' value={registration.username} required></input>
                        </div>
                        <div className={classes.group2}>
                            <label style={{fontWeight:"bold"}}>Password</label>
                            <input id='password' onChange={handleChange} type='password' value={registration.password} required></input>
                        </div>
                    </div>
                    <button className={classes.btn}>Register</button>
                </form>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <span style={{fontWeight:"bold"}}>Already registered ?</span>
                    <button onClick={handleLoginPage} className={classes.btn2}>Login</button>
                </div>
            </div >

        </>
    )
}

export default Register