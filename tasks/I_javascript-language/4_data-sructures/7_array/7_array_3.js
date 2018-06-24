var styles = ['Джаз', 'Блюз'];
console.log(styles);

styles.push('Рон-н-Ролл');
console.log(styles);

styles[styles.length - 2] = 'Классика';
console.log(styles);

alert(styles.shift(styles[0]));
console.log(styles);

styles.unshift('Рэп', 'Рэгги');
console.log(styles);
