var goods = [0, 1, 2, 3, 4, 5];

addNewElement(goods, 'Компьютер');

function addNewElement(array, newElement) {
    // 1
    array.push(newElement);
    // 2
    // array[array.length] = newElement;
}

console.log(goods);
