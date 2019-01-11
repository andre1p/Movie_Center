import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import MovieList from './Components/MovieList';
import MovieInfo from './Components/MovieInfo';
import Home from './Components/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Header />
        <div className="contenedor">
          <Route path="/" exact
            component={Home} />
          <Route path="/mlist" exact
            component={MovieList} />
          <Route path="/minfo"
            component={MovieInfo} />
        </div>
        </div>
      </Router>

    );
  }
}

export default App;
