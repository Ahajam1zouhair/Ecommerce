import React from "react";
import { MDBCard, MDBRow, MDBCol } from "mdb-react-ui-kit";
import CommepenteProdact from "./Commpente/CommepenteProdact";
import ImageCommente from "./ImageCousin/imageCommente";
import { Link } from "react-router-dom";

export default function ProdactCousin() {
  return (
    <>
      <h3 className="category-item-title-title">
        {/* Link New */}
        <Link 
         to={`categorie/${3}`}
          
          style={{
            color: "rgb(27, 139, 231)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "5px",
            textDecoration: "none",
          }}
        >
          Proudact Cousin
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
