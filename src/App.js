import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieRow from "./MovieRow.js";
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.performSearch("avengers");
  }

  performSearch(searchTerm) {
    console.log("Perform search using movieDB");
    {/*const urlString = Enter api info here + searchTerm*/}
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=8393f0b94899d9c8a48693eb4405d52c&query=" + searchTerm;

    $.ajax({
      url: urlString,

      success: (searchResults) => {
        console.log("Fetched Data Successfully");
        const results = searchResults.results;
        console.log(results[0]);

        const movieRows = [];

        results.forEach((movie) => {
          {/*movie.posterSource = watch video for source*/}

          console.log(movie.title);
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path;
          console.log(movie.poster_src);
          const movieRow = <MovieRow key={movie.id} movie={movie}/>
          movieRows.push(movieRow);
        })

        this.setState({rows: movieRows})
      },

      error: (xhr, status, err) => {
        console.error("Failed to fetch data");
      }
    });
  }

  searchChangeHandler(event) {
    console.log(event.target.value);
    const searchTerm = event.target.value;
    this.performSearch(searchTerm);
  }

  render() {
    return (
      <div className="App">

        <table className='titleBar'>
          <tbody>
            <tr>
              <td>
                <img src="favicon.ico" alt="react logo"/>
              </td>
              <td>
                <h1>MoviesDB Search</h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input onChange={this.searchChangeHandler.bind(this)} placeholder="Enter search term..."/>

        {this.state.rows}
      </div>
    );
  }
}

export default App;
