import React, { useEffect, useState } from "react";
import useClassesData from "../../hooks/useClassesData.js";
import ItemClassPets from "../ItemClassPets/index.jsx";
import { List, Item } from "./styles.js";

export default function ClassPets() {
  const { classesList, loading } = useClassesData();
  const [showFixed, setShowFixed] = useState(false);

  useEffect(function () {
    const onScroll = () => {
      const newShowFixed = document.getElementById("app")?.scrollTop > 100;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };

    document.getElementById("app")?.addEventListener("scroll", onScroll);
  });

  const renderList = (fixed) => {
    return <List fixed={fixed}>
      {
        loading ? <>
          {
            [1, 2, 3, 4, 5, 6, 8].map((item) => (
              <Item key={item}>
                <ItemClassPets />
              </Item>
            ))
          }
        </>
          : classesList.map((classPet, index) => (
            <Item key={index}>
              <ItemClassPets {...classPet} path={`/pet/${classPet.id}`} />
            </Item>
          ))
      }
    </List>;
  };

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
}
