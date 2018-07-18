'use strict';

function sum(...args) {
    let result = 0;

    for (let i = 0; i < args.length; i++) {
        result += args[i];
    }

    return result;
}

function makeLogging(f, log) {
    return function wrapper(...args) {
        log.push(args);
        // I
        return f.call(this, ...args);
        // II
        // return f.apply(this, arguments);
    }
}

let log = [];
sum = makeLogging(sum, log);

alert(sum(1, 2)); // 3
alert(sum(4, 5)); // 9

for (let i = 0; i < log.length; i++) {
    let args = log[i]; // массив из аргументов i-го вызова
    alert( 'Лог:' + args.join() ); // "Лог:1,2", "Лог:4,5"
}
