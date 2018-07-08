'use strict';

let tree = document.querySelector('.list_main');

tree.addEventListener('click', toggleList);

function toggleList(event) {
    let targetClasslist = event.target.classList,
        siblingList = event.target.nextElementSibling;

    if (!targetClasslist.contains('list__text') || siblingList === null) return;

    siblingList.classList.toggle('hide');
}
