'use strict';

class Slider {
    constructor(options) {
        this._sliderElem = options.element;
        this.thumbElem = this._sliderElem.children[0];
    }

    slide(event) {
        let thumbCoords = this._getCoords(this.thumbElem),
            shiftX = event.pageX - thumbCoords.left,
            sliderCoords = this._getCoords(this._sliderElem);

        document.onmousemove = event => {
            let newLeft = event.pageX - shiftX - sliderCoords.left;
            if (newLeft < 0) {
                newLeft = 0;
            }

            let rightEdge = this._sliderElem.offsetWidth - this.thumbElem.offsetWidth;
            if (newLeft > rightEdge) {
                newLeft = rightEdge;
            }

            this.thumbElem.style.left = newLeft + 'px';
        }

        document.onmouseup = function() {
            document.onmousemove = document.onmouseup = null;
        };

        return false;
    }

    _getCoords(elem) {
        let box = elem.getBoundingClientRect();

        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };
    }
}

let slider = new Slider({
    element: document.getElementById('slider')
});

slider.thumbElem.addEventListener('mousedown', event => {
    slider.slide(event)
});