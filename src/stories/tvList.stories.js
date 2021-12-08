import React from "react";
import Showlist from "../components/TvList"
import SampleData from "./sampleTvData";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import Grid from "@material-ui/core/Grid";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "TvList",
  component: Showlist,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  const shows = [
    { ...SampleData, id: 1 },
    { ...SampleData, id: 2 },
    { ...SampleData, id: 3 },
    { ...SampleData, id: 4 },
    { ...SampleData, id: 5 },
  ];
  return (
    <Grid container spacing={5}>
      <Showlist
        show={shows}
        
      />
    </Grid>
  );
};
Basic.storyName = "Default";
