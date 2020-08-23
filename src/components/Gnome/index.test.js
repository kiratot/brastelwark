import Gnome from "./";
import React from "react";
import { render } from "@testing-library/react";
import { themeLight, themeDark } from "../../styles/theme";
import { ThemeProvider } from "styled-components";

const mockProps = {
  name: "test",
  age: 123,
  height: 98.123,
  weight: 38.142,
  hairColor: "red",
  friends: ["friend1", "friend2"],
  professions: ["profession1", "profession2"],
  thumbnail: "./logo192.png",
};

const renderComponent = (props, theme) =>
  render(
    <ThemeProvider theme={theme}>
      <Gnome {...props} />
    </ThemeProvider>
  );

it("renders Gnome with props without crashing", () => {
  const { getByTestId } = renderComponent(mockProps, themeLight);
  const gnome = getByTestId("gnome");

  expect(gnome).toHaveTextContent("123");
  expect(gnome).toHaveTextContent("98");
  expect(gnome).toHaveTextContent("red");
  expect(gnome).toHaveTextContent("friend1");
  expect(gnome).toHaveTextContent("profession1");
});

it("renders Gnome with dark theme without crashing", () => {
  const { getByTestId } = renderComponent(mockProps, themeDark);
  const gnome = getByTestId("gnome");

  expect(gnome).toBeInTheDocument();
});
