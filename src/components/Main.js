import React from "react";
import Api from "../utils/Api";
import Card from "./Card";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userDescription: '',
      userAvatar: '',
      cards: []
    }
  }
  componentDidMount() {
    Promise.all([
      Api.infoProfile(),
      Api.getInitialCards()
    ])
    .then(([user, cards]) => {
      this.setState({
        userName: user.name,
        userDescription: user.about,
        userAvatar: user.avatar,
        cards: cards
      });
    })
    .catch(err => console.log(`Ошибка: ${err}`));
  }
  render() {
    return (
      <main className="content">
        <section className="profile">
          <div className="profile__avatar-container" onClick={this.props.onEditAvatar}>
            <img src={this.state.userAvatar} alt="Аватарка" className="profile__avatar" />
            <div className="profile__avatar-edit-btn-container">
              <button className="profile__avatar-edit-btn" type="button" title="Редактировать аватар"></button>
            </div>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{this.state.userName}</h1>
            <p className="profile__description">{this.state.userDescription}</p>
            <button className="profile__edit button-hover" type="button" title="Редактировать профиль" onClick={this.props.onEditProfile}></button>
          </div>
          <button className="profile__add-content button-hover" type="button" title="Добавить" onClick={this.props.onAddPlace}></button>
        </section>
        <section className="cards">
          {this.state.cards.map(item => (
            <Card key={item._id} card={item} onCardClick={this.props.onCardClick} />
          ))}
        </section>
      </main>
    );
  }
}

export default Main;