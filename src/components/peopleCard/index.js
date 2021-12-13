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
import Avatar from "@material-ui/core/Avatar";
import Avatar2 from "@material-ui/core/Avatar";
import { MoviesContext } from "../../contexts/moviesContext";
import PlayListAddIcon from  '@material-ui/icons/PlaylistAdd';
import PlaylistAdd from "@material-ui/icons/PlaylistAdd";

const useStyles = makeStyles({
  card: { maxWidth: 350 , maxHeight:500 },
  media: { height: 250 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
    
  },
});

export default function PeopleCard({ person,action }) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader
      className={classes.header}
      
      title={
        <Typography variant="h5" component="p">
          {person.name}{" "}{"("+person.character+")"}
        </Typography>
      }
    />
      <CardMedia
        className={classes.media}
        image={
          person.profile_path
            ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {person.birthday}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {person.popularity}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
      
      <Link to={`/person/${person.id}`}>
          <Button variant = "outlined" size = "medium" color = "primary">
            More Info...
          </Button>
      </Link> 
        
        
        
      
      </CardActions>
    </Card>
  );
}