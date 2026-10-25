export function openModal(modal) {
  modal.classList.add("popup_is-opened");
  document.addEventListener("keydown", closeByEscape);
}

export function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closeByEscape);
}

function closeByEscape(evt) {
  if (evt.key === "Escape") {
    const openedModal = document.querySelector(".popup_is-opened");
    if (openedModal) {
      closeModal(openedModal);
    }
  }
}

export function setupCloseModalListeners() {
  const overlays = document.querySelectorAll(".popup");
  
  overlays.forEach((popup) => {
    popup.addEventListener("click", (event) => {
      if (event.target === popup) {
        closeModal(popup);
      }
    });

    const closeButton = popup.querySelector(".popup__close");
    if (closeButton) {
      closeButton.addEventListener("click", () => {
        closeModal(popup);
      });
    }
  });
}