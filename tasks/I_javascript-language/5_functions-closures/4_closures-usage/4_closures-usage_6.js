'use strict';

// Следующий код создает массив функций-стрелков shooters. По замыслу, каждый стрелок должен выводить свой номер:
// Почему все стрелки́ выводят одно и то же? Поправьте код, чтобы стрелки работали как задумано. Предложите несколько вариантов исправления.

var army = makeArmy();

army[0](); // 0
army[5](); // 5

// I. Use let instead of var
function makeArmy() {
    var shooters = [];

    for (let i = 0; i < 10; i++) {
        var shooter = function() { // функция-стрелок
            alert(i); // выводит свой номер
        };

        shooters.push(shooter);
    }

    return shooters;
}


// I. Use external function to get a closure
// function makeArmy() {
//     var shooters = [];
//
//     getShooters();
//
//     function getShooters() {
//         for (let i = 0; i < 10; i++) {
//             var shooter = function () { // функция-стрелок
//                 alert(i); // выводит свой номер
//             };
//
//             shooters.push(shooter);
//         }
//     }
//
//     return shooters;
// }