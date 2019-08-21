let htmlBoxes, boxes, htmlSearchContainer;

let searchArray = [];

function init() {
    console.log('init()');
    htmlSearchContainer = document.querySelector('.minisite-title');
    addSearchBox();
    htmlBoxes = document.querySelectorAll('.mb4');
    boxes = document.querySelectorAll('.ticketing-box--description .mr2');
    buildSearchArray(boxes);

}

function addSearchBox() {
    console.log('addSearchBox()');
    let searchBox = document.createElement('INPUT');
    searchBox.placeholder = "Rechercher...";
    htmlSearchContainer.appendChild(searchBox);
}

function buildSearchArray(items) {
    console.log('buildSearchArray()');
    items.forEach((box) => {
        if (box.innerText) {
            let txt = box.innerText.toLowerCase();
            txt = txt.replace(/\//g, '');
            txt = txt.replace(/\+/g, '');
            txt = txt.replace(/\-/g, '');
            txt = txt.replace(/\?/g, '');
            searchArray.push(txt);
        }
    });
}

window.addEventListener("DOMContentLoaded", (event) => {
    console.log('DOMContentLoaded event');
    init();
});