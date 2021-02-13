/* Put your javascript in here */

let slideposition = 0;
const slides = document.getElementsByClassName('images');
const totalSlides = slides.length;

document.
  getElementsByClassName('arrow next')
  .addEventListener("click", function() {
    moveToNextSlide();
  });
  document.
  getElementsByClassName('arrow prev')
  .addEventListener("click", function() {
    moveToPrevSlide();
  });

  function updateSlidePosition() {
    for (let slide of slides){
      slide.classList.remove('images--visible');
      slide.classList.remove('images--hidden');
    }
    slides[slidePosition].classList.add('images--visible');
  }


  function moveToNextSlide() {
    if (slideposition == totalSlides-1){
      slideposition = 0;
    } else {
      slidePosition++;
    }
    updateSlidePosition();
  }

  function moveToPrevSlide() {
    if (slideposition == 0){
      slideposition = totalSlides - 1;
    } else {
      slidePosition--;
    }
    updateSlidePosition();
  }







// const carouselArray = [];
// for (let i = 0; i < carouselArray.querySelectorAll('.carsoul_img div').length; i++) {
// carousellArray.push(carouselArray.querySelectorAll('.carsoul_img div')[i].src);
// }

// console.log(carouselArray);
// let currentSlideIndex = -1;


// function advanceSliderItem() {
// currentSlideIndex++;

// if (currentSlideIndex >= carouselArray.length) {
// currentSlideIndex = 0;
// }
// }


// window.advanceslider = advanceSliderItem;
  