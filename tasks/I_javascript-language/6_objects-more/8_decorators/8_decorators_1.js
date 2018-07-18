'use strict';

let calculator = {
    double: function(a) {
        return a * 2;
    }
};

function makeLogging(f, log) {
    return function wrapper(a) {
        log.push(a);
        return f.call(this, a);
    }
}

let log = [];
calculator.double = makeLogging(calculator.double, log);

calculator.double(1); // 1, добавлено в log
calculator.double(5); // 5, добавлено в log

for (let i = 0; i < log.length; i++) {
    alert('Лог:' + log[i]); // "Лог:1", затем "Лог:5"
}
