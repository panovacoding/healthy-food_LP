const swiper = new Swiper('.swiper', {

    navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-prev',
    },
  
  });

  const anchors = [...document.querySelectorAll('a[href*="#"]')];

  anchors.forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const blockID = anchor.getAttribute('href');
      document.querySelector('' + blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    })
  });

const burgerBtn = document.querySelector('.burger-btn');
const menuNav = document.querySelector('.mob-menu-js');

burgerBtn.addEventListener('click', () => {
  menuNav.classList.toggle('hidden');
  menuNav.classList.toggle('menu-list--mob');
});