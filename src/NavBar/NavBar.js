import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useShopCard } from "../Context/ShopCrad";
import { useNavigate } from "react-router";

export default function NavBar() {
  const nevgiroe = useNavigate();
  const { cartQuantity } = useShopCard();
  return (
    <>
      <Navbar key={"lg"} expand={"lg"} className="bg-body-tertiary mb-3">
        <Container fluid>
          <Navbar.Brand href="#">Zouhiar Ahajam</Navbar.Brand>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-${"lg"} `}
            className="bg-dark"
            icon="bars"
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${"lg"}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${"lg"}`}
            placement="end"
            icon="bars"
            fas
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"lg"}`}>
                Zouhiar Ahajam
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1" onClick={() => nevgiroe("/")}>
                  Home
                </Nav.Link>
                <Nav.Link
                  href="#action2"
                  onClick={() => nevgiroe("newproidacts")}
                >
                  New
                </Nav.Link>

                <NavDropdown title="Catégories" id="navbarScrollingDropdown">
                  <NavDropdown.Item onClick={() => nevgiroe(`categorie/${1}`)}>
                    Électronique
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => nevgiroe(`categorie/${2}`)}>
                    Vêtements
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => nevgiroe(`categorie/${3}`)}>
                    Cuisine
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
              </Nav>
              {cartQuantity === 1 ? (
                <></>
              ) : (
                <>
                  <Button
                    style={{
                      width: "3rem",
                      height: "3rem",
                      position: "relative",
                      marginRight: "22px",
                    }}
                    variant="outline-primary"
                    className="rounded-circle"
                    onClick={() => nevgiroe("/mycart")}
                  >
                    <MDBIcon
                      fas
                      icon="cart-arrow-down"
                      size="2x"
                      style={{ position: "relative", right: "15px" }}
                    />
                    <div
                      className="rounded-circle bg-danger d-flex justify-content-center align-item-center"
                      style={{
                        color: "white",
                        width: "1rem",
                        height: "1rem",
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        transform: "translate(25%, 25%)",
                      }}
                    >
                      {cartQuantity - 1}
                    </div>
                  </Button>
                </>
              )}
              <MDBBtn onClick={() => nevgiroe(`/login`)} color="primary" size="sm">
                Login
              </MDBBtn>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
