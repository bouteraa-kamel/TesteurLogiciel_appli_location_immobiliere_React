import { useState } from "react";
import "./Slideshow.scss";

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function previousImage() {
    setCurrentIndex(
      currentIndex === 0 ? pictures.length - 1 : currentIndex - 1,
    );
  }

  function nextImage() {
    setCurrentIndex(
      currentIndex === pictures.length - 1 ? 0 : currentIndex + 1,
    );
  }

  return (
    <div className="slideshow">
      <img src={pictures[currentIndex]} alt="Logement" />

      {pictures.length > 1 && (
        <>
          <button className="slideshow-arrow left" onClick={previousImage}>
            ❮
          </button>

          <button className="slideshow-arrow right" onClick={nextImage}>
            ❯
          </button>

          <span className="slideshow-count">
            {currentIndex + 1}/{pictures.length}
          </span>
        </>
      )}
    </div>
  );
}

export default Slideshow;
