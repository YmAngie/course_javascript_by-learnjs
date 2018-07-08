'use strict'

let thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', showImage);

function showImage(event) {
    event.preventDefault();

    let target = event.target,
        largeImg = document.querySelector('#largeImg'),
        url;

    if (target === thumbs) return;

    if (target.tagName === 'IMG') {
        url = target.parentNode.href;
    } else if (target.tagName === 'A') {
        url = target.href;
    }

    largeImg.src = url;
}
