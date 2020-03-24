import React from 'react';
import { connect } from 'react-redux';

const MovieDetail = ({ movie }) => {
  if (!movie) {
    return <div>Please select a movie...</div>;
  }
  return (
    <div className='card text-center'>
      <div className='card-header'>
        <h2>{movie.title}</h2>
      </div>
      <div className='card-body'>
        <p class='card-text'>
          {movie.director}{' '}
          <span className='font-weight-bold'>{movie.year}</span>
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { movie: state.selectedMovie };
};

export default connect(mapStateToProps)(MovieDetail);
