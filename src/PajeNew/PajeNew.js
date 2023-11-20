import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRipple,
} from "mdb-react-ui-kit";
import DatePrudits from "../DatePrudits/Date";
import { useNavigate } from "react-router";

function App() {
  const navigate = useNavigate();
  return (
    <MDBContainer fluid className="my-5">
      <MDBRow>
        {DatePrudits.filter((name) => name.Nouveau === true).map((obj) => (
          <MDBCol
            md="12"
            lg="4"
            className="mb-4 mb-lg-0 mt-4"
            onClick={() => navigate(`/Ecommerce/proudact/${obj.ID}`)}
          >
            <MDBCard>
              <div className="d-flex justify-content-between p-3">
                <div
                  className="bg-danger rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                  style={{ width: "35px", height: "35px" }}
                >
                  <p className="text-white mb-0 small">New</p>
                </div>
              </div>
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
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      position: "relative",
                      background: "white",
                      boxShadow: "0px 1px 2px rgba(56.31, 56.31, 56.31, 0.08)",
                      borderRadius: 6,
                      border: "1px #DEE2E7 solid",
                    }}
                  >
                    <div
                      style={{
                        width: 24,
                        height: 24,
                        left: 8,
                        top: 8,
                        position: "absolute",
                      }}
                    >
                      <div
                        style={{
                          width: 20,
                          height: 18.35,
                          left: 2,
                          top: 2.82,
                          position: "absolute",
                          background: "#0D6EFD",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div class="d-flex justify-content-between mb-2">
                  <h5 class="text-muted mb-0">{obj.Name}</h5>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}

export default App;
