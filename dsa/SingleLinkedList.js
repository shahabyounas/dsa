class Node {
    constructor(value, next = null){
      this.value = value;
      this.next = next
      }
  }
  class SinglyLinkedList {
      constructor(){
          this.head = null;
      }
  
    prepend(value) {
      const newNode = new Node(value)
      newNode.next = this.head
      this.head = newNode
      return this
    }
  
        append(value) {
        const newNode = new Node(value)
        if(this.head == null) {
          this.head = newNode
          return this
        }
      }
  
    insert(value, index) {
      if(index == 0) {
        this.prepend(value)
      }else {
        let count = 1;
        let currentNode  = this.head
        const newNode = new Node(value)
  
        while(currentNode){
           if(count == index) break
           currentNode = currentNode.next
            count++
          }
  
        if(currentNode) {
          newNode.next = currentNode.next
          currentNode.next = newNode
        }else {
          this.head = newNode
          }
      }
      return this
    }
  
    delete(value) {
      if(this.head == null){
        return
      }
  
      if(this.head.value == value) {
        this.head = this.head.next
        return this
      }
  
      let current = this.head;
  
      while(current) {
        if(current.next.value == value) {
            current.next = current.next.next
        }
        
        current = current.next
      }
      return this
    }

    search(value) {
        if(!this.head) {
          return null
        }
    
        let current = this.head
    
        while(current) {
          if(current.value == value){
            return current
            
          }
          current = current.next
        }
        return false
      }

      reverse() {

        let current = this.head
         let pre = null
         let next  = null
     
         while(current) {
           next = current.next
           current.next = pre
     
           pre = current
           current = next
           
         }
     
         this.head = pre
         return this
         
     
       }
      
  }
  