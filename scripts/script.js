// JavaScript Document

// Melkweg home page
firstButton = document.querySelector("header nav ul:nth-of-type(2) li:nth-of-type(5) button:nth-of-type(1)")
incomingList = document.querySelector("header nav ul:nth-of-type(2) li:nth-of-type(6)")

incomingList.addEventListener("click", moveSearchForm)
firstButton.addEventListener("click", moveSearchForm);

function moveSearchForm() {
    let moveSearchForm = document.querySelector("header nav ul:nth-of-type(2) li:nth-of-type(6)");
    moveSearchForm.classList.toggle("moveForm");
}