import React, { Component } from 'react'
import {Tabs,Tab } from 'react-mdl';
//import '../css/landing.css';

class Projects extends Component {
    constructor(props){
        super(props);
        this.state={
            activeTab:0
        };
    }
    render() {
        return (
            <div className="Project">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>HTML/CSS</Tab>
                    <Tab>HTML/CSS/JS</Tab>
                    <Tab>React</Tab>
                </Tabs>

            </div>
        )
    }
}

export default Projects;