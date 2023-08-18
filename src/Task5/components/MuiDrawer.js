import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Button,  Drawer, IconButton, List,  } from '@mui/material'
import { useNavigate } from 'react-router-dom';


function MuiDrawer() {

    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(!open)
    }
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem("signin")
        navigate("/login")
      }
    return (
        <>
            <Drawer open={open} onClose={() => setOpen(false)}>
                <List>
                    <div className='d-flex flex-column'><Button onClick={() => navigate("/")}>Home</Button>
                    <Button  onClick={() => navigate("login")}>Login</Button>
                        <Button onClick={handleLogout}>Logout</Button>
                        </div>
                        
                </List>
            </Drawer>
            <IconButton sx={{ marginLeft: "auto" }}>
                <MenuIcon onClick={handleClick} />
            </IconButton>
        </>
    )
}

export default MuiDrawer