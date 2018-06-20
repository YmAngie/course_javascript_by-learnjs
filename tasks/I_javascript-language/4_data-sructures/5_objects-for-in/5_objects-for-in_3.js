"use strict";

var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};

console.log(logHighPaidEmployee(salaries));

var maxSalary = 0,
    highPaidEmployee ='';

function logHighPaidEmployee(salaries) {
    for (var key in salaries) {
        if (salaries[key] > maxSalary) {
            maxSalary = salaries[key];
            highPaidEmployee = key;
        }
    }

    return highPaidEmployee || 'Нет сотрудников';
}
