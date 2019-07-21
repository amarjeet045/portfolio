import React, { Component } from 'react'
import{Grid,Cell} from 'react-mdl';

 class Experience extends Component {
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
            {this.props.compName}
          </h4>
          <p style={{ margin: "0px" }}> {this.props.desc}</p>
          <p style={{ margin: "0px" }}>{this.props.job}</p>

          
        </Cell>
      </Grid>
        )
    }
}
export default Experience;