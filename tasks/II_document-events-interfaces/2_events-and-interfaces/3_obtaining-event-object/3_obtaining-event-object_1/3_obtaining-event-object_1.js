// Требования:
//     Мяч после перелёта должен становиться центром ровно под курсор мыши, если это возможно без вылета за край поля.
//     CSS-анимация не обязательна, но желательна.
//     Мяч должен останавливаться у границ поля, ни в коем случае не вылетать за них.
//     При прокрутке страницы с полем ничего не должно ломаться.
//
// Замечания:
//     Код не должен зависеть от конкретных размеров мяча и поля.
//     Вам пригодятся свойства event.clientX/event.clientY

let field = document.querySelector('#field');

field.addEventListener('click', move);

function move(event) {
    let x = event.clientX,
        y = event.clientY,
        fieldLeftX = field.offsetLeft + field.clientLeft,
        // fieldRightX = field.offsetLeft + field.clientLeft + field.clientWidth,
        fieldTopY = field.offsetTop + field.clientTop,
        // fieldButtomY = field.offsetTop + field.offsetHeight - field.clientTop,
        defaultLeftX = 0,
        defaultRightX = field.clientWidth - ball.clientWidth,
        defaultTopY = 0,
        defaultButtomY = field.clientHeight - ball.clientWidth;

    x = x - fieldLeftX + window.pageXOffset - ball.clientWidth / 2;
    y = y - fieldTopY + window.pageYOffset - ball.clientWidth / 2;

    if (x >= 0 && x <= field.clientWidth - ball.clientWidth) {
        ball.style.left = `${x}px`;
    } else if (x < 0) {
        ball.style.left = `${defaultLeftX}px`;
    } else if (x > field.clientWidth - ball.clientWidth) {
        ball.style.left = `${defaultRightX}px`;
    }

    if (y >= 0 && y <= field.clientHeight - ball.clientWidth) {
        ball.style.top = `${y}px`;
    } else if (y < 0) {
        ball.style.top = `${defaultTopY}px`;
    } else if (y > field.clientHeight - ball.clientWidth) {
        ball.style.top = `${defaultButtomY}px`;
    }
}
