import React, { Component } from 'react';
import './MovieList.css';

export default class MovieList extends Component {
  
  constructor() {
    super();
    this.state = {
      movies: [],
      pages: null,
      loading: true,
      actual_page: 1,
    }
  }
  componentDidMount() {
    const queryString = require('query-string');
    var parsed = queryString.parse(this.props.location.search);
    let { actual_page } = this.state;
    fetch(`http://api.themoviedb.org/3/search/movie?query=${parsed.text}&api_key=a7a70930a3a525de17aae6719fbd0d68&page=${actual_page}`)
      .then(response => response.json())
      .then(json => {
        this.setState({
          movies: json.results,
          pages: json.total_pages,
          loading: false,
        });
      });
  }
  changePage = (x) => {
    this.setState({
      actual_page: x
    })
    this.componentDidMount();
  }
  prevPage = () => {
    if (this.state.actual_page > 1 ) {
      this.setState({
        actual_page: this.state.actual_page - 1
      })
      this.componentDidMount();
    } else {
      console.log("FUCK YOU");
    }
  }
  nextPage = () => {
    this.setState({
      actual_page: this.state.actual_page + 1
    })
    this.componentDidMount();
  }

  render() {

    let { movies } = this.state;
    let imglink = ["https://image.tmdb.org/t/p/original"];

    this.componentDidMount();
    return (
      this.state.loading ?
        <p>Loading..</p> :
        <div className="movieList">
          <p>MovieList</p>
          <p>There are {this.state.pages} pages</p>

          <div>
            {movies.map(movie =>
            <div>
              <img src={imglink+movie.poster_path} alt="Smiley face" height="auto" width="100"/>
              <li key={movie.id}>{movie.original_title}</li>
              </div>
              )}
          </div>

          <div>
            <button onClick={this.prevPage}>Anterior</button>
            Page {this.state.actual_page}
            <button onClick={this.nextPage}>Siguiente</button>
          </div>
        </div>
    )
  }
}