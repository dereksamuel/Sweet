import React from "react";
import { SubmitButton as Button } from "./styles";

export default function SubmitButton({ children, onClick, disabled }) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      color="#CA5353"
      maxAll="363.34px"
    >{children}</Button>
  );
}
