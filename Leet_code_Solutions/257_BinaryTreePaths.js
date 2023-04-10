/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if(!root) return []; 
    let res =[];
    let path = "";
    const dfs = (node,path) => {
        if(!node) return;
        if(!node.left && !node.right){
            res.push(path + node.val);
            return;
        }
        dfs(node.left, path + node.val + "->");
        dfs(node.right, path + node.val + "->");
    }
    dfs(root,path);
    return res;
};
