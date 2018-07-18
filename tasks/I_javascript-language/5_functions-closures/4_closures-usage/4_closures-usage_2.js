'use strict';

let buffer = makeBuffer();

buffer('Замыкания');
buffer('Использовать');
buffer('Нужно!');

alert(buffer()); // Замыкания Использовать Нужно!

function makeBuffer() {
    let bufferString = '';

    return function(value) {
        // I. Check the value
        if (value === undefined) {
            return bufferString;
        }

        // II. Check the arguments' length
        // if (!arguments.length) {
        //     return bufferString;
        // }

        bufferString = `${bufferString}${value}`;
    };
}
