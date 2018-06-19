// 1
function isEmpty(obj) {
    for (var key in obj) {
        counter++;
    }
  
    return !Boolean(counter);
}

// 2
function isEmpty(obj) {
    for (var key in obj) {
        return false;
    }
    
    return true;
}

// true
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
