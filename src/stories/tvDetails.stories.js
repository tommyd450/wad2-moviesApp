import React from "react";
import ShowDetails from "../components/tvDetails";
import SampleTvData from "./sampleTvData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Tv Details Page/TvDetails",
  component: ShowDetails,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    
  ],
};

export const Basic = () => <ShowDetails show={SampleTvData} />;

Basic.storyName = "Default";
