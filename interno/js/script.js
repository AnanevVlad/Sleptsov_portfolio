"use strict"

document.addEventListener('click', documentClick);

function documentClick(e) {
   const targetItem = e.target;

   if (targetItem.closest('.nav__button')) {
      document.documentElement.classList.toggle('nav-open')
   }
}


new Swiper('.reviews__row', {

   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
   },

   slidesPerView: 1,

   spaceBetween: 30,

   breakpoints: {
      599: {
         slidesPerView: 2,
      },

      767.8: {
         slidesPerView: 3,
      },
   }
});
/*
*
* function mainNavigation() {
   const ACTIVE_STATE_MODIFIER = 'is-active';
   const MENU_STATE_MODIFIER = 'is-menu-opened';

   const body = document.body;
   const navigation = document.querySelector('.nav');
   const navigationBtn = document.querySelector('.header__icon');

   function openNavigation() {
      body.classList.add(MENU_STATE_MODIFIER);
      navigation.classList.add(ACTIVE_STATE_MODIFIER);
      navigationBtn.classList.add(ACTIVE_STATE_MODIFIER);

      navigationBtn.removeEventListener('click', openNavigation);
      navigationBtn.addEventListener('click', closeNavigation);
   }

   function closeNavigation() {
      body.classList.remove(MENU_STATE_MODIFIER);
      navigation.classList.remove(ACTIVE_STATE_MODIFIER);
      navigationBtn.classList.remove(ACTIVE_STATE_MODIFIER);

      navigationBtn.removeEventListener('click', closeNavigation);
      navigationBtn.addEventListener('click', openNavigation);
   }

   navigationBtn.addEventListener('click', openNavigation);
}

document.addEventListener('DOMContentLoaded', function () {
   mainNavigation();
});
*
* */
