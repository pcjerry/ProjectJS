/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
// core components
import styles from "assets/jss/material-dashboard-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="https://en.wikipedia.org/wiki/Carsharing" className={classes.block}>
                Car Share
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="https://iiw.kuleuven.be/gent/contact" className={classes.block}>
                Contact
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="https://www.sharecar.co.id/en/pages/terms-and-conditions" className={classes.block}>
                Terms and conditions
              </a>
            </ListItem>
          </List>
        </div>

      </div>
    </footer>
  );
}
