// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import { useNavigate } from "react-router";
// import { useShopCard } from "../Context/ShopCrad";
// import { MDBIcon } from "mdb-react-ui-kit";

// function test() {
//   const nevgiroe = useNavigate();
//   const {cartQuantity} = useShopCard()
  
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container fluid>
//         <Navbar.Brand href="#">Zouhiar Ahajam</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: "100px" }}
//             navbarScroll
//           >
//             <Nav.Link onClick={() => nevgiroe("/")}>Home</Nav.Link>
//             <NavDropdown title="Catégories" id="navbarScrollingDropdown">
//               <NavDropdown.Item onClick={() => nevgiroe(`categorie/${1}`)}>
//                 Électronique
//               </NavDropdown.Item>
//               <NavDropdown.Item onClick={() => nevgiroe(`categorie/${2}`)}>
//                 Vêtements
//               </NavDropdown.Item>
//               <NavDropdown.Item onClick={() => nevgiroe(`categorie/${3}`)}>
//                 Cuisine
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//             </NavDropdown>
//             <Nav.Link onClick={() => nevgiroe("newproidacts")}>New</Nav.Link>
//           </Nav>
         
//           <Button
//             style={{ width: "4rem", height: "4rem", position: "relative" , marginRight : "22px", left :'2px' }}
//             variant="outline-primary"
//             className="rounded-circle"
//             onClick={()=>nevgiroe('/mycart')}
            
//           >
//             <MDBIcon fas icon="cart-arrow-down" size='2x'  />
//             <div
//               className="rounded-circle bg-danger d-flex justify-content-center align-item-center"
//               style={{
//                 color: "white",
//                 width: "1.5rem",
//                 height: "1.5rem",
//                 position: "absolute",
//                 bottom: 0,
//                 right: 0,
//                 transform: "translate(25%, 25%)",
//               }}
//             >
//               {cartQuantity}
//             </div>
//           </Button>
//           <Form className="d-flex">
//             <Button variant="outline-success" onClick={()=>nevgiroe('/login')}>Login</Button>
//           </Form>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default test;
