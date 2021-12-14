import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import {getTrendingMovies} from '../api/tmdb-api';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';

var disp;
var movies;

const TrendingPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('trending', getTrendingMovies)
  
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  

  movies = data.results;
  
  console.log(movies);
  // Redundant, but necessary to avoid app crashing.
  
  return (
    <PageTemplate
      title="Trending Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
);
};

export function setDisp()
{
  console.log("In");
  disp = movies.slice(6,11);


}

function getDisp() 
{

  return disp;
}

export default TrendingPage;