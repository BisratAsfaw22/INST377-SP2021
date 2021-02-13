/* Put your javascript in here */

const carsoulArray = [];
for (let i = 0; i < document.querySelectorAll('.carousel_img').length; i++) {
  slideArray.push(document.querySelectorAll('.carousel_img')[i].dataset.background);
}

console.log(carsouleArray);
let currentSlideIndex = -1;


function advanceSliderItem() {
  currentSlideIndex++;

  if (currentSlideIndex >= carouselArray.length) {
    currentSlideIndex = 0;}

  }