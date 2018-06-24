var obj = {
  className: 'open menu menu zero'
}

removeClass(obj, 'menu');

function removeClass(obj, classNameToDelete) {
    if (obj.className.length) {
        var classNames = obj.className.split(' ');
    } else return;

    for (var i = 0; i < classNames.length; i++) {
        if (classNames[i] !== classNameToDelete) continue;

        classNames.splice(i, 1);
        i--;
    }

    obj.className = classNames.join(' ');
}

console.log(obj);
