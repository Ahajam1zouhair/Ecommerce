import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import DatePrudits from "../../DatePrudits/Date";
import { useNavigate } from "react-router-dom";
import { MDBCardImage, MDBRipple } from "mdb-react-ui-kit";

export default function ProduitsConnexes() {
  function generateUniqueNumbers() {
    const uniqueNumbers = new Set();
    while (uniqueNumbers.size < 5) {
      const randomNumber = Math.floor(Math.random() * 25) + 1;
      uniqueNumbers.add(randomNumber);
    }

    return Array.from(uniqueNumbers);
  }

  const uniqueNumbers = generateUniqueNumbers();
  const navigate = useNavigate();

  return (
    <div>
      <h3
        style={{
          marginTop: "4%",
          padding: "14px",
          color: "#1C1C1C",
          fontFamily: "Inter",
        }}
      >
        Autres
      </h3>
      <CardGroup>
        {DatePrudits.filter(
          (num) =>
            num.ID === uniqueNumbers[0] ||
            num.ID === uniqueNumbers[1] ||
            num.ID === uniqueNumbers[2] ||
            num.ID === uniqueNumbers[3] ||
            num.ID === uniqueNumbers[4]
        ).map((elem) => (
          <Card onClick={() => navigate(`/Ecommerce/proudact/${elem.ID}`)}>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom"
            >
              <MDBCardImage
                src={elem.src}
                style={{ width: "200px", height: "200px" }}
                position="top"
                alt="Laptop"
              />
            </MDBRipple>
            <Card.Body>
              <Card.Title>{elem.Name}</Card.Title>
            </Card.Body>

            <Card.Title
              style={{
                color: "red",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              ${elem.Prix}
            </Card.Title>
          </Card>
        ))}
      </CardGroup>
    </div>
  );
}
