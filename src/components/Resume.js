import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
import "../css/resume.css";

class Resume extends Component {
  render() {
    return (
      <div className="resume">
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://scontent.fdel3-1.fna.fbcdn.net/v/t1.0-9/53839982_1841172325989295_712139941710135296_n.jpg?_nc_cat=107&_nc_oc=AQnTSxS2VU82EiRy9lwba7h7M86psEpxFwjHTJjVIA7ugp9ux-bNzJI1jGXILk728nj3DI1pNsc4AqoR5nTMO6ds&_nc_ht=scontent.fdel3-1.fna&oh=60c786c96b8f82633971ef63fa664cab&oe=5DBF475C"
                id="image"
              />
              <h3 style={{ paddingTop: "1rem" }}>Amarjeet Singh</h3>
              <h3 style={{ color: "gray" }}>Front End Developer</h3>
              <hr style={{ border: "2px dashed #832fff", width: "100%" }} />
              <p>
                I am Amarjeet Singh and currently i am pursuing my b.tech from
                JAypee University Of Engineering & Technology and i have good
                knowledge of front end development.
              </p>
              
            </div>
          </Cell>
          <Cell col={8}>
            <Education />
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Resume;
