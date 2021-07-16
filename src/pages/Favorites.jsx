import React from "react";
import HelmetMeta from "../components/HelmetMeta/index.jsx";
import GetFavorites from "../container/GetFavorites.jsx";

export default function Favorites() {
  return (
    <div>
      <HelmetMeta
        title="your favorites"
        desc="Her you can find your favorites"
      />
      <GetFavorites />
    </div>
  );
}
