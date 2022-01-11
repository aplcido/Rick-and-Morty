import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
//import Episode from "../components/Episode";
//import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Card } from "react-bootstrap";
import Col from "react-bootstrap/Col";
//import { Image } from "react-bootstrap";

function Details() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const url = `https://rickandmortyapi.com/api/character/${id}`;

  const fetchData = (url) => {
    axios
      .get(url)
      .then((data) => {
        setData(data.data);
        console.log(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  const styles = {
    card: {
      backgroundColor: "#B7E0F2",
      borderRadius: 55,
      padding: "3rem",
    },
    cardImage: {
      height: "100%",
      objectFit: "cover",
      borderRadius: 55,
      maxWidth: "500px",
    },
  };

  return (
    <>
      {/* <Container
        style={{
          border: "solid blue",
        }}
      > */}
      {/* <div class="card">
        <div class="row no-gutters">
          <div class="col-auto">
            <img src={data.image} alt="" />
          </div>
          <div class="col">
            <div class="card-block px-2">
              <Col>Name: {data.name}</Col>
              <Col>Status: {data.status}</Col>
              <Col>Gender: {data.gender}</Col>
              <Col>Species: {data.species}</Col>
              <Col>
                Location: {data.location?.name} data.location?.url} 
              </Col>
              <Col>
                Origin: {data.origin?.name} {data.origin?.url}
              </Col>
            </div>
          </div>
        </div>
      </div> */}

      <Card className="m-5 border-0 shadow" style={styles.card}>
        <Row>
          <Col>
            <Card.Img src={data.image} style={styles.cardImage} />
          </Col>
          <Col>
            <Card.Body>
              <Card.Title as="h1">
                <Col>Name: {data.name}</Col>
              </Card.Title>
              <Card.Text as="h4" style={styles.cardText}>
                <Col>Status: {data.status}</Col>
                <Col>Gender: {data.gender}</Col>
                <Col>Species: {data.species}</Col>
                <Col>
                  Location: {data.location?.name} {/*{data.location?.url} */}
                </Col>
                <Col>
                  Origin: {data.origin?.name} {/*{data.origin?.url}*/}
                </Col>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>

      {/* <Row>
          <Image width="50%" height="150px" src={data.image}></Image>
        </Row>
        <Row>
          <Col xs={1}>Name:</Col>
          <Col>{data.name}</Col>
        </Row>
        <Row>
          <Col xs={1}></Col>
          <Col>{data.status}</Col>
        </Row>
        <Row>
          <Col xs={1}>Gender:</Col>
          <Col>{data.gender}</Col>
        </Row>
        <Row>
          <Col xs={1}>Species:</Col>
          <Col>{data.species}</Col>
        </Row>
        <Row>
          <Col xs={1}>Location:</Col>
          <Col xs={2}>{data.location?.name}</Col>
          <Col>{data.location?.url}</Col>
        </Row>
        <Row>
          <Col xs={1}>Origin:</Col>
          <Col xs={2}>{data.origin?.name}</Col>
          <Col>{data.origin?.url}</Col>
        </Row>
         <Row>
          <Col xs={1}>Episodes:</Col>
          <Row>
            {data.episode?.map((element, index) => {
              return <Episode key={index} episode={element} />;
            })}
          </Row>
        </Row>  
      </Container>*/}
    </>
  );
}

export default Details;
