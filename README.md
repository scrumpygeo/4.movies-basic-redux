# **Simple App Linking Redux with React**

**Introduction**

    This is a simple app where you have a list of movies on the left, with select buttons and whichever movie you select is listed on the right in greater detail. The movie list is an array of objects which, instead of being in React state will be moved into Redux store.

    With Redux you don't use app level state so much, so App.js doesn't have to be a class-based component: function-based is ok.

    NB: npm install --save redux and react-redux

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

At this point, Redux action creators and reducers are finished. Rest of the development is React-Redux.

4. Now add some config in src/index.js file so we have Provider tag wrapping our App, as well as passing a reference to our redux store.

   - do appropriate imports:

     - import { Provider } from 'react-redux';
     - import { createStore } from 'redux';
     - import { reducers } from './reducers';

   - then wrap App tag in `<Provider > </Provider>` tags
   - pass Provider a reference to the result of passing reducers to createStore function, ie `<Provider store={createStor(reducers)} >`

5. Create MovieList component and hook it up to the App

   To get our list of movies into MovieList, create an instance of 'connect' component and pass it some config that gets it to reach back up to the Provider and get it to return list of movies.

   ie, connect is a react component that we pass config to: we tell it we want to get a list of movies out of our Redux store from the Provider.

   Any time data in the store changes, it tells the Provider which notifies the connect function which then passes the data to the MovieList component.

   Connect component is going to be written inside the MovieList.js file because only it needs to create the connect function to reach up to Provider.

   **Configuring connect**

   To configure connect component to tell it we want specific data from redux store: define a function called mapStateToProps(). It takes in our state object (in Redux store) and make it appear as props inside our component. The state passed into this function contains both the movies list and the selectedMovie. T

   he MovieList only cares about the list of movies, not the selected movie, mapStateToProps returns an object that only returns the list: `return { movies: state.movies };` with movies being the key.

   So now, this.props is going to contain this object with key & value pair: `movies: state.movies`

   mapStateToProps is passed as a 1st argument to the connect() function at the end.


    <b>Above is how we use the React-Redux library to get data from the Redux store into a component.</b>  Import connect, call connec,  pass in our component (here MoviesList) as the 2nd function call;  define mapStateToProps, which always has 1st arg of state and return an object that will show up as props inside our component.

6. Now, inside MovieList, map over our data and retunr jsx.
