const container = document.querySelector('.container');
const toBlogButton = document.querySelector('.blogBtn');
const toAboutButton = document.querySelector('.aboutBtn');
const toProjButton = document.querySelector('.projBtn')
const toHomeBtns = document.querySelectorAll('.toHome');

function toHome(){
  container.classList.remove('toProj','toBlog','toAbout');
  console.log("toHome")
}

function loadHome(){
  window.location.href = 'index.html#splashHome' 
}

toBlogButton.addEventListener('click',()=>{
  container.classList.toggle('toBlog');
})

toAboutButton.addEventListener('click',()=>{
  container.classList.toggle('toAbout');
})

toProjButton.addEventListener('click',()=>{
  container.classList.toggle('toProj');
})

toHomeBtns.forEach(element=>{
  element.addEventListener('click',toHome)
})