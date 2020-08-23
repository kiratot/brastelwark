import Spinner from "./";
import React from "react";
import { render } from "@testing-library/react";
import { themeLight, themeDark } from "../../styles/theme";
import { ThemeProvider } from "styled-components";

const renderComponent = (theme = themeLight) =>
  render(
    <ThemeProvider theme={theme}>
      <Spinner />
    </ThemeProvider>
  );

it("renders Spinner with default theme without crashing", () => {
  const { getByTestId } = renderComponent();
  expect(getByTestId("spinner")).toBeInTheDocument();
});

it("renders Spinner with Dark theme without crashing", () => {
  const { getByTestId } = renderComponent();
  expect(getByTestId("spinner")).toBeInTheDocument(themeDark);
});
