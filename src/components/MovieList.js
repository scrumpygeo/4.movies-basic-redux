import React, { Component } from 'react';
import { connect } from 'react-redux';

export class MovieList extends Component {
  renderList() {
    return this.props.movies.map(movie => {
      return (
        <div className='list-group-item' key={movie.title}>
          <div className='float-md-right'>
            <div className='btn btn-primary'>Select</div>
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

export default connect(mapStateToProps)(MovieList);
