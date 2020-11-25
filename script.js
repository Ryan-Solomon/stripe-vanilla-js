// Elements
const lastListElementOfNav = document.querySelector('.nav-ul');
const navLinkListElements = [...document.querySelectorAll('.nav-link')];

// Classes
class PopupMenu {
  constructor(title, listItems) {
    this.title = title;
    this.listItems = listItems;
  }

  render() {
    // Initialize doc frag
    const docFrag = document.createDocumentFragment();
    // Create div and append to docFrag
    const hoverDetailsDiv = document.createElement('div');
    hoverDetailsDiv.classList.add('hover-details');
    hoverDetailsDiv.id = 'popup';
    docFrag.appendChild(hoverDetailsDiv);
    // Create h2 and ul and append doc Frag
    const ulElement = document.createElement('ul');
    const h2Element = document.createElement('h2');
    h2Element.textContent = this.title;
    hoverDetailsDiv.appendChild(ulElement);
    hoverDetailsDiv.appendChild(h2Element);
    // Create listItems and append to ul
    this.listItems.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      ulElement.appendChild(li);

      // Append to DOM
      lastListElementOfNav.appendChild(docFrag);
    });
  }
}

// Event Listeners
navLinkListElements.forEach((navLink) => {
  navLink.addEventListener('mouseenter', showPopupMenu);
});
navLinkListElements.forEach((navLink) => {
  navLink.addEventListener('mouseout', hidePopupMenu);
});

// Functions

function showPopupMenu(event) {
  console.log('working');
  if (event.target.id === 'company-link') {
    const popupMenu = new PopupMenu('Company', ['About', 'Customers']);
    popupMenu.render();
  }
}

function hidePopupMenu() {
  document.querySelector('#popup').remove();
}
