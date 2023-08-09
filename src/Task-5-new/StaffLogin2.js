import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import classes from './main.module.css';
import { useNavigate } from 'react-router-dom';

function StaffLogin2() {

    const regPersons = JSON.parse(window.localStorage.getItem('registeredDataFinal'));
    const logPerson = JSON.parse(window.localStorage.getItem('logPerson'));
    const staffleave = JSON.parse(localStorage.getItem(logPerson.id));
    const leaveObj = JSON.parse(localStorage.getItem("leaveObj"));
    const allLeavesData = JSON.parse(localStorage.getItem("allLeavesData"));
    const settledLeavesFinal = localStorage.getItem('settledLeaves');

    const navigate = useNavigate()
    console.log(staffleave);

    const handleBack = () => {
        navigate('/staffLogin1')
    }

    const handleLogout = () => {
        navigate('/')
    }

    return (
        <>
            <div style={{ width: "100%", height: "60px", display: "flex", alignItems: "center",border: "1px solid",margin: "1% auto 0" }}>
                <button onClick={handleBack} style={{ padding: "5px", backgroundColor: "rgb(53, 141, 213)", marginLeft: "20px", width: "80px", border: "1px solid", borderRadius: "5px" }}>Back</button>
                <button onClick={handleLogout} style={{ marginLeft: "auto", padding: "5px", backgroundColor: "rgb(53, 141, 213)", marginRight: "20px", width: "80px", border: "1px solid", borderRadius: "5px" }}>Logout</button>
            </div>
            <div>
            <Typography sx={{ fontSize: "25px", marginTop: "20px" }}>
                        No of leaves submitted: {staffleave.length}
                    </Typography>
                    <Typography sx={{ fontSize: "25px", marginTop: "20px" }}>
                        Approved: {}
                    </Typography>
                    <Typography sx={{ fontSize: "25px", marginTop: "20px" }}>
                        Rejected: {}
                    </Typography>
                    <Typography sx={{ fontSize: "25px", marginTop: "20px" }}>
                        Pending: {}
                    </Typography>
            </div>
            <div style={{ height: "max-content", border: "1px solid", display: "flex", flexWrap:"wrap", margin: "1% auto 0" }}>
            {staffleave.map((staff) => {
                return <Card className={classes.box} sx={{ maxWidth: "350px", border: "2px solid", padding: "5px", margin: "20px" }}>
                <CardContent>
                    <Typography variant="h5" component="div" sx={{ fontSize: "16px" }}>
                        Leave from {staff.startDate} to {staff.endDate}
                    </Typography>
                    <Typography variant="h5" component="div" sx={{ fontSize: "16px" }}>
                        Number of Days : {((new Date(staff.endDate)).getTime() - (new Date(staff.startDate)).getTime()) /
                            (1000 * 60 * 60 * 24) + 1}
                    </Typography>
                    <Typography sx={{ fontSize: "20px", marginTop: "20px" }}>
                        Reason: {staff.reason}
                    </Typography>
                    <Typography variant="h5" component="div" sx={{ fontSize: "16px" }}>
                        Status: Pending
                    </Typography>
                </CardContent>
            </Card>
            })
            }
            </div>
        </>
    )
}

export default StaffLogin2