import React from 'react';
import './css/index.css'

  class MovieRow extends React.Component {
    viewMovie() {
      console.log("Trying to view movie");
      console.log(this.props.movie.title);
      const url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
      window.location.href = url;
    }

    render(){
      return <section className="synopsis" key={this.props.movie.id}>
              <img className="synopsis__poster" src={this.props.movie.poster_src} height="221px" width="185" alt="movie poster"/>
              <div className="synopsis__overview">
                <h3 className="synopsis__overview__title">{this.props.movie.title}</h3>
                <p className="synopsis__overview__summary">{this.props.movie.overview}</p>
                <div className="synopsis__overview__buttons">
                  <input className="btn__view" type="button" onClick={this.viewMovie.bind(this)} value="View" />
                  <input className="btn__view" type="button" onClick={this.viewMovie.bind(this)} value="Site" />
                  <input className="btn__view" type="button" onClick={this.viewMovie.bind(this)} value="View" />
                </div>
              </div>
            </section>
    }
  }

export default MovieRow;
