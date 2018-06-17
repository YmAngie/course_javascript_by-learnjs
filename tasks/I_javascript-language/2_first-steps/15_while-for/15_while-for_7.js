nextIteration:
for (var i = 2; i <= 30; i++) {
    for (var j = 2; j < i; j++) {
        if (i % j == 0) {
            continue nextIteration;
        }
    }
    
    alert(i);
}
