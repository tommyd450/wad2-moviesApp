import React from "react";
import Show from "../TvCard";
import Grid from "@material-ui/core/Grid";

const TvList = ( {show , action}) => {
  let tvCards = show.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Show key={m.id} show={m} action={action}  />
    </Grid>
  ));
  return tvCards;
};

export default TvList;