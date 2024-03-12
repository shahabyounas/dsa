const LinkedList = require("./LinkedList")

class Stack {
    constructor(){
        this.stack = []
    }

    push(value){
        this.stack.push(value)
    }

    pop(){
        if(this.stack.length)
        return this.stack.pop()
    }

    peek(){
        return this.stack[this.stack.length - 1]
    }

    isEmpty(){
        return this.stack.length === 0
    }

    print(){
        let string = ""
        for(let i = this.stack.length -1; i>= 0; i--){
            string += this.stack[i] + " "
        }
        return string
    }
}


class StackL {
    constructor(){
        this.list = new LinkedList()
    }

    isEmpty(){
        return !this.list.head
    }

    peek(){
        if(this.isEmpty()){
            return null
        }

        return this.list.head.value
    }

    push(value){
        this.list.prepend(value)
    }

    pop(){
        const deletedNode = this.list.deleteHead()
        return deletedNode ? deletedNode.value : null
    }
}