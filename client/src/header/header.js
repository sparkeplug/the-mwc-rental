import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./header.scss";
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.classes = makeStyles(theme => ({
      button: {
        margin: theme.spacing(1)
      },
      input: {
        display: "none"
      }
    }));
  }
  render() {
    return (
      <div className="wrapper">
        <header className="header">
          <div className="header__brand">
            <img src={process.env.PUBLIC_URL + "images/logo.svg"} alt="logo" />
          </div>
          <ul className="header__menu">
            <Button color="primary" className={this.classes.button}>
              For Owner
            </Button>
          </ul>
        </header>
      </div>
    );
  }
}
