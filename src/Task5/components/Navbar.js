import { AppBar, Button, Toolbar, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import MuiDrawer from './MuiDrawer'

function NavBar() {
  const navigate = useNavigate()
  const theme = useTheme()

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  const handleLogout = () => {
    localStorage.removeItem("signin")
    navigate("/login")
  }
  const signin = JSON.parse(localStorage.getItem("signin"))
  console.log(signin);
  return (
    <>
      <AppBar sx={{ backgroundColor: "lightgray" }}>
        <Toolbar>
          {isMobile ? <MuiDrawer /> :
            <>
              <div style={{ marginLeft: "auto" }}>

                <Button variant="contained" onClick={() => navigate("login")}>Login</Button>
                <Button variant="contained" style={{ marginLeft: "15px" }} onClick={handleLogout}>Logout</Button>
              </div>
            </>
          }


        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar