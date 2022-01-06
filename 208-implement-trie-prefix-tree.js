// https://leetcode.com/problems/implement-trie-prefix-tree/
function TrieNode() {
    this.children = new Map();
    this.endOfWord = false;
}

var Trie = function() {
    this.root = new TrieNode();
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let currentNode = this.root;
    
    for (let char of word) {
        if (!currentNode.children[char]) {
            currentNode.children[char] = new TrieNode();
        }
        
        currentNode = currentNode.children[char];
    }
        
    currentNode.endOfWord = true;

};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let currentNode = this.root;
    
    // console.log(currentNode)
    
    for (let char of word) {
        // why doesn't this work?
        // if (currentNode.children[char]) {
        //     currentNode = currentNode.children[char];
        // }
        
        if (!(currentNode.children[char])) {
            return false;
        }
        
        currentNode = currentNode.children[char];
        
//         if(!currentNode.children[char]) return false
        
//         currentNode = currentNode.children[char];
    }
       
    return currentNode.endOfWord;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let currentNode = this.root;
    
    for (let char of prefix) {
        if (!(currentNode.children[char])) return false;
        
        currentNode = currentNode.children[char];
    }
    
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */