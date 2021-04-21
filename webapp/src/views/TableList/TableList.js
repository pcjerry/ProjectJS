import React, {useState} from "react";
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
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
  })

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
                tableHead={["ID", "Car", "Country", "City", "Duration"]}
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
}



