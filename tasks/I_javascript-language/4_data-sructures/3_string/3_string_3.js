function truncate(str, maxlength) {
    if (str.length > maxlength) {
        var diff = maxlength - 1, 
            result = str.slice(0, diff) + '…';

        return result;
    }
    
    return str;
}
