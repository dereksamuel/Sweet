import React from "react";
import ItemShotCard from "../components/ItemShotCard/index.jsx";

import { useQuery } from "@apollo/react-hooks";
import { getOneShot } from "../highOrderComponents(hoc)/getShots";
import Loading from "../components/Loading/index.jsx";

export const ShotoCardWithQuery = ({ id }) => {
  if (!id) throw new Error("Is need the id");
  const { loading, error, data } = useQuery(getOneShot, {
    variables: {
      id: id
    },
    fetchPolicy: "cache-and-network",
  });

  if (error) {
    return <h2>Internal Server Error</h2>;
  }
  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <ItemShotCard {...data.photo} disabled={true} />
  );
};
