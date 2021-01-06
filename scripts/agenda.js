// Agenda page
filterButton = document.querySelector("body nav#agenda ul li:nth-of-type(1) button")
annuleerButton = document.querySelector("body nav:nth-of-type(2) ul:nth-of-type(3) li:nth-of-type(2) button")
verfijnButton = document.querySelector("body nav:nth-of-type(2) ul:nth-of-type(3) li:nth-of-type(1) button")

verfijnButton.addEventListener("click", showFilters);
annuleerButton.addEventListener("click", showFilters);
filterButton.addEventListener("click", showFilters);

function showFilters() {
    let showFilters = document.querySelector("nav:nth-of-type(2)");
    showFilters.classList.toggle("filters");
}

// Styling filter buttons on click
clickFilter = document.querySelector("body nav:nth-of-type(2) ul:nth-of-type(2) li:nth-of-type(3) button");

clickFilter.addEventListener("click", styleList);
clickFilter.addEventListener("click", styleButton);

function styleList() {
    let styleList = document.querySelector("body nav:nth-of-type(2) ul:nth-of-type(2) li:nth-of-type(3)");
    styleList.classList.toggle("clickButton");
}

function styleButton() {
    let styleButton = document.querySelector("body nav:nth-of-type(2) ul:nth-of-type(2) li:nth-of-type(3) button");
    styleButton.classList.toggle("clickButton");
}