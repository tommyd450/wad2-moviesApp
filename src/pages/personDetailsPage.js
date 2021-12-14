import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PersonDetails from "../components/peopleDetails";
import PageTemplate from "../components/templatePersonPage";
import { getPerson , getPersonCredits } from "../api/tmdb-api";
import CreditsList from "../components/templateCreditsListPage";
import MovieList from "../components/templateMovieListPage";



// import useMovie from "../hooks/useMovie";   Redundant

import { useQuery } from "react-query";
import Spinner from '../components/spinner';

const PersonDetailsPage = (props) => {
  const { id } = props.match.params

  
  const { data: person, error, isLoading, isError } = useQuery(
    ["person", { id: id }],
    getPerson
  );

  const {data: data2, error2, isLoading2,isError2} = useQuery(
    ["movie_credits", { id: id }],
    getPersonCredits 
  );

 console.log(data2);
  
  if (isLoading||isLoading2) {
    return <Spinner />;
  }

  if (isError||isError) {
    return <h1>{error.message}</h1>;
  }


  return (
    <>
      
      {person ? (
        <>
          <PageTemplate person={person}>
            <PersonDetails person={person} />

            <CreditsList credits={data2}/>
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default withRouter(PersonDetailsPage);