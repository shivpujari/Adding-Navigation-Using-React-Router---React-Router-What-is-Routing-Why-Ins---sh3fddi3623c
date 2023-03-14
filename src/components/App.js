import React, {Component, useState} from "react";
import '../styles/App.css';
import { Link, Route, Switch, useLocation } from "react-router-dom";
import LocationDisplayjs from "./LocationDisplay";

function About() {
  return <div>This is about page.</div>;
}

function Home() {
  return <div>This is Home page.</div>;
}

function Invalid() {
  return <div>No matches Found</div>;
}
class App extends Component {
    render() {

        return(
            <div id="main">
               
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
 <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/" component={Invalid} />
        </Switch>
        <LocationDisplayjs/>

            </div>
        )
    }
}


export default App;
export const LocationDisplay = LocationDisplayjs;
