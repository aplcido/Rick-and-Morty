import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const UseDataFetch = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/49")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <p>{JSON.stringify(data)}</p>
    </>
  );
};

export { UseDataFetch };
