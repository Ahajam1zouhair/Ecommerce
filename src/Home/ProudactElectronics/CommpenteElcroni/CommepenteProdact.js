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

import DatePrudits from "../../../DatePrudits/Date";
import { Link, useNavigate } from "react-router-dom";

function CommepenteProdact() {
  const navigate = useNavigate();
  return (
    <MDBContainer fluid className="my-5 text-center">
      <MDBRow>
        {DatePrudits.filter((name) => name.HomeEl === true).map((obj) => (
          <MDBCol
            md="5"
            lg="4"
            className="mb-2"
            
          >
            <MDBCard className="h-100">
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded hover-zoom"
                onClick={() => navigate(`proudact/${obj.ID}`)}
              >
                <MDBCardImage
                  src={obj.src}
                  fluid
                  className="w-100"
                  style={{ width: "70px" }}
                />
              </MDBRipple>
              <MDBCardBody>
                <Link
                  to={`proudact/${obj.useID}/${obj.Name}`}
                  className="text-reset"
                >
                  <h5 className="card-title mb-3">{obj.Name}</h5>
                </Link>

                <h6 className="mb-3">
                  <h4 className="ms-2 text-danger">${obj.Prix}</h4>
                </h6>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}

export default CommepenteProdact;
