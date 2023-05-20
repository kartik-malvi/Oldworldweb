const serviceBtn = document.querySelector('.serviceBtn');
const serviceToggle = document.querySelector('.serviceToggle');
serviceToggle.style.display = 'none'; // initially hide the serviceToggle element
serviceBtn.addEventListener('click', ()=>{
    serviceToggle.style.display = 'block'; // show the serviceToggle element
    serviceToggle.classList.toggle('open'); // toggle the 'open' class
})


// carousal

const sliderContainer = document.querySelector('.slider-container');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let slidePosition = 0;
const slides = document.getElementsByClassName('slide');
const totalSlides = slides.length;

prevBtn.addEventListener('click', () => {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 3;
  } else {
    slidePosition--;
  }
  updateSliderPosition();
});

nextBtn.addEventListener('click', () => {
  if (slidePosition === totalSlides - 3) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updateSliderPosition();
});

function updateSliderPosition() {
  sliderContainer.style.transform = `translateX(-${slidePosition * (380 +  25)}px)`;
}

// caseCarousal

// cosnt caseSlider = Dicument.querySelector('.sliderConatiner')
// const caseContainer =document.querySelector('.caseContainer')
// const casePre = document.getElementById('cprevBtn');
// const caseNext = document.getElementById('cnextBtn');

// let caseSlidePosition = 0;
// const caseSlides = document.getElementsByClassName('caseSlide')
// const totalCaseSlide = caseSlides.length;

// casePre.addEventListener('click', () => {
//   if(caseSlidePosition === 0) {
//     caseSlidePosition = totalCaseSlide - 3;
//   }else{
//     caseSlidePosition--;
//   }
//   caseUpdatePosition();
// });
// caseNext.addEventListener('click',  () =>{
//   if(caseSlidePosition === totalCaseSlide - 3){
//     caseSlidePosition = 0;
//   }else{
//     caseSlidePosition++;
//   }
//   caseUpdatePosition();
// });
// function caseUpdatePosition() {
//   caseContainer.style.transform = `translateX(-${caseSlidePosition * (380 + 25)}px)`;
// }


const caseContainer = document.querySelector('.caseContainer');
const casePre = document.getElementById('cprevBtn');
const caseNext = document.getElementById('cnextBtn');

let caseSlidePosition = 0;
const caseSlides = document.getElementsByClassName('caseSlide');
const totalCaseSlide = caseSlides.length;
let intervalId;

function startAutoSlide() {
  intervalId = setInterval(() => {
    if (caseSlidePosition === totalCaseSlide - 3) {
      caseSlidePosition = 0;
    } else {
      caseSlidePosition++;
    }
    caseUpdatePosition();
  }, 3000); // Adjust the interval time (in milliseconds) as needed
}

function stopAutoSlide() {
  clearInterval(intervalId);
}

casePre.addEventListener('click', () => {
  if (caseSlidePosition === 0) {
    caseSlidePosition = totalCaseSlide - 3;
  } else {
    caseSlidePosition--;
  }
  caseUpdatePosition();
});

caseNext.addEventListener('click', () => {
  if (caseSlidePosition === totalCaseSlide - 3) {
    caseSlidePosition = 0;
  } else {
    caseSlidePosition++;
  }
  caseUpdatePosition();
});

function caseUpdatePosition() {
  caseContainer.style.transform = `translateX(-${caseSlidePosition * (380 + 25)}px)`;
}

startAutoSlide();
