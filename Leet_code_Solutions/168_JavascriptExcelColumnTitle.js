var convertToTitle = function(n) {
    let res = "";
    while (n > 0) {
        n--;
        res = String.fromCharCode((n % 26) + 65) + res;
        n = Math.floor(n / 26);
    }
    return res;
};
