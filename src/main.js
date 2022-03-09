'use strict'

const LIST_COUNT = 10;

const header = document.querySelector('.header');
const filter = document.querySelector('.filter');
const list = document.querySelector('.list');

let arr = [];

class Item {
    constructor(gender, size, type, color, imgPath) {
        this.gender = gender;
        this.size = size;
        this.type = type;
        this.color = color;
        this.path = imgPath;
    }
}

function addListItem(i) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    const text = document.createTextNode(`${i.gender}, ${i.size} size`);
    li.setAttribute('class', i.type);
    li.setAttribute('class', i.color);
    img.setAttribute('src', i.path);
    li.appendChild(img);
    li.appendChild(text);
    list.appendChild(li);
}

function start() {
    const item1 = new Item('female', 'large', 'tshirt', 'blue', 'img/blue_t.png');
    const item2 = new Item('male', 'small', 'pant', 'pink', 'img/pink_p.png');
    const item3 = new Item('male', 'medium', 'skirt', 'yellow', 'img/yellow_s.png');
    addListItem(item1);
    addListItem(item2);
    addListItem(item3);
}

start();



