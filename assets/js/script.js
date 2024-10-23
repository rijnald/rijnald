
// menu toggle function starts

const menuBtn = document.getElementById('menu-btn');
const navUl = document.getElementById('nav_ul');

menuBtn.addEventListener('click', () => {
  navUl.classList.toggle('show');
  menuBtn.classList.toggle('open');
});

// menu toggle function ends

// -----------------------------------------------------------------------------

// mywork page click to open popup modal starts

// Select all image cards and their respective modals
const workImgCards = document.querySelectorAll('.work_img_card');
const popupModals = document.querySelectorAll('.popup-modal');
const closeButtons = document.querySelectorAll('.close-btn');

// Open the corresponding modal when an image card is clicked
workImgCards.forEach((card, index) => {
  card.addEventListener('click', () => {
    popupModals[index].style.display = 'flex';
  });
});

// Close the modal when the close button is clicked
closeButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    popupModals[index].style.display = 'none';
  });
});

// Close the modal when clicking outside the modal content
window.addEventListener('click', (e) => {
  popupModals.forEach((modal) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});


  
// mywork page click to open popup modal ends