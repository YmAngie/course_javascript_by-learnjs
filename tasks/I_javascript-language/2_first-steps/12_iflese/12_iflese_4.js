var login = prompt('Введите логин', '');

if (login === 'Админ') {
    var pass = prompt('Введите пароль', '');

    if (pass === 'Черный Властелин') {
        alert('Добро пожаловать!');
    } else if (login === null) {
        alert('Вход отменён');
    } else {
        alert('Пароль неверен');
    }
} else if (login === null) {
    alert('Вход отменён');
} else {
    alert('Я вас не знаю');
}
