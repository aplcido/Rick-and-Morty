import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Details() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const url = `https://rickandmortyapi.com/api/character/${id}`;

  const fetchData = (url) => {
    axios
      .get(url)
      .then((data) => {
        setData(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return (
    <>
      <div className="card" style={{ maxWidth: "200px" }}>
        <img className="card-img-top" src={data.image} alt="character" />
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <hr />
          <p className="card-text">Species: {data.species}</p>
          <p className="card-text">Location: {data.location?.name}</p>
          <p className="card-text">Location: {data.location?.url}</p>
        </div>
      </div>
    </>
  );
}

export default Details;
