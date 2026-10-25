import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { openModal, closeModal, setupCloseModalListeners } from './utils.js';

const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"
  },
  {
    name: "Parque Nacional Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
  }
];

const validationConfig = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
};

const editModal = document.querySelector("#edit-popup");
const openEditModalBtn = document.querySelector(".profile__edit-button");
const userName = document.querySelector(".profile__title");
const userDescription = document.querySelector(".profile__description");
const editForm = document.querySelector("#edit-profile-form");
const nameInput = editForm.querySelector(".popup__input_type_name");
const descriptionInput = editForm.querySelector(".popup__input_type_description");

const newModal = document.querySelector("#new-card-popup");
const openNewModalBtn = document.querySelector(".profile__add-button");
const newForm = document.querySelector("#new-card-form");
const placeName = newForm.querySelector(".popup__input_type_card-name");
const placeImg = newForm.querySelector(".popup__input_type_url");

const imageModal = document.querySelector("#image-popup");
const imgModalImg = imageModal.querySelector(".popup__image");
const imgModalCaption = imageModal.querySelector(".popup__caption");

const cardList = document.querySelector(".cards__list");

function handleImageClick(name, link) {
  imgModalImg.src = link;
  imgModalImg.alt = name;
  imgModalCaption.textContent = name;
  openModal(imageModal);
}

function createCard(item) {
  const card = new Card(item, "#card-template", handleImageClick);
  return card.generateCard();
}

function renderCard(item, container) {
  const cardElement = createCard(item);
  container.prepend(cardElement);
}

initialCards.forEach((item) => {
  renderCard(item, cardList);
});

openEditModalBtn.addEventListener("click", () => {
  nameInput.value = userName.textContent;
  descriptionInput.value = userDescription.textContent;
  editFormValidator.resetValidation();
  openModal(editModal);
});

editForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userDescription.textContent = descriptionInput.value;
  closeModal(editModal);
});

openNewModalBtn.addEventListener("click", () => {
  newForm.reset();
  newFormValidator.resetValidation();
  openModal(newModal);
});

newForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const cardData = {
    name: placeName.value,
    link: placeImg.value
  };
  renderCard(cardData, cardList);
  closeModal(newModal);
  newForm.reset();
});

setupCloseModalListeners();

const editFormValidator = new FormValidator(validationConfig, editForm);
editFormValidator.enableValidation();

const newFormValidator = new FormValidator(validationConfig, newForm);
newFormValidator.enableValidation();