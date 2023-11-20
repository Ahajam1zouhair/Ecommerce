import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRipple,
  MDBCardFooter,
} from "mdb-react-ui-kit";
import DatePrudits from "../DatePrudits/Date";
import { useNavigate, useParams } from "react-router";

export default function Categotie() {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);
  return (
    <div className="p-3">
      <MDBContainer fluid className="my-5">
        <MDBRow>
          {DatePrudits.filter((Id) => Id.useID == id).map((obj) => (
            <MDBCol
              md="12"
              lg="4"
              className="mb-4 mb-lg-0 mt-4"
              onClick={() => navigate(`/Ecommerce/proudact/${obj.ID}`)}
            >
              <MDBCard>
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image rounded hover-zoom"
                >
                  <MDBCardImage
                    src={obj.src}
                    position="top"
                    alt="Laptop"
                    style={{ width: "300px", height: "300px" }}
                  />
                </MDBRipple>

                <MDBCardBody>
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="text-dark mb-0">${obj.Prix}</h5>
                  </div>

                  <div class="d-flex justify-content-between mb-2">
                    <h5 class="text-muted mb-0">{obj.Name}</h5>
                  </div>
                </MDBCardBody>
                <MDBCardFooter>
                  <button
                    type="button"
                    class="btn btn-primary btn-lg btn-block"
                  >
                    commander
                  </button>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
