import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (
      <article className="card">
        <img src={this.props.card.link} alt="Картинка" className="card__image" onClick={this.handleClick} />
        <button type="button" className="card__delete button-hover" title="Удалить"></button>
        <div className="card__block">
          <h2 className="card__title">{this.props.card.name}</h2>
          <div className="card__like-container">
            <button type="button" className="card__like" title="Нравится"></button>
            <p className="card__like-quantity">{this.props.card.likes.length}</p>
          </div>
        </div>
      </article>
    );
  }
  handleClick() {
    this.props.onCardClick(this.props.card.link);
  }
}

export default Card;