import React from "react";
import { StyledSpinner, SpinnerContainer } from "./styles";

const Spinner = () => (
  <SpinnerContainer data-testid="spinner">
    <StyledSpinner viewBox="0 0 50 50">
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="4"
      />
    </StyledSpinner>
  </SpinnerContainer>
);

export default Spinner;
