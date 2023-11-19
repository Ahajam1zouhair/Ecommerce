import React from "react";
import { MDBCard, MDBRow, MDBCol } from "mdb-react-ui-kit";
import CommepenteProdact from "./CommpenteElcroni/CommepenteProdact";
import ImageCommente from "./ImageElcrtoni/imageEectronics";


export default function ProdactElectronics() {
  return (
    <>
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
