import { useEffect, useState } from "react";
// import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import img6 from "../images/img6.jpg";

const images = [img2, img4, img3, img6, img5];

function Slider() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setI((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <img
      src={images[i]}
      className="slider"
      alt="movie poster"
    />
  );
}

export default Slider;