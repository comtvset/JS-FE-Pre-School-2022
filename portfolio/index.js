const i18Obj = {
  'en': {
    'skills': 'Skills',
    'portfolio': 'Portfolio',
    'video': 'Video',
    'price': 'Price',
    'contacts': 'Contacts',
    'hero-title': 'Alexa Rise',
    'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
    'hire': 'Hire me',
    'skill-title-1': 'Digital photography',
    'skill-text-1': 'High-quality photos in the studio and on the nature',
    'skills-subtitle2': 'High-quality photos in the studio and on the nature',
    'skill-title-2': 'Video shooting',
    'skill-text-2': 'Capture your moments so that they always stay with you',
    'skill-title-3': 'Rotouch',
    'skill-text-3': 'I strive to make photography surpass reality',
    'skill-title-4': 'Audio',
    'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
    'winter': 'Winter',
    'spring': 'Spring',
    'summer': 'Summer',
    'autumn': 'Autumn',
    'price-description-1-span-1': 'One location',
    'price-description-1-span-2': '120 photos in color',
    'price-description-1-span-3': '12 photos in retouch',
    'price-description-1-span-4': 'Readiness 2-3 weeks',
    'price-description-1-span-5': 'Make up, visage',
    'price-description-2-span-1': 'One or two locations',
    'price-description-2-span-2': '200 photos in color',
    'price-description-2-span-3': '20 photos in retouch',
    'price-description-2-span-4': 'Readiness 1-2 weeks',
    'price-description-2-span-5': 'Make up, visage',
    'price-description-3-span-1': 'Three locations or more',
    'price-description-3-span-2': '300 photos in color',
    'price-description-3-span-3': '50 photos in retouch',
    'price-description-3-span-4': 'Readiness 1 week',
    'price-description-3-span-5': 'Make up, visage, hairstyle',
    'order': 'Order shooting',
    'contact-me': 'Contact me',
    'send-message': 'Send message'
  },
  'ru': {
    'skills': 'Навыки',
    'portfolio': 'Портфолио',
    'video': 'Видео',
    'price': 'Цены',
    'contacts': 'Контакты',
    'hero-title': 'Алекса Райс',
    'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
    'hire': 'Пригласить',
    'skill-title-1': 'Фотография',
    'skill-text-1': 'Высококачественные фото в студии и на природе',
    'skills-subtitle2': 'Высококачественные фото в студии и на природе',
    'skill-title-2': 'Видеосъемка',
    'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
    'skill-title-3': 'Ретушь',
    'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
    'skill-title-4': 'Звук',
    'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
    'winter': 'Зима',
    'spring': 'Весна',
    'summer': 'Лето',
    'autumn': 'Осень',
    'price-description-1-span-1': 'Одна локация',
    'price-description-1-span-2': '120 цветных фото',
    'price-description-1-span-3': '12 отретушированных фото',
    'price-description-1-span-4': 'Готовность через 2-3 недели',
    'price-description-1-span-5': 'Макияж, визаж',
    'price-description-2-span-1': 'Одна-две локации',
    'price-description-2-span-2': '200 цветных фото',
    'price-description-2-span-3': '20 отретушированных фото',
    'price-description-2-span-4': 'Готовность через 1-2 недели',
    'price-description-2-span-5': 'Макияж, визаж',
    'price-description-3-span-1': 'Три локации и больше',
    'price-description-3-span-2': '300 цветных фото',
    'price-description-3-span-3': '50 отретушированных фото',
    'price-description-3-span-4': 'Готовность через 1 неделю',
    'price-description-3-span-5': 'Макияж, визаж, прическа',
    'order': 'Заказать съемку',
    'contact-me': 'Свяжитесь со мной',
    'send-message': 'Отправить'
  }
}


const hamburger = document.querySelector('.hamburger')

function toggleMenu() {
  hamburger.classList.toggle('open')
}
hamburger.addEventListener('click', toggleMenu)


const portfolioBtn = document.querySelector('.portfolio-button', '.intro-button', '.contact-button', 'pricebutton_style')
const portfolioImages = document.querySelectorAll('.portfolio-image')
const portfolioBtns = document.querySelector('.wrapp_portfolio1')

// portfolioBtn.addEventListener('click', () => {
//   portfolioImages.forEach((img, index) => img.src = `./assets/img/winter/${index + 1}.jpg`)
// });

//Button season
function changeImage(event) {
  if (event.target.classList.contains('portfolio-button')) {
     if(event.target.dataset.season === 'winter') {
        portfolioImages.forEach((img, index) => img.src = `./assets/img/winter/${index + 1}.jpg`)

     } else if (event.target.dataset.season === 'spring') {
        portfolioImages.forEach((img, index) => img.src = `./assets/img/spring/${index + 1}.jpg`)

     } else if (event.target.dataset.season === 'summer') {
        portfolioImages.forEach((img, index) => img.src = `./assets/img/summer/${index + 1}.jpg`)

     } else if (event.target.dataset.season === 'autumn') {
        portfolioImages.forEach((img, index) => img.src = `./assets/img/autumn/${index +1}.jpg`)
     }
  }
}
portfolioBtns.addEventListener('click', changeImage);

//Cash image
const seasons = ['winter', 'spring', 'summer', 'autumn'];
function preloadImages(array) {
  array.forEach((seasons) => {
  for(let i = 1; i <= 6; i++) {
    const img = new Image()
    img.src = `./assets/img/${seasons}/${i}.jpg`
  }
})
}
preloadImages(seasons)

//Active button

portfolioBtn.classList.add('active');

//Translate
//import i18Obj from './translate.js' //<---- не работает!!!


const buttonLang = document.querySelectorAll('.nav-link2')
const buttonEn = document.querySelector('.en')
const buttonRu = document.querySelector('.ru')
const language = document.querySelectorAll('[data-i18]')

function getTranslate(event) {      
  let lang = event.target.textContent
  let current = document.getElementsByClassName('nav-link2')
  current[0].classList.remove('nav-link2')
  this.classList.add('nav-link2')
  
  if (lang === 'ru') {   //<---- РАЗОБРАТЬ ЭТОТ КОД!!!
     language.forEach((data) => {
        let getData = data.dataset.i18
        data.textContent = i18Obj[lang][getData]
     })
  } else if (lang === 'en') {
     language.forEach((data) => {
        let getData = data.dataset.i18
        data.textContent = i18Obj[lang][getData]
     })
  }
}

buttonLang.forEach((lan) => {
  lan.addEventListener('click', getTranslate)
})