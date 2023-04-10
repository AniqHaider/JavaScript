var titleToNumber = function(s) {
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        res = res * 26 + (s.charCodeAt(i) - 'A'.charCodeAt(0) + 1);
    }
    return res;
};
