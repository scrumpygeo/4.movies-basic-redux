import React from 'react';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';
import './App.css';

const App = () => {
  return (
    <div className='row'>
      <div className='col-6'>
        <MovieList />
      </div>
      <div className='col-6'>
        <MovieDetail />
      </div>
    </div>
  );
};

export default App;
