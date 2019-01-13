import React, { Component } from 'react'
import './Home.css';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    }
  }
  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=a7a70930a3a525de17aae6719fbd0d68`)
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
          <p className="pagesCount">What's trending</p>
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
        </div>

    )
  }
}