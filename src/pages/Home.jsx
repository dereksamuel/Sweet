import React from  "react";
import ClassPets from "../components/ClassPets/index.jsx";
import ShotCard from "../components/ShotCard/index.jsx";

export default function Home({ id }) {
  return (
    <>
      <ClassPets />
      <ShotCard categoryId={id} />
    </>
  );
}
