import React from "react";
import PeopleCard from "../components/peopleCard";
import SamplePerson from "./samplePerson";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";
import { action } from "@storybook/addon-actions";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";

export default {
  title: "PeopleCard",
  component: PeopleCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/People"]}>{Story()}</MemoryRouter>,
    
  ],
};

export const Basic = () => {
  return (
    <PeopleCard
      person={SamplePerson}
      
    
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SamplePerson, poster_path: undefined };
  return (
    <PeopleCard
      movie={sampleNoPoster}
      
    />
  );
};
Exceptional.storyName = "exception";
