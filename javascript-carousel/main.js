var carouselIndex = 1;
showImages(carouselIndex);

function previousImage() {
  clearInterval(timer);
  timer = setInterval(previousImage, 3000);
  showImages(carouselIndex += 1);
}
var timer = setInterval(previousImage, 3000);

function nextImage() {
  clearInterval(timer);
  timer = setInterval(previousImage, 3000);
  showImages(carouselIndex -= 1);
}

function showImages() {
  var images = document.querySelectorAll('.carousel-item');
  if (carouselIndex > images.length) {
    carouselIndex = 1;
  }
  if (carouselIndex < 1) {
    carouselIndex = images.length;
  }
  for (var i = 0; i < images.length; i++) {
    images[i].classList.add('hidden');
  }
  images[carouselIndex - 1].classList.remove('hidden');
  updateButton();
}

function updateButton() {
  var circleButton = document.querySelectorAll('.circle-button');
  for (var i = 0; i < circleButton.length; i++) {
    circleButton[i].classList.remove('filled');
  }
  circleButton[carouselIndex - 1].classList.add('filled');
}

var rightButton = document.querySelector('.button-right');
var leftButton = document.querySelector('.button-left');

rightButton.addEventListener('click', nextImage);
leftButton.addEventListener('click', previousImage);

function currentImage(n) {
  showImages(carouselIndex = n);
}

var bulbasaur = document.querySelector('#bulbasaur');
bulbasaur.addEventListener('click', function () {
  clearInterval(timer);
  timer = setInterval(previousImage, 3000);
  currentImage(1);
});
var charmander = document.querySelector('#charmander');
charmander.addEventListener('click', function () {
  currentImage(2);
});
var squirtle = document.querySelector('#squirtle');
squirtle.addEventListener('click', function () {
  clearInterval(timer);
  timer = setInterval(previousImage, 3000);
  currentImage(3);
});
var pikachu = document.querySelector('#pikachu');
pikachu.addEventListener('click', function () {
  clearInterval(timer);
  timer = setInterval(previousImage, 3000);
  currentImage(4);
});
var jigglypuff = document.querySelector('#jigglypuff');
jigglypuff.addEventListener('click', function () {
  clearInterval(timer);
  timer = setInterval(previousImage, 3000);
  currentImage(0);
});
