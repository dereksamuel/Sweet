import React from "react";
import { LoadingContainer } from "./styles";

export default function Loading() {
  return (
    <LoadingContainer>
      <div className="lds-heart"><div></div></div>
      <p>Loading . . .</p>
    </LoadingContainer>
  );
}
