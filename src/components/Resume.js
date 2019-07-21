import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import "../css/resume.css";

class Resume extends Component {
  render() {
    return (
      <div className="resume">
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                style={{ marginTop: "-10px" }}
                src="https://scontent.fdel3-1.fna.fbcdn.net/v/t1.0-9/53839982_1841172325989295_712139941710135296_n.jpg?_nc_cat=107&_nc_oc=AQnTSxS2VU82EiRy9lwba7h7M86psEpxFwjHTJjVIA7ugp9ux-bNzJI1jGXILk728nj3DI1pNsc4AqoR5nTMO6ds&_nc_ht=scontent.fdel3-1.fna&oh=60c786c96b8f82633971ef63fa664cab&oe=5DBF475C"
                id="image"
                alt="amarjeet Singh"
              />
              <h3 style={{ paddingTop: "1rem", marginTop: "-10px" }}>
                Amarjeet Singh
              </h3>
              <h3 style={{ color: "gray", marginTop: "-10px" }}>
                (Front End Developer)
              </h3>
              <hr style={{ border: "2px dashed #832fff", width: "100%" }} />
              <p>
                A results-driven, customer-focused, articulate and analytical
                professional who can think “out of the box”.
              </p>
              <hr style={{ border: "2px dashed #832fff", width: "100%" }} />
              <p style={{ float: "left" }}>Mobile Number</p>
              <p>8882352644</p>
              <p style={{ float: "left" }}>Email</p>
              <p>singhamarjeet0045@gmail.com</p>
              <hr style={{ border: "2px dashed #832fff", width: "100%" }} />
            </div>
          </Cell>
          <Cell className="right-resume" style= {{background:'black',color:'white',margin:'0px',padding:'0px'}} col={8}>
            <h4>Education</h4>
            <Education
              startYear={2016}
              endYear={2020}
              clgName="Jaypee University Of Engineering & Technology"
              clgDesc="Jaypee University of Engineering and Technology, formerly Jaypee Institute of Engineering and Technology, is a private engineering University located at Raghogarh, Guna, Madhya Pradesh, India."
              cgpa=" CGPA : 7.7"
            />

            <Education
              startYear={2013}
              endYear={2015}
              clgName="Rawal Convent School"
              clgDesc="Rawal Convent School located at  Ballabgarh Faridabad and one of the best schools in Faridabad."
              per=" Percentage :83%"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h4>Experience</h4>
            <Experience
              startYear="April 2019"
              endYear="present"
              compName="Blump Tech Pvt. Ltd."
              desc="Front End Developer"
              job="Internship"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h4>Skills</h4>
            <Skills skill="HTML/CSS" progress="80" />
            <Skills skill="Javascript" progress="70" />
            <Skills skill="Bootstrap" progress="80" />
            <Skills skill="Jquery" progress="70" />
            <Skills skill="React" progress="50" />
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Resume;
