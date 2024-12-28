import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var [name, setname] = useState("sona")
    var [name1,changename] = useState()
    const setval = (a) => {
        console.log(a.target.value)
        setname(a.target.value)
    }
    const newname = () => {  
        changename(name)
    }
  return (
    <div>
          <Typography variant='h4'>welcome {name1}</Typography>
          <TextField variant='outlined' onChange={setval} /><br /><br />
          <Button variant='contained' onClick={newname} >Reset</Button>
    </div>
  )
}

export default StateBasics
