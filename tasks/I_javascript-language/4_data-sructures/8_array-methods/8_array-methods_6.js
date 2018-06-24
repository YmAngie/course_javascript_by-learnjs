var arr = ["HTML", "JavaScript", "CSS"],
    arrSorted = [];

// 1
arr.forEach(function(elem, i) {
    arrSorted.push(elem);
});

arrSorted.sort();

// 2
// var arrSorted = arr.slice().sort();


alert(arrSorted); // CSS, HTML, JavaScript
alert(arr); // HTML, JavaScript, CSS (без изменений)