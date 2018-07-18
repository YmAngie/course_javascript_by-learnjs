'use strict';

let buffer = makeBuffer();

buffer('Замыкания');
buffer('Использовать');
buffer('Нужно!');

alert(buffer()); // Замыкания Использовать Нужно!

function makeBuffer() {
    let bufferString = '';

    // I. Assign a property clear to the function inside the return statement
    // return function me(value) {
    //     if (!arguments.length) {
    //         return bufferString;
    //     }
    //
    //     bufferString = `${bufferString}${value}`;
    //
    //     me.clear = function() {
    //         bufferString = '';
    //     }
    // };

    // II. Assign a property clear to the function outside of the return statement
    function buffer(value) {
        if (!arguments.length) {
            return bufferString;
        }

        bufferString = `${bufferString}${value}`;
    }

    buffer.clear = function() {
        bufferString = '';
    };

    return buffer;
}
