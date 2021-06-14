import IconButton from "./IconButton";
import imgPanel from "../resources/panel.png";
import toggle from "../resources/toggle.png";
import { useState } from "react";

export default function Panel({ icons }) {
  const [panelDisplay, setPanelDisplay] = useState(true);
  const displayIcons = (numIcons) => {
    let iconsArray = [];
    while (numIcons > 0) {
      const randomIcon = Math.floor(Math.random() * 5);
      iconsArray.push(<IconButton icon={randomIcon} key={numIcons} />);
      numIcons--;
    }
    return iconsArray;
  };
  return (
    <div>
      <div className="panel">
        <img
          alt="esconder o mostrar panel"
          src={toggle}
          className={`toggle ${panelDisplay ? "no-hidden" : "toggleBottom"}`}
          onClick={() => setPanelDisplay(!panelDisplay)}
        ></img>
        <img
          alt="panel de control"
          src={imgPanel}
          className={`panel-img ${panelDisplay ? "no-hidden" : "hidden"}`}
        ></img>
        <div className={`icon-btns ${panelDisplay ? "no-hidden" : "hidden"}`}>
          {displayIcons(icons)}
        </div>
      </div>
    </div>
  );
}
