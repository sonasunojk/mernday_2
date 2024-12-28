import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Tab = () => {
  return (
    <div>
          <TableContainer>
              <Table>
              <TableHead>
                  <TableRow>
                      <TableCell>slno</TableCell>
                      <TableCell>name</TableCell>
                      <TableCell>age</TableCell>
                      <TableCell>mark</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                  <TableRow>
                      <TableCell>1</TableCell>
                      <TableCell>sona</TableCell>
                      <TableCell>21</TableCell>
                      <TableCell>50</TableCell>
                  </TableRow>
                  <TableCell>2</TableCell>
                  <TableCell>shaziya</TableCell>
                  <TableCell>21</TableCell>
                  <TableCell>67</TableCell>
                  <TableRow>
                      <TableCell>3</TableCell>
                      <TableCell>pooja</TableCell>
                      <TableCell>21</TableCell>
                      <TableCell>78</TableCell>
                  </TableRow>
                  </TableBody>
              </Table>
      </TableContainer>
    </div>
  )
}

export default Tab
