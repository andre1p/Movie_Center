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
        axios.get("https://api.themoviedb.org/3/movie/5?api_key=a7a70930a3a525de17aae6719fbd0d68&language=en-US")
        .then(response => {
            this.setState({
                film: response.data,
            })
        });
    }

    render() {
       
       
        let { film } = this.state;
        return (
            <div>
                {film.map((original_title) =>
                  <p>{original_title}</p> 
                )}
            </div>
        )
    }
}