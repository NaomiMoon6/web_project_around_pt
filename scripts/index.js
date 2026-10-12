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
]

const editModal = document.querySelector("#edit-popup");
const openEditModal = document.querySelector(".profile__edit-button");
const closeEditModal = editModal.querySelector(".popup__close");

const userName = document.querySelector(".profile__title");
const userDescription = document.querySelector(".profile__description");
const editForm = document.querySelector("#edit-profile-form");
const nameInput = editForm.querySelector(".popup__input_type_name");
const descriptionInput = editForm.querySelector(".popup__input_type_description");

const currentInfo = {
  name: userName.textContent,
  description: userDescription.textContent
}


function openModal(modal) {
  modal.classList.add("popup_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
}

function fillProfileForm() {
  nameInput.value = currentInfo.name;
  descriptionInput.value = currentInfo.description;
}

function handleOpenEditModal() {
  openModal(editModal);
  fillProfileForm();
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userDescription.textContent = descriptionInput.value;

  currentInfo.name = nameInput.value;
  currentInfo.description =descriptionInput.value;
  closeModal(editModal);
}

editForm.addEventListener('submit', handleProfileFormSubmit);

openEditModal.addEventListener("click" , function (event) {
  handleOpenEditModal();
});

closeEditModal.addEventListener("click" , function (event) {
  closeModal(editModal);
});

const cardList = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#card-template").content.querySelector(".card");

const imageModal = document.querySelector("#image-popup");
const closeImageModal = imageModal.querySelector(".popup__close");
const imgModalImg = imageModal.querySelector(".popup__image");
const imgModalCaption = imageModal.querySelector(".popup__caption");

closeImageModal.addEventListener("click" , function (event) {
  closeModal(imageModal);
});

function getCardElement(name, link) {
  const card = cardTemplate.cloneNode(true);
  const title = card.querySelector(".card__title");
  const image = card.querySelector(".card__image");
  const like = card.querySelector(".card__like-button");
  const del = card.querySelector(".card__delete-button");

  title.textContent = name || "Lugar sem nome";
  image.src = link || "images/placeholder.jpg";

  like.addEventListener("click" , function (event) {
    like.classList.toggle("card__like-button_is-active");
  });

  del.addEventListener("click" , function (event) {
    card.remove();
  });

  image.addEventListener("click" , function (event) {
    openModal(imageModal);
    imgModalImg.src = link || "images/placeholder.jpg";
    imgModalImg.alt = name;
    imgModalCaption.textContent = name || "Lugar sem nome";
  });

  return card;
}

function renderCard(name, link, container) {
  const cardElement = getCardElement(name, link);
  container.append(cardElement);
}

initialCards.forEach(function (item) {
  renderCard(item.name, item.link, cardList)
}) 

const newModal = document.querySelector("#new-card-popup");
const openNewModal = document.querySelector(".profile__add-button");
const closeNewModal = newModal.querySelector(".popup__close");

const newForm = document.querySelector("#new-card-form");
const placeName = newForm.querySelector(".popup__input_type_card-name");
const placeImg = newForm.querySelector(".popup__input_type_url");

openNewModal.addEventListener("click" , function (event) {
  openModal(newModal);
});

closeNewModal.addEventListener("click" , function (event) {
  closeModal(newModal);
});

newForm.addEventListener('submit', handleCardFormSubmit);

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  renderCard(placeName.value, placeImg.value, cardList);
  evt.target.reset();
  closeModal(newModal);
}