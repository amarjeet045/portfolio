import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "../css/landing.css";


class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        <Grid className="landingPage">
          <Cell col={12}>
            <img
              src="https://image.shutterstock.com/image-vector/man-character-face-avatar-glasses-260nw-562077406.jpg"
              className="image"
            />
            <div className="banner-text">
              
              <h1>Front End Developer</h1>
              <hr />
              <p>Hello</p>
              {/*
              <span style={{margin:'auto'}}>
              <SocialIcon url="https://www.linkedin.com/feed/" style={{ height: 60, width: 60 }} className="social"/> &nbsp; &nbsp; &nbsp;
              <SocialIcon url="https://github.com/"style={{ height: 60, width: 60 }} className="github" /> &nbsp; &nbsp; &nbsp;
              <SocialIcon url="https://mail.google.com/mail/u/1/#inbox" style={{ height: 60, width: 60 }}/> &nbsp; &nbsp; &nbsp;
              <i class="fa fa-gitlab" aria-hidden="true"></i>
           
              </span>*/}
              <div className="social" >
                <a href ="https://gitlab.com/amarjeet045?nav_source=navbar" target="_blank">
                <i class="fa fa-gitlab fa-5x" aria-hidden="true" id = "gitlab"></i>
                </a>
                <a href ="https://www.linkedin.com/in/amarjeet-singh-14776a121/" target="_blank">
                <i class="fa fa-linkedin fa-5x" aria-hidden="true" id = "gitlab"></i>
                </a> 
                <a href ="https://github.com/amarjeet045" target="_blank">
                <i class="fa fa-github fa-5x" aria-hidden="true" id = "gitlab"></i>
                </a>
                <a href ="#" target="_blank">
                <i class="fa fa-envelope fa-5x" aria-hidden="true"></i>
                </a> 
              </div>
    
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Landing;
