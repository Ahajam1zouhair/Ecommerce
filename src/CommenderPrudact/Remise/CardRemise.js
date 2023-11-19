import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";
import "./Remes.css";

export default function CardRemise() {
  return (
    <MDBContainer fluid>
      <MDBRow className="justify-content-center mb-0">
        <MDBCol md="10" xl="10">
          <MDBCard className="shadow-0 border rounded-3 mt-5 mb-3 bg-primary">
            <MDBCardBody>
              <MDBRow>
                <MDBCol md="9">
                  <p className="Title">Special title treatment</p>
                </MDBCol>
                <MDBCol
                  md="3"
                  lg="3"
                  className="border-sm-start-none border-start"
                >
                  <div className="d-flex flex-column mt-4">
                    <button className="RemesCardButton">
                      Acheter maintenant
                    </button>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
