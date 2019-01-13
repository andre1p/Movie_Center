import React, { Component } from 'react';
import './MovieList.css';

export default class MovieList extends Component {

  constructor() {
    super();
    this.state = {
      movies: [],
      pages: null,
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
        });
      });
  }

  prevPage = () => {
    if (this.state.actual_page > 1) {
      this.setState({
        actual_page: this.state.actual_page - 1
      })
      this.componentDidMount();
    }
  }
  nextPage = () => {
    if (this.state.actual_page < this.state.pages)
      this.setState({
        actual_page: this.state.actual_page + 1
      })
    this.componentDidMount();
  }

  render() {
    this.componentDidMount();
    let { movies } = this.state;
    let imglink = ["https://image.tmdb.org/t/p/original"];
    let movielink = ["http://localhost:3000/minfo"];


    return (
      this.state.loading ?
        <p>Loading..</p> :
        <div>
          <p className="pagesCount">There are {this.state.pages} pages</p>
          <div className="buttons">
            <button onClick={this.prevPage} className="buton_p">Anterior</button>
            Page {this.state.actual_page}
            <button onClick={this.nextPage} className="buton_p">Siguiente</button>
          </div>
          <div className="movieList">
            <div className="lista">
              {movies.map(movie =>
                <div className="films">
                  <a href={movielink + "?movie=" + movie.id} ><img className="images link1" src={imglink + movie.poster_path} alt={`Film image ${movie.id}`} height="330" width="auto" /> </a>
                  <div className="textbox">
                    <a className="link2 links" key={movie.id} href={movielink + "?movie=" + movie.id}>  {movie.original_title} </a>
                    <p className="date">{movie.release_date}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="buttons">
            <button onClick={this.prevPage} className="buton_p">Anterior</button>
            Page {this.state.actual_page}
            <button onClick={this.nextPage} className="buton_p">Siguiente</button>
          </div>
        </div>

    )
  }
}