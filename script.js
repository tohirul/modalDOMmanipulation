// @ts-nocheck
"use strict";
// Definition of elements that will be modified by DOM
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const openModal = () => {
    console.log("clicked");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeModal = () => {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

for (const btnOpen of btnsOpenModal) {
    btnOpen.onclick = () => openModal();
    btnClose.onclick = () => closeModal();
}

overlay.onclick = () => {
    closeModal();
};

document.onkeyup = (e) => {
    if (e.key === "Escape") {
        !modal.classList.contains("hidden") && closeModal();
    }
};
