import Search from "./";
import React from "react";
import { render } from "@testing-library/react";
import { themeLight, themeDark } from "../../styles/theme";
import { ThemeProvider } from "styled-components";

const renderComponent = (theme = themeLight) =>
  render(
    <ThemeProvider theme={theme}>
      <Search />
    </ThemeProvider>
  );

it("renders Search with default theme without crashing", () => {
  const { getByTestId } = renderComponent();
  expect(getByTestId("search")).toBeInTheDocument();
});

it("renders Search with Dark theme without crashing", () => {
  const { getByTestId } = renderComponent();
  expect(getByTestId("search")).toBeInTheDocument(themeDark);
});
