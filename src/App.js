import React, { Component } from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from './components/Main';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import HeaderNavigation from './components/HeaderNavigation';


class App extends Component {
  render() {
    return (
      <>
      <HeaderNavigation />
      </>

    );
  }
}
export default App;
