'use strict';
{

const list = document.querySelector('#list');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('#close');
const li = document.querySelectorAll('.overlay li');

list.addEventListener('click', () => {
  overlay.classList.add('show');
});

close.addEventListener('click', () => {
  overlay.classList.remove('show');
});

li.forEach(li => {
  li.addEventListener('click', () =>{
overlay.classList.remove('show');
  });
});
}