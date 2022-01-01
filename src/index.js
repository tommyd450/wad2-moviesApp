import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import ShowPage from "./pages/tvDetailsPage"
import MovieReviewPage from "./pages/movieReviewPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage"; // NEW
import SiteHeader from './components/siteHeader';
import UpcomingMoviesPage from "./pages/upComingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import TvShowsPage from './pages/tvSection.js';
import PeoplePage from "./pages/personDetailsPage";
import TrendingPage from "./pages/trendingMoviePage";
import AuthHeader from "./authentication/authHeader";
import AuthProvider from "./authentication/authContext";
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signupPage";
import PrivateRoute from "./components/privateRoute";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      
        
        <SiteHeader />
        <AuthProvider>
        <MoviesContextProvider>
          <AuthHeader/>
          
            
            
          <Switch>
            <PrivateRoute exact path="/reviews/form" component={AddMovieReviewPage} />
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/signup" component={SignUpPage} />
            <PrivateRoute exact path="/movies/upcoming" component={UpcomingMoviesPage} />
            <PrivateRoute exact path="/movies/favorites" component={FavoriteMoviesPage} />
            <PrivateRoute exact path="/Tv" component={TvShowsPage}/>
            <PrivateRoute path="/movies/:id" component={MoviePage} />
            <PrivateRoute path="/Tv/:id" component={ShowPage}/>
            <PrivateRoute path="/Person/:id" component={PeoplePage}/>
            <PrivateRoute path="/trending" component={TrendingPage}/>
            <PrivateRoute exact path="/" component={HomePage} />
            
            <PrivateRoute path="/reviews/:id" component={MovieReviewPage} />
            <Redirect from="*" to="/" />
          </Switch>
          
        </MoviesContextProvider>
        </AuthProvider>
      </BrowserRouter>
     
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    
  );
};

ReactDOM.render(<App />, document.getElementById("root"));