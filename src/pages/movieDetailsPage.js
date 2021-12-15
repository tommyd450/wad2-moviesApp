import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import PeopleList from "../components/templatePeopleList";


// import useMovie from "../hooks/useMovie";   Redundant
import { getCredits, getMovie } from '../api/tmdb-api';
import { useQuery } from "react-query";
import Spinner from '../components/spinner';

const MovieDetailsPage = (props) => {
  const { id } = props.match.params

  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }],
    getMovie
  );
  const {data: data2} = useQuery(
    ["person", { id: id }],
    getCredits 
  );

 
  
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      
      {movie && data2? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
            <PeopleList persons = {data2}/>
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default withRouter(MovieDetailsPage);