import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBRipple,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";

import DatePrudits from "../../../DatePrudits/Date";

export default function CardPromotion() {
  const navigate = useNavigate();
  const CaullclePrix = (prix, Réduction) => {
    const prixs = prix - (Réduction % 100);
    return prixs;
  };
  return (
    <MDBContainer fluid className="my-5 text-center">
      <h3 className="category-item-title-title">
        {/* Link New */}
        <Link
          to="newproidacts"
          style={{
            color: "rgb(27, 139, 231)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "5px",
            textDecoration: "none",
          }}
        >
          Promotion
        </Link>
      </h3>

      <MDBRow>
        {DatePrudits.filter((product) => product.promtion === true).map(
          (obj) => (
            <MDBCol
              key={obj.ID}
              md="12"
              lg="4"
              className="mb-4"
              onClick={() => navigate(`proudact/${obj.ID}`)}
            >
              <MDBCard>
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image rounded hover-zoom "
                >
                  <img
                    src={obj.src}
                    fluid
                    style={{ width: " 80%", height: "300px" }}
                  />
                </MDBRipple>
                <MDBCardBody>
                  <a className="text-reset">
                    <h5 className="card-title mb-3">{obj.Name}</h5>
                  </a>
                  <h3>
                    <span
                      className="badge bg-danger"
                      style={{
                        borderRadius: "30%",
                        width: "70px",
                        height: "40px",
                      }}
                    >
                      {obj.Réduction}%
                    </span>
                  </h3>
                  <h6 className="mb-3">
                    <s>${obj.Prix}</s>
                    <h3 className="ms-2 text-danger">${CaullclePrix(obj.Prix, obj.Réduction)}</h3>
                  </h6>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          )
        )}
      </MDBRow>
    </MDBContainer>
  );
}
