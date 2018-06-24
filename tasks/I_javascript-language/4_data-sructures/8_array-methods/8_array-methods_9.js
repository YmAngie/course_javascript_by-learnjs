var list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

// var list = { value: 1 };
// list.next = { value: 2 };
// list.next.next = { value: 3 };
// list.next.next.next = { value: 4 };

printList(list);

// Напишите функцию printList(list), которая выводит элементы списка по очереди, при помощи цикла.
function printList(list) {
    var cursor = list; 

    do {
        console.log(cursor);
        
        cursor = cursor.next;
    } while (cursor !== null);
}

// Напишите функцию printList(list) при помощи рекурсии.
function printList(list) {
    if (list === null) {
        return;
    }

    var cursor = list; 
    console.log(cursor);
    cursor = cursor.next;
    printList(cursor);
}

// Напишите функцию printReverseList(list), которая выводит элементы списка в обратном порядке, при помощи рекурсии.
// Для списка выше она должна выводить 4,3,2,1
// 

// Сделайте вариант printReverseList(list), использующий не рекурсию, а цикл.
// 
