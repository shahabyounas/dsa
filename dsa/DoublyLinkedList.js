class Node {
    constructor(value, pre = null, next = null ) {
        this.value = value
        this.pre = pre
        this.next = next
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null
        this.tail = null
    }

    append(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
            return this
        }

        this.tail.next = newNode
        this.tail  = newNode
        return this
    }
}