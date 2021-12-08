import React from "react";
import TvCard from "../components/TvCard";
import sampleData from "./sampleTvData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";
import { action } from "@storybook/addon-actions";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";

export default {
  title: "TvCard",
  component: TvCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => {
  return (
    <TvCard
      show={sampleData}
      //action={(show) => <AddToFavoritesIcon movie={show} />}
      taging={(show) => null}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...sampleData, poster_path: undefined };
  return (
    <TvCard
      movie={sampleNoPoster}
      //action={(movie) => <AddToFavoritesIcon movie={movie} />}
      taging={(movie) => null}
    />
  );
};
Exceptional.storyName = "exception";
