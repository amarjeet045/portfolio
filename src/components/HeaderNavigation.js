import React, { Component } from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from './Main';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import '../css/header.css';

class HeaderNavigation extends Component {
  render() {
    return (
        <Router>
        <div className="demo-big-content">
       
        <Layout>
          <Header  className ="header" title="" scroll>
            <Navigation>
              <a href  ="/resume">Resume</a>
              <a href ="/about">About Me</a>
              <a href ="/project">Projects</a>
              <a href ="/contact">Contact Me</a>
            </Navigation>
          </Header>
          <Drawer title="">
            <Navigation>
              <a href ="/resume">Resume</a>
              <a href ="/about">About Me</a>
              <a href ="/project">Projects</a>
              <a href ="/contact">Contact Me</a>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
       
      </div>
      </Router>
    );
  }
}
export default HeaderNavigation;