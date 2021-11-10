import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PlaylistIcon from "@material-ui/icons/PlaylistAdd"

const AddToPlaylistIcon = ({ movie }) => {
  
    const context = useContext(MoviesContext);
    const handleAddToPlaylist = (e) =>
    {
      e.preventDefault();
      context.addToMustWatch(movie);
    };
  return (
    <IconButton aria-label="add to playlist" >
      <PlaylistIcon color="primary" fontSize="large" onClick={handleAddToPlaylist} />
    </IconButton>
  );
};

export default AddToPlaylistIcon;