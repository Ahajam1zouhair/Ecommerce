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
import DatePrudits from "../../DatePrudits/Date";
import { Link, useNavigate } from "react-router-dom";

function NewProudact() {
  const navigate = useNavigate();
  return (
    <MDBContainer fluid className="my-5">
      <div className="category-tittle">
        <div className="category-tittle-container">
          <div className="category-item-tittle">
            <div className="category-content-flex-tittle">
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
                  Proudact New
                </Link>
                <span></span>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <MDBRow>
        {DatePrudits.filter((New) => New.Nouveau === true).map((obj) => (
          <MDBCol
            md="12"
            lg="4"
            className="mb-4 mb-lg-3"
            onClick={() => navigate(`proudact/${obj.ID}`)}
          >
            <MDBCard className="h-100">
              <div className="d-flex justify-content-between p-3">
                <p className="lead mb-0">{obj.Name}</p>
                <div
                  className="bg-danger rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                  style={{ width: "35px", height: "35px" }}
                >
                  <p className="text-white mb-0 small">New</p>
                </div>
              </div>

              <MDBCardBody>
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image rounded hover-zoom"
                >
                  <MDBCardImage src={obj.src} fluid className="w-60" />
                </MDBRipple>
              </MDBCardBody>

              <MDBCardFooter>
                <div className="d-flex justify-content-between mb-3">
                  <h5 className="mb-0">Prix</h5>
                  <h5 className="text-dark mb-0">${obj.Prix}</h5>
                </div>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}

export default NewProudact;
