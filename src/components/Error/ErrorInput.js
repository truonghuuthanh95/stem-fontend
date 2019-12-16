import React from "react";
import { FormText } from 'reactstrap'
const ErrorInput = ({ touched, message }) => {
  if (!touched) {
    return <FormText>&nbsp;</FormText>;
  }
  if (message) {
    return <FormText color="danger">{message}</FormText>;
  }
  return <></>;
};

export default ErrorInput;