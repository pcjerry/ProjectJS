/*import React, {useEffect, useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import firebase from "firebase/app";
import "firebase/auth";
import axios from 'axios';

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};
const useStyles = makeStyles(styles);


export default function TableList() {
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
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>

            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>History</h4>
              <p className={classes.cardCategoryWhite}>
                History of past activities
              </p>
            </CardHeader>

            <CardBody>
              <Table
                  tableHeaderColor="primary"
                  tableHead={["ID", "Email", "Latitude", "Longitude", "Duration"]}
                  tableData={[
                    ["1", "Toyota", "Belgium", "Gent", "1hours"],
                    ["2", "Volvo", "Belgium", "Aalst", "3hours"],
                    ["3", "Mercedes", "Belgium", "Brussels", "5hours"],
                    ["4", "Tesla", "Belgium", "Brugge", "30mins"]
                  ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
  );
}*/





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
import axios from 'axios';

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