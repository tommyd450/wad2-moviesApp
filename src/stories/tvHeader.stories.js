import React from "react";
import TvHeader from "../components/tvHeader";
import SampleShow from "./sampleTvData";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";

export default {
  title: "Tv Details Page/TvHeader",
  component: TvHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <TvHeader show={SampleShow} />;

Basic.storyName = "Default";
