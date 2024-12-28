import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
          <AppBar>
              <Toolbar>
                  <Typography variant='h6'>Home</Typography>&nbsp;
                  <Link to='/login'>
                  <Button variant='contained' color='success' >Login</Button>&nbsp;
                  </Link>

                  <Link to='/signup'>
                      <Button variant='contained' color='success'>signup</Button>&nbsp;
                  </Link>
                  
                  <Link to='/tab'>
            <Button variant='contained' color='success'>Lists</Button>&nbsp;
                 </Link>
          <Link to='/state'>
            <Button variant='contained' color='success'>state</Button>&nbsp;
          </Link>
          <Link to='/count'>
            <Button variant='contained' color='success'>count</Button>&nbsp;
          </Link>
          <Link to='/rav'>
            <Button variant='contained' color='success'>Rav</Button>&nbsp;
          </Link>
          <Link to='/api'>
            <Button variant='contained' color='success'>API</Button>&nbsp;
          </Link>
          <Link to='/product'>
            <Button variant='contained' color='success'>PRODUCT</Button>&nbsp;
          </Link>
              </Toolbar>
          </AppBar>
          <br /><br /><br />

    </div>
  )
}

export default NavBar
