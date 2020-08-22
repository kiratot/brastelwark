import ErrorMessage from "./";
import React from "react";
import { render, cleanup } from "@testing-library/react";
import theme from "../../styles/theme";
import { ThemeProvider } from "styled-components";

afterEach(cleanup);

const renderComponent = ({ children }) =>
  render(
    <ThemeProvider theme={theme}>
      <ErrorMessage>{children}</ErrorMessage>
    </ThemeProvider>
  );

it("renders ErrorMessage with children prop without crashing", () => {
  const { getByTestId } = renderComponent({ children: "testing error-msg" });
  expect(getByTestId("err-msg")).toHaveTextContent("testing error-msg");
});
