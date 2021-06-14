import house1 from "../resources/house1.png";
import house2 from "../resources/house2.png";
import house3 from "../resources/house3.png";
import btnLeft from "../resources/btn-left.png";
import btnRight from "../resources/btn-right.png";
import { useState } from "react";
import UnsplashImage from "./UnsplashImage";
import Panel from "./Panel";

export default function Game() {
  const [iconButtons, setIconButtons] = useState(0);
  const [backgroundImg, setBackgroundImg] = useState("image-background");

  const reset = () => {
    setIconButtons(0);
    setBackgroundImg("image-background");
  };
  // Defines how the main window is
  let main = null;
  if (backgroundImg === "image-background") {
    main = (
      <div className="houses-container">
        <img
          src={house1}
          alt="Boton de una casa"
          onClick={() => setIconButtons(2)}
          className="btn-house"
        />
        <img
          src={house2}
          alt="Boton de una casa"
          onClick={() => setIconButtons(3)}
          className="btn-house"
        />
        <img
          src={house3}
          alt="Boton de una casa"
          onClick={() => setIconButtons(4)}
          className="btn-house"
        />
      </div>
    );
  } else {
    main = <UnsplashImage itemSearch="Children" />;
  }

  return (
    <div className={backgroundImg}>
      <div className="game-container">
        <div className="h-50">{main}</div>
        <div className="h-50">
          <div className="bottom-section">
            <div className="btn-bottom">
              <img
                src={btnLeft}
                alt="Boton izquierdo"
                className="btn"
                onClick={() => setBackgroundImg("white-background")}
              />
              <img
                src={btnRight}
                alt="Boton derecho"
                className="btn"
                onClick={() => reset()}
              />
            </div>
            <Panel icons={iconButtons} />
          </div>
        </div>
      </div>
    </div>
  );
}
