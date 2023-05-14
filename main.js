const serviceBtn = document.querySelector('.serviceBtn');
const serviceToggle = document.querySelector('.serviceToggle');
serviceToggle.style.display = 'none'; // initially hide the serviceToggle element
serviceBtn.addEventListener('click', ()=>{
    serviceToggle.style.display = 'block'; // show the serviceToggle element
    serviceToggle.classList.toggle('open'); // toggle the 'open' class
})
