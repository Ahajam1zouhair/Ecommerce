import React from "react";
import Images from "./iphone-14.webp";
import PromoImage from "./PromoImageImage";
import "./style/styleProm.css"
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router";

export default function ImagePromotion() {
  const navigator = useNavigate()
  return (
    <div>
      <div
        className="deal_ofthe_week mt-5"
        data-aos="fade-up"
        style={{
          background:
            "linear-gradient(114deg, #2C7CF1 0%, rgba(0, 209.10, 255, 0.50) 100%)",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="deal_ofthe_week_img">
                <img src={Images} alt="" />
              </div>
              
            </div>
            <div className="col-lg-6 text-right deal_ofthe_week_col">
              <div className="deal_ofthe_week_content d-flex flex-column align-items-center float-right">
                <div className="section_title">
                  <h2>AppleiPhone 14 Pro Max</h2>
                  <divc className="continerNumber">
                    <h2 className="nuberPremo">30%</h2>
                  </divc>
                </div>
                <ul className="timer">
                  <li className="d-inline-flex flex-column justify-content-center align-items-center">
                    <div id="day" className="timer_num mt-4">
                      <PromoImage />
                    </div>
                    <Button variant="danger" size="lg" className="mt-4" onClick={()=>navigator(`/Ecommerce/proudact/40`)} >Commandez maintenant</Button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
