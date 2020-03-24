import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectMovie } from '../actions';

export class MovieList extends Component {
  renderList() {
    return this.props.movies.map(movie => {
      return (
        <div className='list-group-item' key={movie.title}>
          <div className='float-sm-right'>
            <div
              className='btn btn-primary'
              onClick={() => this.props.selectMovie(movie)}
            >
              Select
            </div>
          </div>
          <div>{movie.title}</div>
        </div>
      );
    });
  }
  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { movies: state.movies };
};

export default connect(mapStateToProps, {
  selectMovie: selectMovie
})(MovieList);
