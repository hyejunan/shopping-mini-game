'use strict'

const header = document.querySelector('.header');
const filter = document.querySelector('.filter');
const list = document.querySelector('.list');
let colorArr = ['blue', 'yellow', 'pink'];
let typeArr = ['tshirt', 'pant', 'skirt'];
let genderArr = ['female', 'male'];
let sizeArr = ['small size', 'medium size', 'large size'];

let arr = [];

function filterList(e) {
    return arr.filter(i => i===e);
}

filter.addEventListener('click', (e) => {
    
})



