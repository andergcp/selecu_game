import "./App.scss";
import house1 from "./resources/house1.png";
import house2 from "./resources/house2.png";
import house3 from "./resources/house3.png";
import imgPanel from "./resources/panel.png";
import toggle from "./resources/toggle.png";
import { useState } from "react";
import IconButton from "./components/IconButton";
import UnsplashImage from "./components/UnsplashImage";

function App() {
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
          onClick={() => setIconButtons(1)}
          className="btn-house"
        />
        <img
          src={house2}
          alt="Boton de una casa"
          onClick={() => setIconButtons(2)}
          className="btn-house"
        />
        <img
          src={house3}
          alt="Boton de una casa"
          onClick={() => setIconButtons(3)}
          className="btn-house"
        />
      </div>
    );
  } else {
    main = <UnsplashImage itemSearch="Children" />;
  }

  let panel = (
    <>
      <div className="panel">
        <img
          alt="esconde o mostrar panel"
          src={toggle}
          className="toggle"
        ></img>
        <img alt="panel de control" src={imgPanel} className="panel-img"></img>
      </div>
      <div className="icon-btns">
        <IconButton />
      </div>
    </>
  );

  return (
    <div className={backgroundImg}>
      {main}
      {panel}
    </div>
  );
}

export default App;
