// Task Description
// Given a binary tree, determine if it is height-balanced.
// For this problem, a height-balanced binary tree is defined as:
// a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

var isBalanced = function(root) {
    return height(root) !== -1;
};

var height = function(root) {
    // base case - height of 0
    if (root == null) return 0;

    // determine height of subtrees
    let leftHeight = height(root.left);
    let rightHeight = height(root.right);

    // difference in height is more than 1
    if (Math.abs(leftHeight - rightHeight) > 1) {
        return -1;
    } else if (leftHeight == -1 || rightHeight == -1) {
        return -1;
    }
    // difference in height is 1
    return Math.max(leftHeight, rightHeight) + 1;
};

// Test Cases
isBalanced([3, 9, 20, null, null, 15, 7]); // true
isBalanced([1, 2, 2, 3, 3, null, null, 4, 4]); // false
