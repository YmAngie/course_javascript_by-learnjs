"use strict";

var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};

sumSalaries(salaries);

function sumSalaries(salaries) {
    var sum = 0; 

    for (var key in salaries) {
        sum += salaries[key];
    }

    return sum;
}