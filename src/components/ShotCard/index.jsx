import React from "react";
import ItemShotCard from "../ItemShotCard/index.jsx";

import { useQuery } from "@apollo/react-hooks";
import { getShots } from "../../highOrderComponents(hoc)/getShots";
import Loading from "../Loading/index.jsx";

export default function ShotCard({ categoryId }) {
  const {
    loading,
    data,
    error
  } = useQuery(getShots, { variables: { categoryId } });

  if (error) return <p>Error</p>;
  if (loading) return <Loading></Loading>;

  return (
    <ul>
      {
        data.photos.map((photo) => <li key={photo.id}>
          <ItemShotCard {...photo} />
        </li>)
      }
    </ul>
  );
}
