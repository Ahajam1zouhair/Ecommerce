import { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./image.css";
import image1 from "./pexels-cottonbro-studio-4065876.jpg";
import image2 from "./pexels-yan-krukau-5793953.jpg";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="imgCarousel" src={image1} />
        <Carousel.Caption>
          <h3
            style={{
              color: "#1C1C1C",
              fontSize: 32,
              fontFamily: "Inter",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="imgCarousel" src={image2} />
        <Carousel.Caption>
          {/* <h3
            style={{
              color: "#1C1C1C",
              fontSize: 32,
              fontFamily: "Inter",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            Welcome to our store
          </h3> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
