import React, { Component } from 'react'
import './Home.css';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      loading: true,
    }
  }
  render() {
    return (
      <div className="home">
        <h2>Search a movie</h2>
      </div>
    )
  }
}