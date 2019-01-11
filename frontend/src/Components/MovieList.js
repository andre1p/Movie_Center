import React, { Component } from 'react'
import './MovieList.css';

export default class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      loading: true,
    }
  }

  render() {
    return (
      <div className="movieList">
        <p>MovieList</p>
      </div>
    )
  }
}