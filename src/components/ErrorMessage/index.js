import React from "react";
import { Message } from "./styles";

const ErrorMessage = ({ children }) => {
  return <Message data-testid="err-msg">{children}</Message>;
};

export default ErrorMessage;
