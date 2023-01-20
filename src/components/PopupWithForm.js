import React from "react";

class PopupWithForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className={`popup popup_type_${this.props.name} ${this.props.isOpen}`}>
          <div className="popup__container">
            <button type="button" className="close" title="Закрыть" onClick={this.props.onClose}></button>
            <h2 className="popup__title">{this.props.title}</h2>
            <form className="form" name={`${this.props.name}`} noValidate>
              {this.props.children}
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default PopupWithForm;