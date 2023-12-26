import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';
import RectangleCorveBorder from "../../../assets/images/RectangleCorveBorder.png"
import Styles from "./Index.module.css";

function createData( name, waterlevel, nextmaintanace,  status, lastUpdate) {
  return {  name, waterlevel, nextmaintanace, status, lastUpdate };
}
const rows = [
  createData( "My tank #1", "0.5/5M", "09 Dec 2019","Weak", "0 5:18AM"),
  createData( "My tank #1", "0.5/5M", "09 Dec 2019","Connected", "05:18AM"),
  createData( "My tank #1", "0.5/5M", "09 Dec 2019","Disconnected", "05:18AM"),
];
export default function DataTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell align="start"></TableCell>
            <TableCell align="start" className={Styles.dataTableHEaderText}>NAME</TableCell>
            <TableCell align="start">WATER LEVEL</TableCell>
            <TableCell align="start">NEXT MAINTENANCE</TableCell>
            <TableCell align="start">STATUS</TableCell>
            <TableCell align="start">LAST UPDATED</TableCell>
            <TableCell align="start"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow>
              <TableCell align="start" ><img src={RectangleCorveBorder} alt=""/></TableCell>
              <TableCell align="start">{row.name}</TableCell>
              <TableCell align="start">{row.waterlevel}</TableCell>
              <TableCell align="start">{row.nextmaintanace}</TableCell>
              <TableCell align="start">
                            <div
                                style={{
                                color: row.status === 'Weak' ? '#E46A11' : row.status === 'Connected' ? '#0D894F' : '#545F71', 
                                backgroundColor: row.status === 'Weak' ? '#FDF1E8' : row.status === 'Connected' ? '#E7F4EE' : '#EEF1F4',
                                width : row.status === 'Weak' ? '40px' : row.status === 'Connected' ? '80px' : '99px',
                                borderRadius: '100px',
                                padding: '4px 12px',   
                                }}
                            ><div>{row.status}</div></div>
              </TableCell>
              <TableCell align="start">{row.lastUpdate}</TableCell>
              <TableCell align="start"><MoreVertSharpIcon/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
