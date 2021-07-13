import React from "react";
import { ShotoCardWithQuery } from "../container/ShotCardWithQuery.jsx";

export default function Details({ detailId }) {
  return (
    <ShotoCardWithQuery id={detailId} />
  );
}
