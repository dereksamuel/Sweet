import React, { useContext, useEffect, useRef, useState } from "react";
import { Card, Image } from "./styles";
import useLocalStorage from "../../hooks/useLocalStorage";
import FvButton from "../FavButton/index.jsx";
import useToggleLikeMutation from "../../hooks/useToggleLikeMutation.js";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../../Context.jsx";

export default function ShotCard({
  id,
  src,
  likes = 0,
  liked,
  categoryId,
}) {
  let history = useHistory();
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const key = `like-${id}`;
  const { isAuth } = useContext(Context);
  const [like, setLike] = useLocalStorage(key, liked || false);
  const { mutation, mutationError, mutationLoading } = useToggleLikeMutation();
  const categories = {
    1: "Cats",
    2: "Dogs",
    3: "Hamsters",
    4: "Rabbits",
    5: "Birds",
    6: "Fishes",
  };

  useEffect(async () => {
    const ac = new AbortController();
    await Promise.resolve(
      typeof IntersectionObserver !== "undefined" ?
        IntersectionObserver :
        import("intersection-observer")
    );
    const observer = new IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    });

    observer.observe(ref.current);
    return ac.abort();
  }, [ref]); // solo cuando cambie la referencia

  const handleFavClick = async () => {
    if (!isAuth) return history.push("/login");
    setLike(!like, liked);
    await mutation({
      variables: {
        input: {
          id,
        },
      },
    });
    if (mutationError) {
      console.error(mutationError);
    }
    if (mutationLoading) {
      console.log(mutationLoading);
    }
  };

  return (
    <Card ref={ref}>
      {
        show && <div>
          <Link to={`/detail/${id}`}>
            <Image src={src} alt={src} />
          </Link>
          <div className="container">

            <FvButton
              like={like}
              likes={likes}
              onClick={handleFavClick}
            ></FvButton>
            <div className="category">
              <p>{categories[categoryId]}</p>
            </div>
          </div>
        </div>
      }
    </Card>
  );
}
