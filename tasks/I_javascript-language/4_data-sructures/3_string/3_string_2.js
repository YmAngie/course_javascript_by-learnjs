function checkSpam(str) {
    var strInLowerCase = str.toLowerCase();

    if (strInLowerCase.indexOf("viagra") !== -1 || strInLowerCase.indexOf("xxx") !== -1) {
        return true;
    } 
    
    return false;
}
