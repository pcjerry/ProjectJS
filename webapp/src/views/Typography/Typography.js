import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Quote from "components/Typography/Quote.js";
import Muted from "components/Typography/Muted.js";
import Primary from "components/Typography/Primary.js";
import Info from "components/Typography/Info.js";
import Success from "components/Typography/Success.js";
import Warning from "components/Typography/Warning.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const styles = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function TypographyPage() {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>FAQ</h4>
        <p className={classes.cardCategoryWhite}>
          Frequently Asked Questions
        </p>
      </CardHeader>
      <CardBody>

        <div className={classes.typo}>
          <div className={classes.note}>What is car sharing?</div>
          <p>
            Car sharing is a membership based program where, once you join, you can rent a vehicle 24/7. Cars are parked at a dedicated spot in a lot close to where you live and work. Members can rent a vehicle for an hour, a day, or overnight.
          </p>
        </div>

        <div className={classes.typo}>
          <div className={classes.note}>How much does it cost?</div>
          <p>
            You can choose between an monthly or annual membership fee. Rates vary by city, location and time.
          </p>
        </div>

        <div className={classes.typo}>
          <div className={classes.note}>Where are the cars located?</div>
          <p>
            Cars are parked in designated spots on the street or in a lot, close to where you live and work. Locations vary by city.
          </p>
        </div>

        <div className={classes.typo}>
          <div className={classes.note}>What do we benefit from?</div>
          <p>
            Car sharing is the perfect complement for your on-the-go lifestyle. We know you could use a variety of public transportation options such as taking the train, the bus, walking, or biking. But, sometimes you need a car. Vehicles are parked in designated spots for 24/7 access.
          </p>
        </div>

        <div className={classes.typo}>
          <div className={classes.note}>How do I become a member?</div>
          <p>
            It’s easy to get started!
            But first you need to meet the requirements below:

            Valid driver’s license
            Valid major credit card in your name
          </p>
        </div>

      </CardBody>
    </Card>
  );
}

/*
<div className={classes.typo}>
          <div className={classes.note}>Quote</div>
          <Quote
            text="I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
            author=" Kanye West, Musician"
          />
        </div>
 */