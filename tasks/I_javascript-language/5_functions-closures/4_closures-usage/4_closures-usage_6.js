'use strict';

var army = makeArmy();

army[0](); // 0
army[5](); // 5

// I. Use let instead of var
function makeArmy() {
    var shooters = [];

    for (let i = 0; i < 10; i++) {
        var shooter = function() {
            alert(i);
        };

        shooters.push(shooter);
    }

    return shooters;
}


// II. Use additional function to get a closure
// function makeArmy() {
//     var shooters = [];
//
//     for (var i = 0; i < 10; i++) {
//         var shooter = (function (i) {
//             return function() {
//                 alert(i);
//             };
//         })(i);
//
//         shooters.push(shooter);
//     }
//
//     return shooters;
// }