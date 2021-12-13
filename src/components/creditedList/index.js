import React from "react";
import Credit from "../creditCard";
import Grid from "@material-ui/core/Grid";

const CreditsList = ( {credits, action }) => {
    console.log(credits)
  let creditCards = credits.cast.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Credit key={m.id} credit={m} action={action} />
    </Grid>
  ));
  return creditCards;
};

export default CreditsList;