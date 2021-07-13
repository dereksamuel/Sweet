import React from "react";
import { Anchor, Image } from "./styles";

export default function ItemClasspets({
  cover = "https://i.pinimg.com/originals/62/7a/47/627a47d9112cb0c8750f27fcd8fbde4d.jpg",
  path,
}) {
  return (
    <Anchor to={path || "/"}>
      <Image src={cover} alt={path} />
    </Anchor>
  );
}

