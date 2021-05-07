import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import './App.css';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Credentials from './components/Credentials';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/credentials" component={Credentials} />
        <Route path="*" component={Portfolio} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
