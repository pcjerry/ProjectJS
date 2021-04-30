import React, {useEffect, useState} from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import firebase from "firebase/app";
import "firebase/auth";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  const [data, setData] = useState([]);

  function apiGet() {

    firebase.auth().currentUser.getIdToken(true).then(function (idToken) {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + idToken);

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch("http://localhost:8080/private/history", requestOptions)
          .then(response => response.json())
          .then((json) => {
            console.log(json);
            setData(json);
          });
    });
  }

  useEffect(() =>{
    apiGet();
  }, []);


  return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Departure Lat</TableCell>
              <TableCell align="right">Departure Long</TableCell>
              <TableCell align="right">Arrival Lat</TableCell>
              <TableCell align="right">Arrival Long</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
                <StyledTableRow key={item.id}>
                  <StyledTableCell component="th" scope="row">
                    {item.id}
                  </StyledTableCell>
                  <StyledTableCell align="right">{item.start_latitude}</StyledTableCell>
                  <StyledTableCell align="right">{item.start_longitude}</StyledTableCell>
                  <StyledTableCell align="right">{item.end_latitude}</StyledTableCell>
                  <StyledTableCell align="right">{item.end_longitude}</StyledTableCell>
                </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
}