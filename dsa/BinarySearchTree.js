class TreeNode {
    constructor(value){
        this.value = value
        this.left = null
        this.parent = null
        this.right = null
    }
}

class BinaryTree {

    constructor(){
        this.root = null
    }

    insert(value){
        const treeNode = new TreeNode(value)
        if(!this.root){
            this.root = treeNode
            return this
        }

        let current = this.root

        while(current){
            if(current.value === value) return
            if(value < current.value ){
                if(current.left == null){
                    current.left = treeNode
                    return this
                }
                current = current.left
            }else {
                if(current.right == null){
                    current.right = treeNode
                    return this
                }
                current = current.right
            }
        }
        return this
    }
}

class BinaryTreeR {

    constructor(){
        this.root = null
    }

    insert(value) {
        const treeNode = new TreeNode(value)
        if(this.root == null){
            this.root == treeNode
        }else {

            this.insertNode(this.root, treeNode)
        }
    }

    insertNode(node, newNode){
        if(newNode.value < node.value){
            if(node.left == null){
                node.left = newNode
            }else {
                this.insertNode(node.left, newNode)
            }
        }else {
            if(node.right == null){
                node.right = newNode
            }else {
                this.insertNode(node.right, newNode)
            }
        }
        return this
    }
}