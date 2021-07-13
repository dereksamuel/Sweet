import React from "react";
import { MdFavorite } from "react-icons/md";
import { Button } from "./styles";

export default function FvButton({ like, likes, onClick }) {
  const colorHeart = like ? "#DD3C3C" : "#4D4B5B";

  return (
    <Button onClick={onClick}>
      <i>
        <MdFavorite
          size={30}
          color={colorHeart}
          className={like && "favorite"}
        />
      </i>
      {likes} likes
    </Button>
  );
}
