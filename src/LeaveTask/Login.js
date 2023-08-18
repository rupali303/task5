import React, { useEffect, useRef, useState } from 'react'
import classes from "./main.module.css"
import { useNavigate } from 'react-router-dom'

function Login() {

    

    const regPersons = JSON.parse(window.localStorage.getItem('register'));
    console.log(regPersons);

   
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
        console.log(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        console.log(e.target.value);
    }

    const logPerson = regPersons? regPersons.find((person) => {
        return username === person.username;
    }) : null

    const handleLoginUser = (e) => {
        e.preventDefault();
       
        if (!username || !password) {
            alert(`Username and password is mandatory. Register first if not registered.`)
        }
        else if (username !== logPerson.username || password !== logPerson.password) {
            alert(`Invalid Credentials`)
        }
        else if (username === logPerson.username && password === logPerson.password && logPerson.role === "staff") {
            alert(`Logged in successfully`);
            navigate('/staffLogin1')
        }
        else if (username === logPerson.username && password === logPerson.password && logPerson.role === "hod") {
            alert(`Logged in successfully`);
            navigate('/hodLogin1')
        }
       
        console.log(logPerson);
        localStorage.setItem("logPerson", JSON.stringify(logPerson));
    };

    const handleRegisterPage = () => {
        navigate('/register')
    }



    return (
        <>
            <div className={classes.container}>
                <form>
                    <div className={classes.group}>
                        <label style={{fontWeight:"bold"}}>Username</label>
                        {/* <input onChange={handleLoginUsername} type='text'></input> */}
                        <input onChange={handleUsernameChange} type='text' id={username}></input>
                    </div>
                    <div className={classes.group}>
                        <label style={{fontWeight:"bold"}}>Password</label>
                        {/* <input onChange={handleLoginPassword} type='password'></input> */}
                        <input onChange={handlePasswordChange} type='password' id={password}></input>
                    </div>
                    {/* <button onClick={handleLogin} className={classes.btn}>Login</button> */}
                    <button onClick={handleLoginUser} className={classes.btn}>Login</button>
                </form>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <span>Not registered yet?</span>
                    <button onClick={handleRegisterPage} className={classes.btn2}>Register</button>
                </div>
            </div>
        </>
    )
}

export default Login