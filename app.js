const btn = document.getElementById('switch');
const body = document.getElementById('b');
const descripcion = document.getElementById('descripcion');
const header = document.getElementById('header');
const bod= document.getElementById('body');
const card = document.getElementsByClassName('.card__descripcion');

console.log(card)
btn.addEventListener('click',()=>{
    btn.classList.toggle('active');
    body.classList.toggle('dark');
    descripcion.classList.toggle('sub-dark');
    header.classList.toggle('sub-dark');
    bod.classList.toggle('sub-dark');
    card.classList.toggle('sub-dark');
})