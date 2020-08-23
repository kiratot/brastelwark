import Header from "./";
import React from "react";
import { render } from "@testing-library/react";
import { themeLight, themeDark } from "../../styles/theme";
import { ThemeProvider } from "styled-components";
import { toggleTheme } from "../../redux/app/appActions";
import { Provider } from "react-redux";
import store from "./../../redux/store";
const mockProps = {
  theme: "Light",
  onClick: () => toggleTheme(),
};

const renderComponent = (props, theme) =>
  render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Header {...props} />
      </ThemeProvider>
    </Provider>
  );

it("renders Header with props without crashing", () => {
  const { getByTestId } = renderComponent(mockProps, themeLight);
  expect(getByTestId("header")).toHaveTextContent("BrastleWark");
});

it("renders Header with dark theme without crashing", () => {
  const { getByTestId } = renderComponent(mockProps, themeDark);
  expect(getByTestId("header")).toBeInTheDocument();
});
