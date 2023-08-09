import React from 'react'
import classes from './main.module.css'
import { useNavigate } from 'react-router-dom';

function HodLogin1() {
  const allLeavesData = JSON.parse(localStorage.getItem("allLeavesData"));
  const logPerson = JSON.parse(window.localStorage.getItem('logPerson'));

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/')
  }

  const handleRequests = () => {
    navigate('/hodLogin2')
  }

  return (
    <>
      <div style={{ height: "max-content", width: "90vw", border: "2px solid", display: "flex", justifyContent: "right", alignItems: "center", margin: "0 auto", borderBottom:"none"}}>
      <button onClick={handleLogout} style={{ marginTop:"15px", marginLeft: "auto", padding: "5px", backgroundColor: "rgb(53, 141, 213)", marginRight: "20px", width: "80px", border: "1px solid", borderRadius: "5px"}}>Logout</button>
      </div>
      <div style={{ height: "90vh", width: "90vw", border: "2px solid", display: "flex", justifyContent: "center", alignItems: "center", margin: "0 auto", borderTop:"none"}}>
      
        {allLeavesData ? <button onClick={handleRequests} className={classes.leavebtn}>Proceed to see the leave requests submitted</button>
          : <h4 style={{ color: "red", fontWeight: "600", fontSize: "25px" }}>No leave requests available</h4>
        }
    </div >
    </>
  )
}

export default HodLogin1