const serviceBtn = document.querySelector('.serviceBtn');
const serviceToggle = document.querySelector('.serviceToggle');
serviceToggle.style.display = 'none'; // initially hide the serviceToggle element
serviceBtn.addEventListener('click', ()=>{
    serviceToggle.style.display = 'block'; // show the serviceToggle element
    serviceToggle.classList.toggle('open'); // toggle the 'open' class
})




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
  sliderContainer.style.transform = `translateX(-${slidePosition * (360 + 40 )}px)`;
}
