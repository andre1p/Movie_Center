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
        <p>Home</p>
      </div>
    )
  }
}