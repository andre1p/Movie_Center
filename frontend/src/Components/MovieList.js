import React, { Component } from 'react';
import './MovieList.css';

const genButonPages = (size) => {
  let result = [];
  for (let i = 1; i <= size; i++) {
    result.push(i);
  }
  return result;
}

export default class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      pages: null,
      pagesB: genButonPages(3),
      loading: true,
      actual_page: 1,
    }
  }
  componentDidMount() {
    let { actual_page } = this.state;
    fetch(`http://api.themoviedb.org/3/search/movie?query=a&api_key=a7a70930a3a525de17aae6719fbd0d68&page=${actual_page}`)
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
  //`http://api.themoviedb.org/3/search/movie?query=${a}&api_key=a7a70930a3a525de17aae6719fbd0d68&page=${page}`


  render() {
    //let a = ["a"];
    //let page = 1;
    let { movies } = this.state;

    this.componentDidMount();
    return (
      this.state.loading ?
        <p>Loading..</p> :
        <div className="movieList">
          <p>MovieList</p>
          <p>There are {this.state.pages} pages</p>
          <input type="text" onChange={this.searchText} value={this.state.text} />

          <div>
            {movies.map(movie =>
              <li key={movie.id}>{movie.original_title}</li>)}
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