import React from "react";
import Card from "./Card";

//const Detail = (url) => {
//  console.log("Hello World");
//};

const CharactersList = ({ characters }) => {
  //let navigate = useNavigate();

  function handleClick(e) {
    console.log("Hello World");
  }
  return (
    <div className="container">
      <div className="row">
        {characters.map((item, index) => (
          <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <Card character={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharactersList;
