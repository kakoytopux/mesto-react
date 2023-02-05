import React from "react";

export default function ImagePopup(props) {
  return (
    <div className={`popup popup_type_expansion ${props.card ? "popup_opened" : ""}`}>
      <div className="popup__expansion-container">
        <button type="button" className="close" title="Закрыть" onClick={props.onClose}></button>
        <img src={props.card ? `${props.card.link}` : "#"} alt={props.card ? `${props.card.name}` : ""} className="popup__expansion-img" />
        <h2 className="popup__expansion-title">{props.card ? `${props.card.name}` : ""}</h2>
      </div>
    </div>
  );
}