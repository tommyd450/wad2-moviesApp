import React from "react";
import PersonDetails from "../components/peopleDetails";
import SamplePerson from "../stories/samplePerson";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Person Details Page/PersonDetails",
  component: PersonDetails,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
   
  ],
};

export const Basic = () => <PersonDetails person={SamplePerson} />;

Basic.storyName = "Default";
