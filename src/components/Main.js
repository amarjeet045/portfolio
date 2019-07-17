import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from './Landing';
import About from './About';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';
class Main extends Component {
  render() {
    return (
     
      
         <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/resume" component={Resume} />
            <Route path="/about" component={About} />
            <Route path="/project" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>
          </Router>
        
      
    );
  }
}
export default Main;
