import React from "react";
import { Observer } from "./styles";

const IntersectionObserver = ({ forwardedRef }) => {
  return <Observer ref={forwardedRef}> don't mind me... </Observer>;
};

export default IntersectionObserver;
