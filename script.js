// Elements
const lastListElementOfNav = document.querySelector('.sign-in');
const navLinkListElements = [...document.querySelectorAll('.nav-link')];

// Event Listeners
navLinkListElements.forEach((navLink) => {
  navLink.addEventListener('mouseenter', showPopupMenu);
});
navLinkListElements.forEach((navLink) => {
  navLink.addEventListener('mouseout', hidePopupMenu);
});

// Functions

function showPopupMenu(event) {
  console.log(event.target);
}

function hidePopupMenu(event) {
  console.log('hiding');
}
