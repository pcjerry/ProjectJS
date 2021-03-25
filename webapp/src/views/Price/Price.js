/*eslint-disable*/
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import AddAlert from "@material-ui/icons/AddAlert";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Snackbar from "components/Snackbar/Snackbar.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";


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

export default function Price() {
    const classes = useStyles();

    return (
        <Card>
            <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Price </h4>
            </CardHeader>
            <CardBody>



            </CardBody>
        </Card>
    );
}


/*
<GridContainer>
        <GridItem xs={12} sm={12} md={6}>
            <h5>Pricing Subscription</h5>
            <br />
            <SnackbarContent message={"This is a plain notification"} />
            <SnackbarContent
                message={"This is a notification with close button."}
                close
            />
            <SnackbarContent
                message={"This is a notification with close button and icon."}
                close
                icon={AddAlert}
            />
            <SnackbarContent
                message={
                    "This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style."
                }
                close
                icon={AddAlert}
            />
        </GridItem>
    </GridContainer>
 */