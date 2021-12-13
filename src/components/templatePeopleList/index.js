import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import PeopleList from "../peoplelist/index";
import Paginator from "../Paginator";
import { setDisp } from "../../pages/homePage";

var min = 0;
var max = 5;

const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
});

function PeopleListPageTemplate({ persons, name }) {
  const classes = useStyles();
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");

  const genreId = Number(genreFilter);

  
  let displayedPersons = persons;

 
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={name} />
      </Grid>
      <Grid item container spacing={5}>
        <PeopleList  person={displayedPersons}></PeopleList>      </Grid>
        <Paginator
          
          />
    </Grid>
  );
}


export default PeopleListPageTemplate;