const container = document.querySelector('.container');
const toBlogButton = document.querySelector('.blogBtn');
const toAboutButton = document.querySelector('.aboutBtn');
const toHomeBtns = document.querySelectorAll('.toHome');

function toHome(){
  container.classList.remove('toBlog','toAbout');
}

toBlogButton.addEventListener('click',()=>{
  container.classList.toggle('toBlog');
})

toAboutButton.addEventListener('click',()=>{
  container.classList.toggle('toAbout');
})

toHomeBtns.forEach(element=>{
  element.addEventListener('click',toHome)
})