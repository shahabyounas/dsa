class TrieNode {
    constructor(){
        this.children = {}
        this.endOfWord = false
    }
}

class Trie {
    constructor(){
        this.root = new TrieNode()
    }

    insert(word){
        let current = this.root

        for (let char of word){
            if(!current.children[char]){
                current.children[char] = new TrieNode()
              }

            current = current.children[char]
        }
        current.endOfWord = true
        return this
    }


    search(word){
        let current = this.root

        for (let char of word){
            if(!current.children[char]){
                return false
              }
            current = current.children[char]
        }
        return current.endOfWord
    }

    startsWith(prefix){
        let current = this.root

        for (let char of prefix){
            if(!current.children[char]){
                return false
              }
            current = current.children[char]
        }
        return true
    }
}