import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

function HodLogin2() {

    const navigate = useNavigate();
    const [flag, setFlag] = useState('Pending');

    const staffleave = JSON.parse(localStorage.getItem('staffleave'));
    const allLeavesData = JSON.parse(localStorage.getItem("allLeavesData"));
    const logPerson = JSON.parse(window.localStorage.getItem('logPerson'));


    const handleApprove = (key) => {
        const leaveObj =allLeavesData && allLeavesData.find((leave) => key === leave.key);
        leaveObj.status = 'Approved'
        localStorage.setItem('leaveObj', JSON.stringify(leaveObj));
        setFlag('Approved')
    }

    const handleReject = (key) => {
        const leaveObj =allLeavesData && allLeavesData.find((leave) => key === leave.key);
        leaveObj.status = 'Rejected'
        localStorage.setItem('leaveObj', JSON.stringify(leaveObj));
        setFlag('Rejected')
    }



    const leaveObj = JSON.parse(localStorage.getItem("leaveObj"));
    console.log(leaveObj);

    const handleBack = () => {
        navigate('/hodLogin1')
    }

    const handleLogout = () => {
        navigate('/')
    }

    return (
        <>
            <div style={{ width: "90vw", height: "60px", display: "flex", alignItems: "center", border: "2px solid", margin: "1% auto 0", borderBottom: "none" }}>
                <button onClick={handleBack} style={{ padding: "5px", backgroundColor: "rgb(53, 141, 213)", marginLeft: "20px", width: "80px", border: "1px solid", borderRadius: "5px" }}>Back</button>
                <button onClick={handleLogout} style={{ marginLeft: "auto", padding: "5px", backgroundColor: "rgb(53, 141, 213)", marginRight: "20px", width: "80px", border: "1px solid", borderRadius: "5px" }}>Logout</button>
            </div>
            <div style={{ height: "max-content", width: "90vw", border: "2px solid", display: "flex", flexDirection: "row", flexWrap: "wrap", margin: "0 auto", borderTop: "none" }}>
                {(allLeavesData.filter((leaves) => leaves.department == logPerson.department)).map((staff) => {
                    return <Card sx={{ border: "2px solid", padding: "5px", margin: "20px", display: "inline-block", height: "max-content", width: "max-content" }}>
                        <CardContent>
                            <Typography sx={{ fontSize: "20px" }}>
                                {staff.name1}
                            </Typography>
                            <Typography sx={{ fontSize: "20px" }}>
                                {staff.department}
                            </Typography>
                            <Typography variant="h5" component="div" sx={{ fontSize: "15px" }}>
                                Leave from {staff.startDate} to {staff.endDate}
                            </Typography>
                            <Typography variant="h5" component="div" sx={{ fontSize: "15px" }}>
                                Number of Days : {((new Date(staff.endDate)).getTime() - (new Date(staff.startDate)).getTime()) /
                                    (1000 * 60 * 60 * 24) + 1}
                            </Typography>
                            <Typography sx={{ fontSize: "15px", marginTop: "10px", fontWeight: "600" }}>
                                Reason:
                            </Typography>
                            <Typography variant="h5" component="div" sx={{ fontSize: "15px" }}>
                                {staff.reason}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant='contained' color='success' size="large" onClick={() => handleApprove(staff.key)}>Approve</Button>
                            <Button variant='contained' color='error' size="large" onClick={() => handleReject(staff.key)}>Reject</Button>
                        </CardActions>
                       

                        Status: {flag}

                    </Card>
                })
                }
            </div>
        </>
    )
}

export default HodLogin2;