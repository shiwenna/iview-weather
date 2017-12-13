/**
 * Created by Twinna on 2017/12/13.
 */

//定义节点（node）对象
function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
};
function show() {
    return this.data;
}
function BST() {
    this.root = null;
    this.insert = insert;
}
//创建二叉树
function insert(data) {
    var node = new Node(data, null, null);
    if (this.root == null) {
        this.root = node;
    } else {
        var current = this.root;
        while (true) {
            if (current.data > data) {
                if (current.left == null) {
                    current.left = node;
                    break;
                }
                current = current.left;
            } else {
                if (current.right == null) {
                    current.right = node;
                    break;
                }
                current = current.right;
            }
        }
    }
}

//先序遍历
function preOrder(root) {
    if (root != null) {
        let arr = new Array;
        arr.push(root);
        while (arr.length > 0) {
            root = arr.pop();
            console.log(root.data);
            if (root.right != null) {
                arr.push(root.right);
            }
            if (root.left != null) {
                arr.push(root.left);
            }
        }
    }
}

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
console.log("--------------");
preOrder(nums.root);