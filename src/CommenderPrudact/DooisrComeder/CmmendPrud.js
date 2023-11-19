import React, { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBRipple,
} from "mdb-react-ui-kit";
import DatePrudits from "../../DatePrudits/Date";
import { useParams } from "react-router";
import "./StayleComender/ComnederProdact.css";
import { useShopCard } from "../../Context/ShopCrad";
import Modal from "./ModalsCart";

export default function DonnerPrudact({Show }) {
  const { AjouterId } = useShopCard();
  const { id } = useParams();
  const [values, setValues] = useState(1);
  const [open, setOpen] = useState(false);

  const CaullclePrix = (prix, Réduction) => {
    const prixs = prix - (Réduction % 100);
    return prixs;
  };


  const onChangeValue = (e) => {
    const value = parseInt(e.target.value, 10);
    setValues(value);
  };

  return (
    <MDBCard fluid className="my-5">
      {DatePrudits.filter((title) => title.ID == id).map((obj) => (
        <MDBRow className="g-0">
          <MDBCol md="5" className="imageCommender">
          <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded hover-zoom"
              >
                  <MDBCardImage
              src={obj.src}
              fluid
              style={{ width: "70%", height: "60%" }}
            />
              </MDBRipple>
          </MDBCol>
          <MDBCol md="7" className="">
            <MDBCardBody>
              <h3 className="Name">{obj.Name}</h3>
              <br />
              <div className="lesDonners">
                <h4>Marque : {obj.Marque}</h4>
                <h4>{obj.Modèle}</h4>
                <h4>{obj.Genre}</h4>
                <h4>{obj.Taille}</h4>
                <h4>{obj.Type}</h4>
                <h4>{obj.Puissance}</h4>
                <h4>{obj.Fonctions}</h4>
                <h4>{obj.Nombre_de_pièces}</h4>
                <h4>{obj.Revêtement}</h4>
                <h4>{obj.Puissance}</h4>
                <h4>{obj.Accessoires_nclus}</h4>
                <h4>{obj.Nombre_de_couteaux}</h4>
                <h4>{obj.Matériau_des_lames}</h4>
                <h4>{obj.Programmes}</h4>
                <h4>{obj.Type_de_mouture}</h4>
                <h4>{obj.Options_de_taille}</h4>
                <div>
                  {obj.promtion === true ? (
                    <div>
                      <h4 style={{ color: "red" }}>
                        {" "}
                        Prix : ${CaullclePrix(obj.Prix, obj.Réduction)}
                        <del>
                          <small style={{ marginLeft: "20px" }}>
                            ${obj.Prix}
                          </small>
                        </del>
                      </h4>
                    </div>
                  ) : (
                    <h4>Prix : ${obj.Prix}</h4>
                  )}
                </div>
              </div>
              <div className="quantité">
                <h4>Quantité :</h4>
                <input
                  type="number"
                  max={10}
                  min={1}
                  placeholder="1"
                  onChange={onChangeValue}
                />
              </div>
              <div>
                {obj.promtion === true ? (
                  <div>
                    <h5 className="Totale">
                      {" "}
                      Totale : ${(CaullclePrix(obj.Prix, obj.Réduction) * values).toFixed(2)}
                    </h5>
                  </div>
                ) : (
                  <h5 className="Totale">
                    {" "}
                    Totale : ${(obj.Prix * values).toFixed(2)}
                  </h5>
                )}
              </div>
              <div className="Add">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  onClick={() => {
                    AjouterId(obj.ID, values);
                    setOpen(true)
                    
                  }}
                >
                  Add To My Cart
                </button>
              </div>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      ))}
      <Modal open={open} onClose={() => setOpen(false)} />
    </MDBCard>
    
  );
}
