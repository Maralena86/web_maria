// var text = document.querySelector('.name');
// var splitText = text.innerText.split('a');

// text.innerHTML = '';
// i = 0
// setInterval(function(){
//   AjoutDeLettre()}
//   , 100 )

// function AjoutDeLettre(){
// if(i < splitText.length){
//   text.innerHTML += splitText[i];
//   i++;
// }
// }

const hamburguer =document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");
hamburguer.addEventListener('click', ()=>{
    hamburguer.classList.toggle("active");
    navMenu.classList.toggle("active");
})
