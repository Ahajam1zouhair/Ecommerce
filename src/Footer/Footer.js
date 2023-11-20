import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>les réseaux sociaux :</span>
        </div>

        <div>
          <a href="https://m.facebook.com/profile.php?id=100042899842142" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="facebook-f" />
          </a>
          <a href="https://www.instagram.com/zouhir_ahjam_/" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="instagram" />
          </a>
          <a href="https://www.linkedin.com/in/zouhair-ahajam-383488294/" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="linkedin" />
          </a>
          <a href="https://github.com/Ahajam1zouhair" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Se Connecter</h6>
              <p>
                <Link to="/login" className="text-reset">
                  Login
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Les Pages</h6>
              <p>
                <Link to="/Ecommerce" className="text-reset">
                  Home
                </Link>
              </p>
              <p>
                <Link to="/newproidacts" className="text-reset">
                  New
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Les Catégories</h6>
              <p>
                <Link to={`categorie/${1}`} className="text-reset">
                  Electronique
                </Link>
              </p>
              <p>
                <Link to={`categorie/${2}`} className="text-reset">
                  Vêtements
                </Link>
              </p>
              <p>
                <Link to={`categorie/${3}`} className="text-reset">
                  Cuisine
                </Link>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Mon information</h6>
              <p>
                <MDBIcon color="secondary" icon="home" className="me-2" />
                Agadir,Drarga, maroc
              </p>
              <p>
                <MDBIcon color="secondary" icon="envelope" className="me-3" />
                ahajamzouhair@gmail.com
              </p>
              <p>
                <MDBIcon color="secondary" icon="phone" className="me-3" /> +212
                612-161736
              </p>
              <p>
                <MDBIcon color="secondary" icon="print" className="me-3" /> +212
                705-66364
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright:
        <p className="text-reset fw-bold">
          Zouhair Ahajam
        </p>
      </div>
    </MDBFooter>
  );
}
