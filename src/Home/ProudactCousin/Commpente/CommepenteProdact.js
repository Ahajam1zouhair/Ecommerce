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
import DatePrudits from "../../../DatePrudits/Date";
import { Link, useNavigate } from "react-router-dom";

function CommepenteProdact() {
  const navigate = useNavigate();
  return (
    <MDBContainer fluid className="my-5 text-center">
      <MDBRow>
        {DatePrudits.filter((name) => name.HomeCUO === true).map((obj) => (
          <MDBCol
            md="5"
            lg="4"
            className="mb-2"
            onClick={() => navigate(`proudact/${obj.ID}`)}
          >
            <MDBCard  className="h-100">
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded hover-zoom"
              >
                <MDBCardImage src={obj.src} fluid className="w-100" />
              </MDBRipple>
              <MDBCardBody>
                <Link
                  to={`proudact/${obj.useID}/${obj.Name}`}
                  className="text-reset"
                >
                  <h5 className="card-title mb-3">{obj.Name}</h5>
                </Link>
              </MDBCardBody>
              <MDBCardFooter>
              <h6 className="mb-3">
                  <h4 className="ms-2 text-danger">${obj.Prix}</h4>
                </h6>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}

export default CommepenteProdact;
