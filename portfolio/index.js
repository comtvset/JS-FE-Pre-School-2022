const hamburger = document.querySelector('.hamburger');

function toggleMenu() {
  hamburger.classList.toggle('open');
}
hamburger.addEventListener('click', toggleMenu);


// const portfolioBtn = document.querySelector('.portfolio-button');
// const portfolioImage = document.querySelector('.portfolio-image');

// portfolioBtn.addEventListener('click', () => {
//    portfolioImage.src = "./assets/img/winter/1.jpg"
// });

const portfolioBtn = document.querySelector('.portfolio-button');
const portfolioImages = document.querySelectorAll('.portfolio-image');

portfolioBtn.addEventListener('click', () => {
  portfolioImages.forEach((img, index) => img.src = `./assets/img/winter/${index + 1}.jpg`)
});

const portfolioBtns = document.querySelector('.wrapper');
function changeImage(event) {
  if(event.target.classList.contains('portfolio-button')) {
    dataset.season = "winter"
    dataset.season = "spring"
    dataset.season = "summer"
    dataset.season = "autumn"
  }
}