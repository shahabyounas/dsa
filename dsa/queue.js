const LinkedList = require("./LinkedList");

class Queue {
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

    enQueue(value){
        this.list.append(value)
    }

    deQueue(){
        const deletedNode = this.list.deleteHead()

        return deletedNode ? deletedNode.value : null
    }

}

module.exports = Queue