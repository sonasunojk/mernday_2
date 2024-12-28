import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
          <Typography variant='h2'>signup page</Typography><br /><br />
          <TextField label='username' variant='outlined'></TextField><br /><br />
          <TextField label='password' variant='outlined'></TextField><br /><br />
          <Button varient='contained'>submit</Button>
    </div>
  )
}

export default Signup
