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
  componentDidMount() {
    fetch(`http://api.themoviedb.org/3/search/movie?query=a&api_key=a7a70930a3a525de17aae6719fbd0d68&page=1`)
      .then(response => response.json())
      .then(json => {
        this.setState({
          movies: json.results,
          loading: false,
        });
      });
  }
  //`http://api.themoviedb.org/3/search/movie?query=${a}&api_key=a7a70930a3a525de17aae6719fbd0d68&page=${page}`
  searchText(event) {
    this.setState({
      filter: event.target.value
    });
  }
  render() {
    //let a = ["a"];
    //let page = 1;
    return (
      this.state.loading ?
        <p>Loading..</p> :
        <div className="movieList">
          <p>MovieList</p>
          <input type="text" onChange={this.searchText} value={this.state.text} />
          
          <div>
            {this.state.movies.map(movie =>
              <li key={movie.id}>{movie.original_title}</li>)}
          </div>

          <div>

          </div>
        </div>
    )
  }
}