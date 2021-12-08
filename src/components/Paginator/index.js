
import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";
//import {setDisp} from "../../pages/homePage"
//import { setVals, setValstVals }  from "../templateMovieListPage";


const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
      marginBottom: theme.spacing(1.5),
    },
  }));

export default function Paginator(props) 
{

    
    const classes = useStyles();
    return (
      <Paper component="div" className={classes.root}>
        <IconButton aria-label="go back">
          <ArrowBackIcon color="primary" fontSize="large" />
        </IconButton>
  
        <Typography variant="h4" component="h3">
         
        </Typography>
        <IconButton aria-label="go forward" >
          <ArrowForwardIcon color="primary" fontSize="large" />
        </IconButton>
      </Paper>
    );
  };

