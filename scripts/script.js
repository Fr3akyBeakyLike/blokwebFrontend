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

// Agenda page
filterButton = document.querySelector("header nav#agenda il li:nth-of-type(1) button")

filterButton.addEventListener("click", showFilters);

function showFilters() {
    let showFilters = document.querySelector("")
    showFilters.classList.toggle("")
}