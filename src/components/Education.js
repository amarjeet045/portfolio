import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "../css/education.css";
class Education extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p>
            {this.props.startYear}-{this.props.endYear}
          </p>
        </Cell>
        <Cell col={8}>
          <h4 style={{ margin: "0px", padding: "0px" }}>
            {this.props.clgName}
          </h4>
          <p>{this.props.clgDesc}</p>

          <p style={{ margin: "0px" }}> {this.props.cgpa}</p>

          <p style={{ margin: "0px" }}>{this.props.per}</p>
        </Cell>
      </Grid>
    );
  }
}

export default Education;
