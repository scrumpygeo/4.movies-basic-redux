# **Simple App Linking Redux with React**

**Introduction**

    This is a simple app where you have a list of movies on the left, with select buttons and whichever movie you select is listed on the right in greater detail. The movie list is an array of objects which, instead of being in React state will be moved into Redux store.

    With Redux you don't use app level state so much, so App.js doesn't have to be a class-based component: function-based is ok.

**Project Structure**

    - put components, actions and reducers in their own folders within /src.
    - index.js sets up both react and redux sides of the app.
    - actions and reducers files are called index.js so they can be referred to elsewhere by the folder only - webpack allows this.
    - reducers:
        - a moviesReducer function to hold list of movies - acting as database in this eg;
        - also have a selectedMovieReducer function to hold our selected movie
    - action creator:
        - a function called selectMovie. Only 1 for this simple eg.

1. create action creator 'selectMovie', which returns a payload.
2. create the reducers - only 2 needed: moviesReducer and selectedMovieReducer.
3. in reducers file, connect the Provider:
   - use combineReducers function to comine reducers into an object:
     keys used are keys that show up inside state object. So below, movies and selectedMovie are keys to the state object we use in the app. Any file in the project can now get access to out combined set of reducers:

```
        export default combineReducers({
        movies: moviesReducer,
        selectedMovie: selectedMovieReducer
        });

```
