import React from "react";
import "./imagrStayle.css";
import { useNavigate } from "react-router";


export default function ImageCommente() {
  const navigate = useNavigate()
  return (

    <>
      <div className="hero-image">
        <div className="hero-text">
          <h3>Maison et extérieur</h3>
          <button type="button"  onClick={()=> navigate(`/Ecommerce/categorie/${3}`)}  className="btn btn-primary btn-lg" >
            Source maintenant
          </button>
        </div>
      </div>
    </>
  );
}
