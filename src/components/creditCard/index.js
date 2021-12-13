import React, { useContext  } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
import StarRateIcon from "@material-ui/icons/StarRate";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import img from '../../images/film-poster-placeholder.png';
import { Link } from "react-router-dom";


const useStyles = makeStyles({
  card: { maxWidth: 500 , maxHeight:1000 },
  media: { height: 250 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
    
  },
});

export default function CreditCard({ credit,action }) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader
      className={classes.header}
      
      title={
        <Typography variant="h5" component="p">
          {credit.character}{" "}
        </Typography>
      }
    />
      <CardMedia
        className={classes.media}
        image={
          credit.backdrop_path
            ? `https://image.tmdb.org/t/p/w500/${credit.backdrop_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          
        <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {credit.release_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {credit.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
      
      <Link to={`/movies/${credit.id}`}>
          <Button variant = "outlined" size = "medium" color = "primary">
            More Info...
          </Button>
        </Link> 
        
        
        
      
      </CardActions>
    </Card>
  );
}