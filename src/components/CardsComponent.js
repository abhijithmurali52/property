import React, { useState, useEffect } from "react";
import { Card, Button, Container, Col, Row } from "react-bootstrap";
import {Link,useParams} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faBed,
  faBath,
  faLocationCrosshairs,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const CardComponent = (cardInfo) => {
    const [showAll, setShowAll] = useState(false);
  const [cardInfoData, setCardInfoData] = useState([]);
  const value = useParams()

  useEffect(() => {
    axios
      .get("http://localhost:3014/cardInfo")
      .then((response) => {
       
        setCardInfoData(response.data);
      })

      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <>
      <Container>
        <div
          style={{
            textAlign: "center",
            backgroundColor: "lightblue",
            minHeight: "55rem",
          }}
        >
          

          <Row style={{marginLeft:"2.5rem"}}>
          {cardInfoData.slice(0, showAll ? undefined : 6).map((item, index) => (
          <Col xs={12} sm={6} md={4}>
            
               <Link to={`/property/${item.id}`}>
              
            
                <Card  key={index} style={{ width: "18rem" }} >
                  <Card.Img
                    variant="top"
                    src={item.Pic}
                    style={{ height: "12rem" }}
                  />

                  <Card.Body>
                    <Card.Title>
                     {item.Name}
                    </Card.Title>
                    <Card.Text>
                      <div className="d-flex justify-content-between">
                        <FontAwesomeIcon icon={faBuilding} />

                        <FontAwesomeIcon icon={faBed} />

                        <FontAwesomeIcon icon={faBath} />

                        <FontAwesomeIcon icon={faLocationCrosshairs} />
                      </div>

                      <div className="d-flex justify-content-between">
                        <p>{item.Room} room </p>
                        <p>{item.Bedrooms} bed </p>
                        <p>{item.Bathrooms} Bath </p>
                        <p>{item.Area} sqft </p>
                      </div>
                    </Card.Text>
                    <div className="d-flex justify-content-between">
                      <p>{item.Price}/Month</p>
                      <Button variant="primary" className="button-style">
                        Read More
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
             
               </Link>
         
             </Col>
               ))}
          </Row>
          

          <Button
          variant="primary"
          size="sm"
          onClick={() => setShowAll(!showAll)}
          style={{ float: "right",marginRight:"3.5rem" }}
        >
          {showAll ? "show less" : "show more"}
        </Button>
        </div>

        
            </Container>
    </>
  );
};
export default CardComponent;
