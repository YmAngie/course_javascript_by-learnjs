'use strict';

function f(x) {
    return Math.random() * x;
}

function makeCaching(f) {
    let cachedResultObj = {};

    return function wrapper(x) {
        // I
        if (cachedResultObj.argument === x) {
            return cachedResultObj.result;
        }

        cachedResultObj = {
            argument: x,
            result: f.call(this, x)
        };

        return cachedResultObj.result;

        // II
        // if (!(cachedResultObj.argument === x)) {
        //     cachedResultObj = {
        //         argument: x,
        //         result: f.call(this, x)
        //     };
        // }
        //
        // return cachedResultObj.result;
    }
}

f = makeCaching(f);

let a, b;

a = f(1);
b = f(1);
alert(a === b); // true (значение закешировано)

b = f(2);
alert(a === b); // false, другой аргумент => другое значение
