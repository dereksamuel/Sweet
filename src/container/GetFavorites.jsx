import React from "react";
import ItemShotCard from "../components/ItemShotCard/index.jsx";

import { useQuery } from "@apollo/react-hooks";
import Loading from "../components/Loading/index.jsx";
import { getFavs } from "../highOrderComponents(hoc)/getFavs";

export default function GetFavorites() {
  const {
    loading,
    error,
    data
  } = useQuery(getFavs, { fetchPolicy: "cache-and-network" });

  if (error) {
    return <h2>Internal Server Error</h2>;
  }
  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <>
      {
        data
          .favs
          ?.map(
            (fav) => <ItemShotCard
              key={fav.id}
              {...fav}
            />
          )
      }
    </>
  );
}
