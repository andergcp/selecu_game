import React from "react";
import "../App.scss";
import bgImg from "../resources/btn.png";
import {
  FcAlarmClock,
  FcBinoculars,
  FcDislike,
  FcGallery,
  FcIdea,
  FcRating,
} from "react-icons/fc";

export default class IconButton extends React.Component {
  chooseIcon(icon) {
    switch (icon) {
      case 0:
        return <FcAlarmClock className="btn-icon" />;
      case 1:
        return <FcBinoculars className="btn-icon" />;
      case 2:
        return <FcDislike className="btn-icon" />;
      case 3:
        return <FcGallery className="btn-icon" />;
      case 4:
        return <FcIdea className="btn-icon" />;
      case 5:
        return <FcRating className="btn-icon" />;
      default:
        return <FcAlarmClock className="btn-icon" />;
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      icon: props.icon,
    };
  }

  render() {
    return (
      <div className="btn-container">
        <img alt="Bombilla" src={bgImg} className="btn-bg" />
        {this.chooseIcon(this.state.icon)}
      </div>
    );
  }
}
