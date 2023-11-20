import React, { useEffect, useState } from "react";
import { useShopCard } from "../Context/ShopCrad";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRipple,
  MDBBtn,
} from "mdb-react-ui-kit";
import DatePrudits from "../DatePrudits/Date";
import { useNavigate } from "react-router";
import ProduitsConnexes from "../CommenderPrudact/ProduitsConnexes/ProduitsConnexes";
import CardRemise from "../CommenderPrudact/Remise/CardRemise";

export default function ShoppingCart() {
  const { stockId, Delete } = useShopCard();
  const [total, setTotal] = useState(0);
  const navigater = useNavigate();

  useEffect(() => {
    calculateTotal();
  }, [stockId]);

  const CaullclePrix = (prix, reduction) => {
    const prixs = prix - (reduction % 100);
    return prixs.toFixed(2);
  };

  const calculateTotal = () => {
    let calculatedTotal = 0;
    stockId.forEach((item) => {
      const product = DatePrudits.find((elem) => elem.ID === item.id);
      if (product) {
        calculatedTotal +=
          product.promotion === true
            ? CaullclePrix(product.Prix, product.Réduction) * item.quantité
            : product.Prix * item.quantité;
      }
    });
    setTotal(calculatedTotal);
  };

  return (
    <div>
      {stockId.map((item) => (
        <div>
          <MDBContainer fluid>
            <MDBRow className="justify-content-center mb-0">
              {DatePrudits.filter((elem) => elem.ID == item.id).map((obj) => (
                <MDBCol md="10" xl="10">
                  <MDBCard className="shadow-0 border rounded-3 mt-5 mb-3">
                    <MDBCardBody>
                      <MDBRow>
                        <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                          <MDBRipple
                            rippleColor="light"
                            rippleTag="div"
                            className="bg-image rounded hover-zoom hover-overlay"
                          >
                            <MDBCardImage
                              src={obj.src}
                              fluid
                              className="w-100"
                              style={{
                                width: "150px",
                                height: "200px",
                              }}
                            />
                          </MDBRipple>
                        </MDBCol>
                        <MDBCol md="6">
                          <h5>{obj.Name}</h5>
                          <div style={{ margin: "20px", padding: "10px" }}>
                            <h4 style={{ color: "red" }}>
                              Quantité : {item.quantité}
                            </h4>
                          </div>
                          <div>
                            {obj.promtion === true ? (
                              <h5>
                                {" "}
                                Prix : ${CaullclePrix(obj.Prix, obj.Réduction)}
                              </h5>
                            ) : (
                              <h5> Prix : ${obj.Prix}</h5>
                            )}
                          </div>
                        </MDBCol>
                        <MDBCol
                          md="6"
                          lg="3"
                          className="border-sm-start-none border-start"
                        >
                          <div>
                            <h4>Totale</h4>
                            {obj.promtion === true ? (
                              <div className="d-flex flex-row align-items-center mb-1">
                                <h4 className="mb-1 me-1">
                                  $
                                  {(
                                    CaullclePrix(obj.Prix, obj.Réduction) *
                                    item.quantité
                                  ).toFixed(2)}
                                </h4>
                              </div>
                            ) : (
                              <div className="d-flex flex-row align-items-center mb-1">
                                <h4 className="mb-1 me-1">
                                  ${(obj.Prix * item.quantité).toFixed(2)}
                                </h4>
                              </div>
                            )}
                          </div>
                          <h6 className="text-success">Free shipping</h6>
                          <div className="d-flex flex-column mt-4">
                            <MDBBtn
                              onClick={() => navigater(`/Ecommerce/proudact/${obj.ID}`)}
                              color="primary"
                              size="sm"
                            >
                              Détails
                            </MDBBtn>
                          </div>
                          <div className="d-flex flex-column mt-4">
                            <MDBBtn
                              color="danger"
                              size="sm"
                              onClick={() => Delete(obj.ID)}
                            >
                              supprimer
                            </MDBBtn>
                          </div>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              ))}
            </MDBRow>
          </MDBContainer>
        </div>
      ))}

      <hr />
      <MDBCard>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md="6">
              <h4 style={{ marginLeft: "20px", color: "red" }}>
                Totale : ${total.toFixed(2)}
              </h4>
            </MDBCol>
            <MDBCol md="6" className="border-sm-start-none border-start">
              <MDBBtn
                color="success"
                size="lg"
                style={{ marginLeft: "20px" }}
                onClick={() => navigater("/login")}
              >
                Payer
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
      <hr />
      <ProduitsConnexes />
      <CardRemise />
    </div>
  );
}
