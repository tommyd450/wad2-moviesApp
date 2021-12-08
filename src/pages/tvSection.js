import React from "react";
import PageTemplate from "../components/templateTvListPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import {getTVShows} from '../api/tmdb-api';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';


const TvShows = (props) => {
 const {  data, error, isLoading, isError }  = useQuery('tv', getTVShows)
  
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  

  const tv = data.results;
  
  // Redundant, but necessary to avoid app crashing.
  
  return (
    <PageTemplate
    name="Discover Tv"
    shows={tv}
    
  />
);
};


export default TvShows;