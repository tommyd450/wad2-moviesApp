import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import RemoveFromFavorites from "../components/cardIcons/removeFromFavorites";
import WriteReview from "../components/cardIcons/writeReview";
import {AuthContext} from "../authentication/authContext";

const FavoriteMoviesPage = () => {

  const {favorite} = useContext(AuthContext);
 
  // Create an array of queries and run in parallel.

  
 

    return (
      <PageTemplate
        title="Favorite Movies"
        movies={favorite}
        action={(movie) => {
          return (
            <>
              <RemoveFromFavorites movie={movie} />
              <WriteReview movie={movie} />
            </>
          );
        }}
      />
    );
  };

  export default FavoriteMoviesPage;