'use strict'



// Fetch the items from the JSON file
function loadItems() {
    return fetch('data/data.json').then(response => response.json())
    .then(json => json.items);
}

function displayItems(items) {
    const container = document.querySelector('.items');
    container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

function createHTMLString(item) {
    return `
        <li class="item">
            <img src="${item.image}" alt="${item.type}" class="item__thumbnail">
            <span class="item__description">${item.gender}, ${item.size}</span>
        </li>
    `
}

function onButtonClick(event, items) {
    
}

function setEventListeners(items) {
    const logo = document.querySelector('.logo');
    const buttons = document.querySelector('buttons');
    logo.addEventListener('click', () => displayItems(items));
    buttons.addEventListener('click', event => onButtonClick(event, items));
}

// main
loadItems()
.then(items => {
    console.log(items);
    displayItems(items);
    setEventListeners(items);
})
.catch(console.log)