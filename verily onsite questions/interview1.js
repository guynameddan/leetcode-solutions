/*
# Given a target word and a list of words, return whether any words in the list are an anagram of
# the target word
#
# i.e.
# "ant", ["tan", "ant", "bat"] => true
# "rant", ["tan", "ant", "bat"] => false

BF:

string target
arr  words

pointer on target and another pointer on the array

 |
ant

tan
|

O(n^2)

Efficient:

trie prefix tree

O(n^2)

another way?

ant

k->v
letter->count
hashmap = {a:0, n:0, t:0}

["tan", "ant", "bat"]

is the ith element of the word in our hashmap?

count = target.length

count--

count == 0

target.length === word.length;

O(n)

11:35
*/

let letterCount = new Map(),
    target = "ant",
    wordLen = target.length,
    words = ["tan", "ant", "bat"];

function isAnagram(target, words, letterCount) {
  for (let letter of target) {
    if (letterCount[letter]) {
      letterCount[letter]++
    }

    letterCount[letter] = 1;
  }
  
  for (let word of words) {
    for (let i = 0; i < word.length; i++) {
      if (target.length === word.length) {
          let len = word.length,
          copyMap = letterCount;

        if (copyMap[word[i]] > 0) {
          copyMap[word[i]]--;
          len--;
        } else if (copyMap[word[i]] < 0) {
          continue;
        }

        if (len === 0) {
          return true;
        }
      } else if (target.length !== word.length) {
        continue;
      }
    }
  }
}

console.log(isAnagram(target, words, letterCount));