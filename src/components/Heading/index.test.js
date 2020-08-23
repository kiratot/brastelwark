import Heading from "./";
import React from "react";
import { render } from "@testing-library/react";
import { themeLight, themeDark } from "../../styles/theme";
import { ThemeProvider } from "styled-components";

const renderComponent = (theme = themeLight) =>
  render(
    <ThemeProvider theme={theme}>
      <Heading />
    </ThemeProvider>
  );

it("renders Heading with default theme without crashing", () => {
  const { getByTestId } = renderComponent();
  expect(getByTestId("heading")).toBeInTheDocument();
});

it("renders Heading with Dark theme without crashing", () => {
  const { getByTestId } = renderComponent();
  expect(getByTestId("heading")).toBeInTheDocument(themeDark);
});
