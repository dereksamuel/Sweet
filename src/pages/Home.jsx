import React from  "react";
import ClassPets from "../components/ClassPets/index.jsx";
import ShotCard from "../components/ShotCard/index.jsx";
import HelmetMeta from "../components/HelmetMeta/index.jsx";

function HomeComponent({ id }) {
  return (
    <>
      <HelmetMeta
        title="your favorite app of pets"
        desc="With sweet you can find photos of pets very cuts"
      />
      <ClassPets />
      <ShotCard categoryId={id} />
    </>
  );
}

const Home = React.memo(HomeComponent, (prevProps, props) => {
  return prevProps.id === props.id;
});

export default Home;
