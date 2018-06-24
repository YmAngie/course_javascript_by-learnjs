var arr = [5, 2, 1, -10, 8];

arr.sort(compareNumericBackward);

function compareNumericBackward(a, b) {
    // 1
    if (a < b) return 1;
    if (a > b) return -1;
    // 2
    // return b - a;
}

alert(arr); // 8, 5, 2, 1, -10
