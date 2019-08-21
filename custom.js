/**
 * Mapado custom search (basic search engine)
 * Copyright Guillaume Duprez <gduprez@gmail.com>
 */
let htmlBoxes, boxes, htmlSearchContainer, searchBox;
searchArray = [];

function mapadoCustomSearch() {
    function init() {
        console.log('init()');
        htmlSearchContainer = document.querySelector('.minisite-title');
        htmlBoxes = document.querySelectorAll('.mb4');
        boxes = document.querySelectorAll('.ticketing-box--description .mr2');
        buildSearchArray(boxes);
        addSearchBox();
    }
    function addSearchBox() {
        console.log('addSearchBox()');
        searchBox = document.createElement('INPUT');
        searchBox.placeholder = "\ud83d\udd0e Rechercher un titre ou un auteur...";
        
        searchBox.id = 'txtSearch';
        searchBox.style = `margin-bottom: 10px;width: 90%;font-size: 25px; margin-left: auto; margin-right: auto; display: flex; padding-top:5px; padding-bottom:5px;`;
        searchBox.addEventListener('keyup', doSearch);
        htmlSearchContainer.appendChild(searchBox);
        searchBox.focus();
    }
    function showAllBoxes() {
        htmlBoxes.forEach(box => {
            box.style.display = '';
        });
    }
    function buildSearchArray(items) {
        console.log('buildSearchArray()');
        items.forEach((box, index) => {
            if (box.innerText) {
                let txt = box.innerText.toLowerCase();
                txt = txt.replace(/\//g, '');
                txt = txt.replace(/\+/g, '');
                txt = txt.replace(/\-/g, '');
                txt = txt.replace(/\?/g, '');
                txt = txt.split(' ').filter(t => t.length > 2).join(' ');
                htmlBoxes[index]['data-search'] = removeAccent(txt);
            }
        });
    }
    function removeAccent(str) {
        let ret = str.replace(/[é]/g, 'e');
        ret = ret.replace(/[à]/g, 'a');
        return ret;
    }
    function doSearch() {
        window.setTimeout(() => {
            let searchValue = removeAccent(searchBox.value.toLowerCase());
            if (searchValue.length < 3) { showAllBoxes(); return; }
            htmlBoxes.forEach(box => {
                if (hasMatch(searchValue, box['data-search'])) {
                    box.style.display = '';
                } else {
                    box.style.display = 'none';
                }
            });
        }, 100);
    }
    function hasMatch(searchValue, currentValue) {
        return (currentValue.search(searchValue) > -1);
    }
    window.addEventListener("DOMContentLoaded", init);
}
mapadoCustomSearch();