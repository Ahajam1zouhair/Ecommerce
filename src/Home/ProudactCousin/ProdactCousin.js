import React from "react";
import { MDBCard, MDBRow, MDBCol } from "mdb-react-ui-kit";
import CommepenteProdact from "./Commpente/CommepenteProdact";
import ImageCommente from "./ImageCousin/imageCommente";

export default function ProdactCousin() {
  return (
    <MDBCard className="my-5">
      <MDBRow className="g-0">
        <MDBCol md="4">
          <ImageCommente />
        </MDBCol>
        <MDBCol md="8">
          <CommepenteProdact />
        </MDBCol>
      </MDBRow>
    </MDBCard>
  );
}
