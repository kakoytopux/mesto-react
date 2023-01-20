import React from "react";

class ImagePopup extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={`popup popup_type_expansion ${this.props.card ? "popup_opened" : ""}`}>
        <div className="popup__expansion-container">
          <button type="button" className="close" title="Закрыть" onClick={this.props.onClose}></button>
          <img src={this.props.card ? `${this.props.card}` : "#"} alt="Картинка" className="popup__expansion-img" />
          <h2 className="popup__expansion-title"></h2>
        </div>
      </div>
    );
  }
}

export default ImagePopup;