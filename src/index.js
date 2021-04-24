import { layer } from './Layer/layer';
import './style.css';

import { Layer } from './Layer/layer';

console.log('funguju!');

const nav = document.querySelector('#nav-btn');
const navigation = document.querySelector('nav');
const allItems = document.querySelectorAll('.nav_link');

nav.addEventListener('click', (e) => {
  navigation.classList.toggle('nav-closed');
});

allItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    navigation.classList.toggle('nav-closed');
  });
});

const orderButton = document.querySelector('.order-btn');
const drinkCup = document.querySelector('.drink__cup');
let isOrdered = true;

orderButton.addEventListener('click', () => {
  if (isOrdered) {
    orderButton.textContent = 'Zrušit';
    drinkCup.classList.add('drink__cup--selected');
    isOrdered = false;
  } else {
    orderButton.textContent = 'Objednat';
    drinkCup.classList.remove('drink__cup--selected');
    isOrdered = true;
  }
});

const drinkInfoElement = document.querySelector('.drink__info');

let layers = '';

layers += layer({
  color: '#feeca',
  label: 'mléčná pěna',
});

layers += layer({
  color: '#fed7b0',
  label: 'teplé mléko',
});

layers += layer({
  color: '#613916',
  label: 'expresso',
});

drinkInfoElement.innerHTML += layers;
