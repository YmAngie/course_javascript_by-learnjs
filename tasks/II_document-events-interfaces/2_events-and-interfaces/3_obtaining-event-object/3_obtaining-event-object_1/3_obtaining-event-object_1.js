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
        fieldTopY = field.offsetTop + field.clientTop,
        defaultRightX = field.clientWidth - ball.clientWidth,
        defaultButtomY = field.clientHeight - ball.clientWidth;

    x = x - fieldLeftX + window.pageXOffset - ball.clientWidth / 2;
    y = y - fieldTopY + window.pageYOffset - ball.clientWidth / 2;

    x = Math.max(x, 0);
    x = Math.min(x, defaultRightX);

    y = Math.max(y, 0);
    y = Math.min(y, defaultButtomY);

    ball.style.left = `${x}px`;
    ball.style.top = `${y}px`;
}
