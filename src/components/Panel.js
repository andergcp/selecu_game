import IconButton from "./IconButton";
import imgPanel from "../resources/panel.png";
import toggle from "../resources/toggle.png";
import { useState } from "react";

export default function Panel({ icons }) {
  const [panelClass, setPanelClass] = useState("panel");
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
    <div className={panelClass}>
      <img
        alt="esconder o mostrar panel"
        src={toggle}
        className="toggle"
        onClick={() =>
          setPanelClass(panelClass === "panel" ? "hidden-panel" : "panel")
        }
      ></img>
      <img alt="panel de control" src={imgPanel} className="panel-img"></img>
      <div className="icon-btns">{displayIcons(icons)}</div>
    </div>
  );
}
