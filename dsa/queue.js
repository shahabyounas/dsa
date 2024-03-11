class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = null;
    }


    add(val){
        let node = new Node(val);
        
    }
}

module.exports = Queue