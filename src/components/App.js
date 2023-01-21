import React from 'react';
import Header from "./Header";
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      isEditAvatarPopupOpen: false,
      selectedCard: null
    }
  }
  render() {
    return (
      <>
        <Header />
        <Main 
        onEditProfile={this.handleEditProfileClick.bind(this)}
        onAddPlace={this.handleAddPlaceClick.bind(this)}
        onEditAvatar={this.handleEditAvatarClick.bind(this)}
        onCardClick={this.handleCardClick.bind(this)}
        />
        <Footer />
        <PopupWithForm title="Редактировать профиль" name="edit" children={
          <>
            <input type="text" id="title-input" className="popup__field popup__field_type_name" placeholder="Введите имя" required minLength="2" maxLength="40" name="name" />
            <span className="popup__error title-input-error"></span>
            <input type="text" id="description-input" className="popup__field popup__field_type_desc" placeholder="Введите описание" required minLength="2" maxLength="200" name="about" />
            <span className="popup__error description-input-error"></span>
          </>
        } isOpen={this.state.isEditProfilePopupOpen}
        onClose={this.closeAllPopups.bind(this)}
        buttonText='Сохранить' />
        <PopupWithForm title="Новое место" name="add" children={
          <>
            <input type="text" id="name-input" className="popup__field" placeholder="Название" required minLength="2" maxLength="30" name="name" />
            <span className="popup__error name-input-error"></span>
            <input type="url" id="link-input" className="popup__field" placeholder="Ссылка на картинку" required name="link" />
            <span className="popup__error link-input-error"></span>
          </>
        } isOpen={this.state.isAddPlacePopupOpen} 
        onClose={this.closeAllPopups.bind(this)}
        buttonText='Создать' />
        <PopupWithForm title="Обновить аватар" name="edit-avatar" children={
          <>
            <input type="url" id="avatar-input" className="popup__field" placeholder="Ссылка на картинку" required name="edit" />
            <span className="popup__error avatar-input-error"></span>
          </>
        } isOpen={this.state.isEditAvatarPopupOpen}
        onClose={this.closeAllPopups.bind(this)}
        buttonText='Сохранить' />
        <PopupWithForm title="Вы уверены?" name="delete" buttonText='Да' buttonSelector={true} />
        <ImagePopup card={this.state.selectedCard} onClose={this.closeAllPopups.bind(this)} />
      </>
    );
  }
  handleEditProfileClick() {
    this.setState({isEditProfilePopupOpen: true});
  }
  handleAddPlaceClick() {
    this.setState({isAddPlacePopupOpen: true});
  }
  handleEditAvatarClick() {
    this.setState({isEditAvatarPopupOpen: true});
  }
  handleCardClick(link) {
    this.setState({selectedCard: link});
  }
  closeAllPopups() {
    this.setState({
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      isEditAvatarPopupOpen: false,
      selectedCard: null
    });
  }
}

export default App;