function ucFirst(str) {
    if (str.length === 0) return str;

    var result = str[0].toUpperCase() + str.slice(1);

    return result;
}
