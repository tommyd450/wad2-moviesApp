import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import CreditList from "../creditedList";
import Paginator from "../Paginator";

var min = 0;
var max = 5;

const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
});

function CreditsListPageTemplate({ credits, title, action }) {
  const classes = useStyles();
  

  
  
  let displayedMovies = credits;
    
    
    
 

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          
        </Grid>
        <CreditList action={action} credits={displayedMovies}></CreditList>      </Grid>
        <Paginator
          
        />
    </Grid>
  );
}



export default CreditsListPageTemplate;