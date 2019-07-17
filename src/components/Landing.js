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
              src="https://scontent.fdel3-1.fna.fbcdn.net/v/t1.0-9/53839982_1841172325989295_712139941710135296_n.jpg?_nc_cat=107&_nc_oc=AQnTSxS2VU82EiRy9lwba7h7M86psEpxFwjHTJjVIA7ugp9ux-bNzJI1jGXILk728nj3DI1pNsc4AqoR5nTMO6ds&_nc_ht=scontent.fdel3-1.fna&oh=60c786c96b8f82633971ef63fa664cab&oe=5DBF475C"
              className="photo img-responsive img-circle " id ="image"
            />
            <div className="banner-text">
              
              <h1>Front End Developer</h1>
              <hr />
              <p style={{color:'white',fontSize:'20px'}}>HTML/CSS | Javascript| Bootstrap|Jquery |React</p>
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
