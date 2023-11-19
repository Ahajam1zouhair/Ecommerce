import React from "react";
import "./imagrStayle.css";
import { useNavigate } from "react-router";

export default function ImageCommente() {
  const navigate = useNavigate()
  return (

    <>
      <div class="hero-image">
        <div class="hero-text">
          <h3>Maison et extérieur</h3>
          <button type="button" class="btn btn-primary btn-lg" onClick={()=> navigate(`categorie/${3}`)}>
            Source maintenant
          </button>
        </div>
      </div>
    </>
  );
}
