import ErrorMessage from "./";
import React from "react";
import { render } from "@testing-library/react";
import { themeLight, themeDark } from "../../styles/theme";
import { ThemeProvider } from "styled-components";

const renderComponent = ({ children, theme = themeLight }) =>
  render(
    <ThemeProvider theme={theme}>
      <ErrorMessage>{children}</ErrorMessage>
    </ThemeProvider>
  );

it("renders ErrorMessage with children prop without crashing", () => {
  const { getByTestId } = renderComponent({ children: "testing error-msg" });
  expect(getByTestId("err-msg")).toHaveTextContent("testing error-msg");
});

it("renders ErrorMessage with children prop with dark color mode without crashing ", () => {
  const { getByTestId } = renderComponent(
    { children: "testing error-msg" },
    themeDark
  );
  expect(getByTestId("err-msg")).toHaveTextContent("testing error-msg");
});
