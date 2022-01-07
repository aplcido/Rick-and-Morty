import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CardCharacter = ({ character }) => {
  let navigate = useNavigate();

  function handleClick(e, id) {
    navigate(`/details/${id}`);
  }
  return (
    <>
      <Card style={{ minWidth: "200px" }}>
        <Card.Img
          variant="top"
          onClick={(event) => {
            handleClick(event, character.id);
          }}
          src={character.image}
        />
        <Card.Body>
          <Card.Title>{character.name}</Card.Title>
          <hr />
          <Card.Text>
            <>
              Species: {character.species} <br /> <br />
              Location: {character.location.name}
            </>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardCharacter;
