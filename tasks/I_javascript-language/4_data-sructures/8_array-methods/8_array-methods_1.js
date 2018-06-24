'use strict';

var obj = {
  className: 'open menu'
}

addClass(obj, 'hide');

function addClass(obj, newClassName) {
    var classNames = (obj.className.length) ? obj.className.split(' ') : [];

    for (var i = 0; i < classNames.length; i++) {
        if (classNames[i] === newClassName) return;
    }

    classNames.push(newClassName);

    obj.className = classNames.join(' ');
}

console.log(obj);
