import React, {useState, useEffect, useContext} from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function EditProfilePopup(props) {
  const currentUser = useContext(CurrentUserContext);
  const [userName, setUserName] = useState('');
  const [userAbout, setUserAbout] = useState('');
  useEffect(() => {
    setUserName(currentUser.name ?? '');
    setUserAbout(currentUser.about ?? '');
  }, [currentUser, props.isOpen]);
  function handleChangeName(evt) {
    setUserName(evt.target.value);
  }
  function handleChangeDesc(evt) {
    setUserAbout(evt.target.value);
  }
  function handleSubmit(evt) {
    evt.preventDefault();

    props.onUpdateUser({
      name: userName,
      about: userAbout
    });
  }
  return (
    <PopupWithForm title="Редактировать профиль" name="edit" children={
      <>
        <input type="text" value={userName} onChange={handleChangeName} id="title-input" className="popup__field popup__field_type_name" placeholder="Введите имя" required minLength="2" maxLength="40" name="name" />
        <span className="popup__error title-input-error"></span>
        <input type="text" value={userAbout} onChange={handleChangeDesc} id="description-input" className="popup__field popup__field_type_desc" placeholder="Введите описание" required minLength="2" maxLength="200" name="about" />
        <span className="popup__error description-input-error"></span>
      </>
    } isOpen={props.isOpen}
    onClose={props.onClose}
    buttonText='Сохранить' onSubmit={handleSubmit} />
  );
}