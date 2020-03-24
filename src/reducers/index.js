import { combineReducers } from 'redux';

// moviesReducer is  a static list of movies and won't be changed.
const moviesReducer = () => {
  return [
    { title: 'Double Indemnity', director: 'Billy Wilder', year: '1944' },
    { title: 'The Big Sleep', director: 'Howard Hawks', year: '1946' },
    { title: 'Sunset Boulevard', director: 'Bily Wilder', year: '1950' },
    { title: 'The Maltese Falcon', director: 'John Huston', year: '1941' },
    { title: 'In a Lonely Place', director: 'Nicholas Ray', year: '1951' },
    { title: 'The Asphalt Jungle', director: 'John Huston', year: '1950' },
    { title: 'Laura', director: 'Otto Preminger', year: '1944' },
    { title: 'Nightmare Alley', director: 'Edmund Goulding', year: '1947' },
    { title: 'Murder My Sweet', director: 'Edward Dmytryk', year: '1944' }
  ];
};

// default selectedMovie to null for initial case where no movie selected
const selectedMovieReducer = (selectedMovie = null, action) => {
  if (action.type === 'MOVIE_SELECTED') {
    return action.payload;
  }

  // default: return currently selected movie
  return selectedMovie;
};

export default combineReducers({
  movies: moviesReducer,
  selectedMovie: selectedMovieReducer
});
