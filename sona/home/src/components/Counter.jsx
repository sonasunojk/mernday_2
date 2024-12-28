import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var[count,setcount]=useState(0)
    const pos = (a) => {
        setcount(++count)
        console.log(a.target.value)
    }
    const neg = (b) => {
        setcount(--count)
        console.log(b.target.value)
    }
  return (
      <div>
          <Typography varient='h4'>value={count}</Typography><br /><br />
          <Button variant='contained' onClick={pos}>+</Button>&nbsp;
          <Button variant='contained' onClick={neg}>-</Button>
    </div>
  )
}

export default Counter
