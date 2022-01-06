// https://leetcode.com/problems/design-add-and-search-words-data-structure/submissions/
function TrieNode() {
    this.children = new Map(); // key:value -> letter: TrieNode
    this.endOfWord = false;
}

var WordDictionary = function() {
    this.root = new TrieNode();
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
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
WordDictionary.prototype.search = function(word) {
    function dfs(idx, root) {
        let currentNode = root;
        
        for (let i = idx; i < word.length; i++) {
            let char = word[i];
            
            if (char === ".") {
                // get the keys i.e. the next char/node
                for (let letter of Object.keys(currentNode.children)) {
                    if (dfs(i + 1, currentNode.children[letter])) return true;
                }
                
                return false;
            } else {

                // if the current char isn't in the hash map or path
                if (!(currentNode.children[char])) {
                   return false;
                }

                currentNode = currentNode.children[char];
            }
            
        }
        
        return currentNode.endOfWord;
    }
    
    return dfs(0, this.root);
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */