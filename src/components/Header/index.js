import React from "react";
import { Logo, Container, ColorModeContainer, HeaderWrapper } from "./styles";

import { ReactComponent as Dark } from "./moon.svg";
import { ReactComponent as Light } from "./sun.svg";

const Header = ({ themeMode, onClick }) => {
  return (
    <Container>
      <HeaderWrapper>
        <Logo>BrastleWark</Logo>
        <ColorModeContainer onClick={onClick}>
          {themeMode === "Light" ? <Dark /> : <Light />}
        </ColorModeContainer>
      </HeaderWrapper>
    </Container>
  );
};

export default Header;
