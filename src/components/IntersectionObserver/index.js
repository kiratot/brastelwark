import React from "react";
import { Observer } from "./styles";

const IntersectionObserver = ({ forwardedRef }) => {
  return (
    <Observer data-testid="intObs" ref={forwardedRef}>
      {" "}
      don't mind me...{" "}
    </Observer>
  );
};

export default IntersectionObserver;
