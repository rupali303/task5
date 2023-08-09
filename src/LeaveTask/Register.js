import React, { useEffect, useRef, useState } from 'react'
import classes from "./main.module.css"
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function Register() {

    const [register, setRegister] = useState({
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
        setRegister((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
    };

    useEffect(() => {
        const registeredStoredData = localStorage.getItem('registerData');
        if (registeredStoredData) {
          setRegisteredData(JSON.parse(registeredStoredData));
        }
      }, []);

    const handleRegisteredUser = (e) => {
        // e.preventDefault();
        const registerData = [...registeredData, register]
        setRegisteredData(registerData);
        alert(`Registered Successfully`)
        localStorage.setItem("registerData", JSON.stringify(registerData));
        
        formRef.current.reset();
        setRegister({
            role: "",
            firstName: "",
            lastName: "",
            email: "",
            contact: "",
            department: "",
            username: "",
            password: "",
        })
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
                            <input id='firstName' onChange={handleChange} type='text' value={register.firstName} required></input>
                        </div>
                        <div className={classes.group2}>
                            <label style={{fontWeight:"bold"}}>Last Name</label>
                            <input id='lastName' onChange={handleChange} type='text' value={register.lastName} required></input>
                        </div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.group2}>
                            <label style={{fontWeight:"bold"}}>Email</label>
                            <input id='email' onChange={handleChange} type='email' value={register.email} required></input>
                        </div>
                        <div className={classes.group2}>
                            <label style={{fontWeight:"bold"}}>Contact</label>
                            <input id='contact' onChange={handleChange} type='number' value={register.contact} required></input>
                        </div>
                    </div>
                    <div className={classes.row}>
                        <div  className={classes.group2} style={{ marginRight: "auto", marginLeft: "17px" }}>
                            <label style={{fontWeight:"bold"}}>Select Department</label>
                            <select id='department' onChange={handleChange} value={register.department} required>
                                {/* <option value=''></option> */}
                                <option value='sales'>Sales</option>
                                <option value='marketing'>Marketing</option>
                                <option value='finance'>Computer</option>
                            </select>
                        </div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.group2}>
                            <label style={{fontWeight:"bold"}}>Username</label>
                            <input id='username' onChange={handleChange} type='text' value={register.username} required></input>
                        </div>
                        <div className={classes.group2}>
                            <label style={{fontWeight:"bold"}}>Password</label>
                            <input id='password' onChange={handleChange} type='password' value={register.password} required></input>
                        </div>
                    </div>
                    <button className={classes.btn}>Register</button>
                </form>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <span style={{fontWeight:"bold"}}>Already registered ?</span>
                    <button onClick={handleLoginPage} className={classes.btn2} style={{fontWeight:"bold"}}>Login</button>
                </div>
            </div >

        </>
    )
}

export default Register