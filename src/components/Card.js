import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ character }) => {
  let navigate = useNavigate();

  function handleClick(e, id) {
    navigate(`/details/${id}`);
  }
  return (
    <>
      <div className="card" style={{ minWidth: "200px" }}>
        <img
          className="card-img-top"
          onClick={(event) => {
            handleClick(event, character.id);
          }}
          src={character.image}
          alt="character"
        />
        <div className="card-body">
          <h5 className="card-title">{character.name}</h5>
          <hr />
          <p className="card-text">Species: {character.species}</p>
          <p className="card-text">Location: {character.location.name}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
