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

initialCards.forEach(function(item){
  console.log(item);
})

const editModal = document.querySelector("#edit-popup");
const openEditModal = document.querySelector(".profile__edit-button");
const closeEditModal = editModal.querySelector(".popup__close");

function openModal(modal) {
  modal.classList.add("popup_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
}

const userName = document.querySelector(".profile__title");
const userDescription = document.querySelector(".profile__description");
const editForm = document.querySelector("#edit-profile-form");
const nameInput = editForm.querySelector(".popup__input_type_name");
const descriptionInput = editForm.querySelector(".popup__input_type_description");

const currentInfo = {
  name: userName.textContent,
  description: userDescription.textContent
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
  closeModal(editModal);
}

editForm.addEventListener('submit', handleProfileFormSubmit);

openEditModal.addEventListener("click" , function (event) {
  handleOpenEditModal();
});

closeEditModal.addEventListener("click" , function (event) {
  closeModal(editModal);
});