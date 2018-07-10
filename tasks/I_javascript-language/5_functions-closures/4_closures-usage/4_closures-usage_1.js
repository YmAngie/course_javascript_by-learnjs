'use strict';

// Напишите функцию sum, которая работает так: sum(a)(b) = a+b.

function sum(a) {
    return function(b) {
        let result = a + b;
        console.log(result);
    }
}

sum(1)(2); // 3
sum(5)(-1); // 4
