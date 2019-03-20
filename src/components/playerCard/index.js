import React from "react";
import "./char.css";

const playerCard = props => (
  <div className="body-card" onClick={() => props.clickedPicture(props.id)}>
      <img className="player-pics" alt={props.name} src={props.photo} />
  </div>
);

export default playerCard;