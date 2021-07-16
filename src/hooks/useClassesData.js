import { useState, useEffect } from "react";

function useClassesData() {
  const [classesList, setClassesList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(async () => {
    const response = await (await fetch("https://sweet-server-vercel-r6i1a35k4-dereksamuel.vercel.app/categories")).json();
    setClassesList(response);
    setLoading(false);
  }, []);

  return { classesList, loading };
}

export default useClassesData;
