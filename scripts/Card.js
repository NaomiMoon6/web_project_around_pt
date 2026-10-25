import { openModal } from './utils.js';

export class Card {
  constructor(data, cardSelector, handleImageClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handleLikeIcon();
    });

    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteCard();
    });

    this._cardImage.addEventListener("click", () => {
      this._handleImageClick(this._name, this._link);
    });
  }

  _handleLikeIcon() {
    this._likeButton.classList.toggle("card__like-button_is-active");
  }

  _handleDeleteCard() {
    this._element.remove();
    this._element = null;
  }

  generateCard() {
    this._element = this._getTemplate();
    
    this._cardImage = this._element.querySelector(".card__image");
    this._cardTitle = this._element.querySelector(".card__title");
    this._likeButton = this._element.querySelector(".card__like-button");
    this._deleteButton = this._element.querySelector(".card__delete-button");

    this._cardImage.src = this._link || "images/placeholder.jpg";
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name || "Lugar sem nome";

    this._setEventListeners();

    return this._element;
  }
}