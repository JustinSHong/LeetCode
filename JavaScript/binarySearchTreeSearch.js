// Task Description
// Given the root node of a binary search tree (BST) and a value.
// You need to find the node in the BST that the node's value equals the given value.
// Return the subtree rooted with that node. If such node doesn't exist, you should return NULL.

var searchBST = function(root, val) {
    // root has the target val
    if (root.val === val) {
        return root;
    }
    // root does not have the target val
    if (root.val > val) {
        if (root.left) {
            return searchBST(root.left, val);
        }
    } else if (root.val < val) {
        if (root.right) {
            return searchBST(root.right, val);
        }
    }
    return null;
};

// Test Cases
searchBST([4, 2, 7, 1, 3], 2);
