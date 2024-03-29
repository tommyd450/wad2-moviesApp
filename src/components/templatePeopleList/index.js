import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import PeopleList from "../peoplelist/index";
import Paginator from "../Paginator";
import { setDisp } from "../../pages/homePage";


const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
});

function PeopleListPageTemplate({ persons, name ,movie }) {
  const classes = useStyles();
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");

 

  
  let displayedPersons = persons;

 
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={name} />
      </Grid>
      <Grid item container spacing={5}>
        <PeopleList  person={displayedPersons} movie={movie}></PeopleList>      </Grid>
        <Paginator
          
          />
    </Grid>
  );
}


export default PeopleListPageTemplate;