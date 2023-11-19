import React from "react";
import { MDBCard, MDBRow, MDBCol } from "mdb-react-ui-kit";
import CommepenteProdact from "./CommpenteElcroni/CommepenteProdact";
import ImageCommente from "./ImageElcrtoni/imageEectronics";
import { Link } from "react-router-dom";

export default function ProdactElectronics() {
  return (
    <>
      <h3 className="category-item-title-title mt-5  ">
        {/* Link New */}
        <Link
          to={`categorie/${1}`}
          style={{
            color: "rgb(27, 139, 231)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "5px",
            textDecoration: "none",
          }}
        >
          Electronics
        </Link>
        <span></span>
      </h3>
      <MDBCard>
        <MDBRow className="g-0">
          <MDBCol md="4">
            <ImageCommente />
          </MDBCol>
          <MDBCol md="8">
            <CommepenteProdact />
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </>
  );
}
