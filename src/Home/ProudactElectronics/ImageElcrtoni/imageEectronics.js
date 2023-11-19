import React from "react";
import "./imageStayle.css";
import { useNavigate } from "react-router";

export default function ImageCommente() {
  const navigate = useNavigate()
  return (
    <>
      <div class="elctronice-image">
        <div class="hero-text">
          <h3>Électronique </h3>
          <button type="button" class="btn btn-primary btn-lg" onClick={()=> navigate(`categorie/${1}`)}>
            Source maintenant
          </button>
        </div>
      </div>
    </>
  );
}
