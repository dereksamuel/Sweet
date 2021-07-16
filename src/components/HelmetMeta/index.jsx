import React from "react";
import { Helmet } from "react-helmet";

export default function HelmetMeta({ title, desc, children }) {
  return (
    <Helmet>
      <title>Sweet | {title}</title>
      <meta
        name="description"
        content={desc} />
      { children }
    </Helmet>
  );
}
