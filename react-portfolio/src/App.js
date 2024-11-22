import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Credentials from "./components/Credentials";
import MobileAppDesigns from "./components/MobileAppDesigns";
import DevProjects from "./components/DevProjects";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/credentials" component={Credentials} />
        <Route path="/mobile-app-designs" component={MobileAppDesigns} />
        <Route path="/dev-projects" component={DevProjects} />
        <Route path="*" component={DevProjects} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
