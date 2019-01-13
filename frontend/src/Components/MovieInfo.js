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

    getMovie() {

    }

    render() {

        const queryString = require('query-string');
        var parsed = queryString.parse(this.props.location.search);

        let { film } = this.state;

        axios.get(`https://api.themoviedb.org/3/movie/${parsed.movie}?api_key=a7a70930a3a525de17aae6719fbd0d68&language=en-US`)
            .then(response => {
                this.setState({
                    film: response.data,

                })
            });
        let imglink = ["https://image.tmdb.org/t/p/w500" + film.poster_path];

        return (
            <div className="container">
                <div className="image_detail">
                    <img src={imglink} className="src_image_detail" alt="Smiley face" height="500" width="auto" />
                </div>
                <div className="info_detail">
                    <h2>{film.original_title}</h2>
                    <h3>{film.tagline}</h3>
                    <p>Original language: {film.original_language}</p>
                    <p>Release date: {film.release_date}</p>
                    <p>{film.overview}</p>
                </div>
            </div>
        )
    }
}