var isSameTree = function(p, q) {
    if (!p && !q) return true; 
    if (!p || !q) return false; 
    if (p.val !== q.val) return false; 

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// checking if the both tree are same with all the values present in node.