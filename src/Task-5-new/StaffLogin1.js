import React, { useEffect, useState } from 'react'
import classes from "./main.module.css"
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { v4 as uuidv4 } from 'uuid';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function StaffLogin1() {

  const regPersons = JSON.parse(window.localStorage.getItem('registeredDataFinal'));
  const logPerson = JSON.parse(window.localStorage.getItem('logPerson'));
  const staffleave = JSON.parse(window.localStorage.getItem(logPerson.id));
  const leaveObj = JSON.parse(window.localStorage.getItem("leaveObj"));
  const settledLeaves = JSON.parse(window.localStorage.getItem("settledLeaves"));

  
  console.log(staffleave);
  console.log(leaveObj);
  const navigate = useNavigate();

  const [staff, setStaff] = useState({
    name1: logPerson.firstName + " " + logPerson.lastName,
    department: (logPerson.department),
    startDate: "",
    endDate: "",
    reason: "",
    key: uuidv4(),
    status: ''
  })

  const [data, setData] = useState([])
  const [allLeavesData, setAllLeavesData] = useState([]);

  // const [name1, setName1] = useState('');
  // const [startDate, setStartDate] = useState('');
  // const [endDate, setEndDate] = useState('');
  // const [reason, setReason] = useState('');

  const handleChange = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.id);
    setStaff((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
  }

  useEffect(() => {
    const submittedLeaveData = localStorage.getItem(logPerson.id);
    console.log(submittedLeaveData);
    if (submittedLeaveData) {
      setData(JSON.parse(submittedLeaveData));
    }
  }, [])

  useEffect(() => {
    const submittedAllLeaveData = localStorage.getItem("allLeavesData");
    console.log(submittedAllLeaveData);
    if (submittedAllLeaveData) {
      setAllLeavesData(JSON.parse(submittedAllLeaveData));
    }
  }, [])

  const handleLeave = (e) => {
    e.preventDefault();
    alert(`Submitted leave successfully`);
    const leaveData = [...data, staff];
    setData(leaveData);
    const newAllLeavesData = [...allLeavesData, staff];
    setAllLeavesData(newAllLeavesData);
    localStorage.setItem(logPerson.id, JSON.stringify(leaveData));
    localStorage.setItem("allLeavesData", JSON.stringify(newAllLeavesData));
    navigate('/staffLogin2');
  };

  const handleLogout = () => {
    navigate('/')
  }

  const handleView = () => {
    navigate('/staffLogin2');
  }

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>

      <div style={{ height: "90%", width: "90vw", border: "2px solid", display: "flex", justifyContent: "center", alignItems: "center", margin: "2% auto 0", flexDirection: "column" }}>
        {/* <div style={{ width: "92%", height: "50px", display: "flex", alignItems: "center", border: "1px solid", margin: "1% auto" }}> */}
        {/* <button onClick={handleBack} style={{ padding: "5px", backgroundColor: "rgb(53, 141, 213)", marginLeft: "20px", width: "80px", border: "1px solid", borderRadius: "5px" }}>Back</button> */}
        <button onClick={handleLogout} style={{ marginTop: "15px", marginLeft: "auto", padding: "5px", backgroundColor: "rgb(53, 141, 213)", marginRight: "20px", width: "80px", border: "2px solid", borderRadius: "5px", boxShadow: "2px 2px 4px black" }}>Logout</button>
        {/* </div> */}
        {data && staffleave ? <div style={{ height: "100%", width: "100%", padding: "10px" }}>
          <h4 style={{ color: "red", fontWeight: "600", fontSize: "25px" }}>Number of leaves applied: {staffleave.length}</h4>
          <h4 style={{ color: "red", fontWeight: "600", fontSize: "25px" }}>Leave Details : </h4>
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
                <Typography sx={{ fontSize: "25px", marginTop: "20px" }}>
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
          : <h4 style={{ color: "red", fontWeight: "600", fontSize: "25px" }}>Not applied any leave yet</h4>
        }
        <button onClick={handleOpen} className={classes.btnl}>Apply leave</button>
        <button onClick={handleView} className={classes.btnl}>View submitted leaves</button>
      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <form className={classes.modal}>
              <h2>Leave Details</h2>
              <div className={classes.name1}>
                <label htmlFor="name1">Name:</label>
                <input
                  type="text"
                  id="name1"
                  value={staff.name1}
                  // onChange={(e) => setName1(e.target.value)}
                  onChange={handleChange}

                />
              </div>
              <div className={classes.department}>
                <label htmlFor="department">Department:</label>
                <input
                  type="text"
                  id="department"
                  value={staff.department}
                  // onChange={(e) => setName1(e.target.value)}
                  onChange={handleChange}
                  style={{ padding: "5px" }}
                />
              </div>
              <div className={classes.date}>
                <div className={classes.fromDate}>
                  <label htmlFor="startDate">From</label>
                  <input
                    type="date"
                    id="startDate"
                    value={staff.startDate}
                    onChange={handleChange}

                  />
                </div>
                <div className={classes.toDate}>
                  <label htmlFor="endDate">To</label>
                  <input
                    type="date"
                    id="endDate"
                    value={staff.endDate}
                    onChange={handleChange}

                  />
                </div>
              </div>
              <div className={classes.reason}>
                <label htmlFor="reason">Reason:</label>
                <textarea
                  id="reason"
                  value={staff.reason}
                  onChange={handleChange}

                />
              </div>
              <button className={classes.btnl2} type="submit" onClick={handleLeave}>Submit</button>
            </form>
          </Box>
        </Modal>
      </div>
    </>
  )
}

export default StaffLogin1;