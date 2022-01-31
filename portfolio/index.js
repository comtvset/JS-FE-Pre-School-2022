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