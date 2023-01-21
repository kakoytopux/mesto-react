import React from "react";

class PopupWithForm extends React.Component {
  render() {
    return (
      <div className={`popup popup_type_${this.props.name} ${this.props.isOpen ? "popup_opened" : ""}`}>
        <div className="popup__container">
          <button type="button" className="close" title="Закрыть" onClick={this.props.onClose}></button>
          <h2 className="popup__title">{this.props.title}</h2>
          <form className="form" name={`${this.props.name}`} noValidate>
            {this.props.children}
            <button type="submit" className={`popup__submit ${this.props.buttonSelector ? this.props.buttonSelector : ""}`}>{this.props.buttonText}</button>
          </form>
        </div>
      </div>
    );
  }
}

export default PopupWithForm;