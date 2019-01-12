import React, { Component } from 'react'
import axios from 'axios';
import './MovieInfo.css';


export default class MovieInfo extends Component {

    constructor() {
        super();
        this.state = {
            film: [],
        }
    }

    dbExtract = () => {
     
    }

    render() {
        let { film } = this.state;
        console.log(film);
        axios.get("https://api.themoviedb.org/3/movie/5?api_key=a7a70930a3a525de17aae6719fbd0d68&language=en-US")
        .then(response => {
            this.setState({
                film: response.data,
            })
        });
        let imglink = ["https://image.tmdb.org/t/p/w500"+film.poster_path];
        //imglink.push(film.poster_path);
        return (
            <div>
            <img src={imglink} alt="Smiley face" height="500" width="auto"></img>
            <h2>{film.original_title}</h2>
            <h3>{film.tagline}</h3>
            <ul>
                <li></li>
            </ul>
            <p>Original Language: {film.original_language}</p>
            <p>{film.overview}</p>
           
            </div>
        )
    }
}