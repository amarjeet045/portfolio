import React, { Component } from 'react'
import{Grid,Cell} from 'react-mdl';
import '../css/resume.css';

class Resume extends Component {
    render() {
        return (
            <div className="resume">
                <Grid>
                    <Cell col={4}>
                        Left Side 
                    </Cell>
                    <Cell col={8}>
                        right Side
                    </Cell>
                </Grid>
               
            </div>
        )
    }
}
export default Resume;