import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import MovieList from './Components/MovieList';
import MovieInfo from './Components/MovieInfo';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Route path="/" exact
          component={MovieList} />
        <Route path="/minfo"
          component={MovieInfo} />
      </Router>

    );
  }
}

export default App;
