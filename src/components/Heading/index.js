import React from "react";
import { Title, SubTitle, Tip, HeaderContainer } from "./style";

const Heading = () => {
  return (
    <HeaderContainer data-testid="heading">
      <Title>Find your perfect BrastleWarker fast and safe !</Title>
      <SubTitle>
        Begin by browsing our listing or type your search criteria in the search
        bar.
      </SubTitle>
      <Tip>You can search by name, profession, or age.</Tip>
    </HeaderContainer>
  );
};

export default Heading;
