import React, { Component } from "react";
import { Card, Button, CardTitle, CardText } from "reactstrap";
import { Grid, Cell } from "react-mdl";
import { List, ListItem } from "react-mdl";
import "../css/contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <Grid className="conatct-grid">
          <Cell col={6}>
            <h2>Amarjeet Singh</h2>
            <img
              src="https://scontent.fdel3-1.fna.fbcdn.net/v/t1.0-9/53839982_1841172325989295_712139941710135296_n.jpg?_nc_cat=107&_nc_oc=AQnTSxS2VU82EiRy9lwba7h7M86psEpxFwjHTJjVIA7ugp9ux-bNzJI1jGXILk728nj3DI1pNsc4AqoR5nTMO6ds&_nc_ht=scontent.fdel3-1.fna&oh=60c786c96b8f82633971ef63fa664cab&oe=5DBF475C"
              className="image"
            />
            <p className="content">
              I am Amarjeet Singh and currently i am pursuing my b.tech from
              JAypee University Of Engineering & Technology and i have good
              knowledge of front end{" "}
            </p>
          </Cell>
          <Cell col={6}>
            <h3>Contact Me</h3>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem
                  style={{
                    fontFamily: "Anton",
                    fontSize: "25px",
                    margin: "auto"
                  }}
                >
                  <i class="fa fa-phone-square" aria-hidden="true" />{" "}
                  &nbsp;+918882352644
                </ListItem>
                <ListItem
                  style={{
                    fontFamily: "Anton",
                    fontSize: "25px",
                    margin: "auto"
                  }}
                >
                  <i class="fa fa-envelope" aria-hidden="true" />{" "}
                  &nbsp;singhamarjeet0045@gmail.com
                </ListItem>
                <ListItem
                  style={{
                    fontFamily: "Anton",
                    fontSize: "25px",
                    margin: "auto"
                  }}
                >
                  <i class="fa fa-skype" aria-hidden="true" />{" "}
                  &nbsp;singhamarjeet0045
                </ListItem>
               
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Contact;
