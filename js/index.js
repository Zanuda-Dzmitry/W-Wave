  /*  Modal  */

let loginMenu = document.querySelectorAll('.madal');
let loginBtn = document.querySelectorAll('.login');
let loginCloce = document.querySelectorAll('.madal__btn-cloce');

 loginBtn.forEach(function (item, i) {
    item.addEventListener('click', function (evt) {
      evt.preventDefault();

      loginMenu.forEach(function (item , i) {
        loginMenu[i].classList.toggle('madal--active');
      });
    });
  });

  loginCloce.forEach(function (item, i) {
    item.addEventListener('click', function (evt) {
      evt.preventDefault();

      loginMenu.forEach(function (item , i) {
        loginMenu[i].classList.toggle('madal--active');
      });
    });
  });

  /*  Header  */

  // Header__menu-top

  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('.burger').classList.toggle('header__burger-top--active')
    document.querySelector('.header__menu-top').classList.toggle('header__background--active')
    document.querySelector('.nav').classList.toggle('nav--active')
    document.querySelector('.header__menu-bottom').classList.toggle('header__background-bottom--active')
    document.querySelector('.header__informacion-list').classList.toggle('header__informacion-list--active')
  });

  // Header__menu-bottom

    document.querySelector('#header__informacion-btn').addEventListener('click', function () {
      document.querySelector('.header__informacion-btn').classList.toggle('header__informacion-btn--active')
      document.querySelector('.header__menu-bottom').classList.toggle('header__background-informacion--active')
      document.querySelector('.header__informacion-blok').classList.toggle('header__informacion-blok--active')
      document.querySelector('.header__informacion-svg').classList.toggle('header__informacion-svg--active')
    });

   // Header__music
   
  let HbtnPlay = document.querySelectorAll('.header__music-btn');
  HbtnPlay.forEach(function(el) {
    el.addEventListener('click', function(ev) {
      ev.stopPropagation();
        HbtnPlay.forEach(el => { if (el != this) { el.classList.remove('header__music--active') }; });
          this.classList.toggle('header__music--active');
  });
  });
  
  /*  Podcasts  */

let btnPlay = document.querySelectorAll('.podcasts__btn');
btnPlay.forEach(function(el) {
  el.addEventListener('click', function(ev) {
    ev.stopPropagation();
      btnPlay.forEach(el => { if (el != this) { el.classList.remove('podcasts__btn--active') }; });
        this.classList.toggle('podcasts__btn--active');
});
});

let boxMore = document.querySelectorAll('.podcasts__col');
let btnMore = document.querySelectorAll('.podcasts__btn-next');

  btnMore.forEach(function (item, i) {
    item.addEventListener('click', function (evt) {
      evt.preventDefault();

      boxMore.forEach(function (item , i) {
        boxMore[i].classList.toggle('podcasts__col--active');
      });
    });
  });

  function changeText(ev) {
    if(ev.getAttribute('data-show') === "true") {
        ev.innerText = "Скрыть"
        ev.setAttribute('data-show', "false"); 
    }
    else {
        ev.innerText = "Ещё подкасты"
        ev.setAttribute('data-show', "true"); 
    }
};

// Transfers

const element = document.querySelector('select');
const choices = new Choices(element, {
  searchEnabled: false,
});

// Guests

new Accordion('.accordion-container');

let tabsBtn = document.querySelectorAll('.guests__panel-btn');
let tabsBlok = document.querySelectorAll('.guests__items');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('guests__panel-btn--active') });
    e.currentTarget.classList.add('guests__panel-btn--active');

    tabsBlok.forEach(function (element) { element.classList.remove('guests__items--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('guests__items--active');

  });
});

// About 

const swiper = new Swiper('.swiper', {
	slidesPerView: 2,
	spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  breakpoints: {

    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    576: {
      slidesPerView: 3,
      spaceBetween: 30,
    },

    766: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    920: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },

    1400: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    
  }
});

new JustValidate('.form', {
  colorWrong: '#FF5C00',
  rules: {
    name: {
      required: true,
      minLength: 3,
      maxLength: 30,
    },
    text: {
      required: true,
      minLength: 3,
    },
    email: {
      required: true,
      email: true,
    },
  },
  messages: {
    name: {
      required: "Ошибка",
      minLength: 'Поле должно содержать минимум 3&nbsp;символа',
      maxLength: 'Поле должно содержать максимум 30&nbsp;символа'
    },
    text: {
      required: "Ошибка",
      function: "Не&nbsp;достаточно количество символов",
    },
    email: {
      required: "Ошибка",
    }
  },
});




