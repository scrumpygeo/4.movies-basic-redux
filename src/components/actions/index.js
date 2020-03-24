// Action Creator - will return an action
export const selectMovie = movie => {
  return {
    type: 'MOVIE_SELECTED',
    payload: movie
  };
};
