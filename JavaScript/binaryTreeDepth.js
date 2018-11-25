// Task Description
// Given a binary tree, find its maximum depth.
// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
// Note: A leaf is a node with no children.

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// Method: Recursion
var maxDepth = function(root) {
    // empty tree
    if (!root) return 0;

    // use recursion to find the depths of the left and right branches
    // depth starts at 1
    return Math.max(maxDepth(root.right) + 1, maxDepth(root.left) + 1);
};

// Method: Iteration
var maxDepth = function(root) {
    const stack = [];
    let depth = 0;

    // push the root to the stack
    if (root) {
        stack.push([1, root]);
    }

    while (stack.length > 0) {
        // deconstruct depth and current node
        let [currentDepth, current] = stack.pop();

        if (current) {
            depth = Math.max(depth, currentDepth);
            // increment currentDepth at each depth
            stack.push([currentDepth + 1, current.left]);
            stack.push([currentDepth + 1, current.right]);
        }
    }
    return depth;
};

// Test Cases
// given [3,9,20,null,null,15,7] tree return depth of 3
