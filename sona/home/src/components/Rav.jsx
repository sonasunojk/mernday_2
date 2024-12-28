import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Rav = () => {
    var [name, setname] = useState("")
    const first = () => {
        setname("react")
    }
    const second = () => {
        setname("angular")
    }
    const third = () => {
        setname("vue")
    }
    //useeffect(()=>{},[])
    useEffect(() => {
        second()
    },[])
  return (
    <div>
          <Typography variant='h4'>welcome {name} </Typography>
          <Button variant='contained' color='error' onClick={first}>react</Button>&nbsp;
          <Button variant='contained' color='error' onClick={second}>angular</Button>&nbsp;
          <Button variant='contained' color='error' onClick={third}>vue</Button>&nbsp;
    </div>
  )
}

export default Rav
