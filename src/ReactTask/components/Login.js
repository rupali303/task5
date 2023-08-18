import React, {  useState } from 'react'
import { useNavigate } from 'react-router';

function Login( ) {
    const navigate=useNavigate()
    const users=JSON.parse(localStorage.getItem("users"))
    const[data,setData]=useState({
        username:"",
        password:""
    })
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((pre) => ({ ...pre, [name]: value }))
    }
    const handleBlur=()=>{
        users.map((ele)=>{
            if(ele.username===data.username && ele.password===data.password){
                localStorage.setItem("signin",JSON.stringify(ele))
            }
        })
        console.log(data)

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        
    const signin=JSON.parse(localStorage.getItem("signin"))  

            if(signin?.role==="HOD"){
                alert("Login successfully...!")
                navigate("/dashboard/hod")
            }else if (signin?.role==="Staff"){
                alert("Login successfully...!")
                navigate("/dashboard/staff")
            }else{
                alert("Username or Password is incorrect")
            }
        
    }
   
    
    return (
        <div className="container p-5">
            <div className='row '>
                <div className="col-md-6  mx-auto">
                    <form className='border shadow p-3' onSubmit={handleSubmit}>
                        <div className="text-center">
                            <h2 className='text-primary'>Login</h2>
                        </div>
                        <div className="form-group ">
                            <label htmlFor="username">Username</label>
                            <input onChange={handleChange} value={data.username} type="text" name="username" id="username" className='form-control' required/>
                        </div>
                        <div className="form-group ">
                            <label htmlFor="password">Password</label>
                            <input onChange={handleChange} onBlur={handleBlur} value={data.password} type="password" name="password" id="password" className='form-control'required />
                        </div>
                        <div className="form-group">
                            <button className="btn btn lg btn-primary form-control" type='submit'>Login</button>
                        </div>
                        <div className="form-group text-center">
                            <p>Not Registered Yet? <button className='text-primary border-0 bg-white'  type="button"  onClick={()=>navigate("/register")}>Register</button></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Login