'use strict'



// Fetch the items from the JSON file
function loadItems() {
    return fetch('file:data/data.json').then(response => response.json())
    .then(json => console(json));
}

// main
loadItems()
.then(items => {
    // displayItems(items);
    // setEventListners(items);
})
.catch(console.log)