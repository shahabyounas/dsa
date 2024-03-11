class Node {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  
class LinkedList {
    
    constructor() {
      this.head = null
    }
    
    append(value){
      
      if(!this.head) {
        this.head = new Node(value)
        return this
      }
      
      let current = this.head
      
      while(current.next) {
        current = current.next
      }
      current.next = new Node(value)
    }
    
    traverse() {
      
      if(!this.head) {
        return
      }
      
      let current = this.head
      
      while(current.next) {
        current = current.next
      }
    }
    
    find(value) {
      if(!this.head) {
        console.log("not found")
        return
      }
      
      let current = this.head;
      
      if(current.value == value) {
        console.log("value found", value)
        return value
      }
      
      while(current.next){
        if(current.next.value == value) {
          return
        }
        current = current.next;
       }
      
      console.log("not found")
      
      return false
    }
    
    findByIndex(index) {
      
      if(!this.head) {
        return
      }
      
      if(index == 0) {
        return this.head.value
      }
      
      let current = this.head
      
      let count = 1;
      while(current.next) {
        if(index == count) {
          return 
        }
        count ++
        current = current.next
      }
    }
    
    prepend(value) {
      
      if(!this.head) {
        this.head = new Node(value)
        return
      }
      
      let current = new Node(value)
      
      if(this.head) {
         current.next = this.head;
         this.head = current
        return
      }
    
    }
  }


module.exports = LinkedList
  