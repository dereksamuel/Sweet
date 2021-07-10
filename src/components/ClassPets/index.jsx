import React from "react";
import ItemClassPets from "../ItemClassPets/index.jsx";

const listOfClasses = [1, 2, 3, 4, 5];

export default function ClassPets() {
  return (
    <div>
      {
        listOfClasses.map((classPet, index) => (
          <ItemClassPets key={index} path={classPet} />
        ))
      }
    </div>
  );
}
