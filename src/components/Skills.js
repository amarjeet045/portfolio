import React, { Component } from 'react'
import {Grid,Cell} from 'react-mdl';
import {ProgressBar} from 'react-mdl';


class Skills extends Component {
    render() {
        return (
            <Grid>
                <Cell col={12}>
                    <div style ={{display:'flex'}}>{this.props.skill}
                    <ProgressBar style ={{width:'75%',margin:'auto'}}  progress={this.props.progress}/>
                     
                    </div>
                    
                </Cell>
            </Grid>
        )
    }
}
export default Skills;