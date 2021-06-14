import house1 from "../resources/house1.png";
import house2 from "../resources/house2.png";
import house3 from "../resources/house3.png";
import { useState } from "react";
import UnsplashImage from "./UnsplashImage";
import Panel from "./Panel";

export default function Game() {
  const [iconButtons, setIconButtons] = useState(0);
  const [backgroundImg, setBackgroundImg] = useState("image-background");

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
          <Panel icons={iconButtons} />
        </div>
      </div>
    </div>
  );
}
