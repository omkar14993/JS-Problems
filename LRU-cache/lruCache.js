/**
https://leetcode.com/problems/lru-cache/
Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

LRUCache(int capacity) Initialize the LRU cache with positive size capacity.

int get(int key) Return the value of the key if the key exists, otherwise return -1.

void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
Follow up:
Could you do get and put in O(1) time complexity?
 */

function lruCache(c) {
    this.maxCapacity = c;
    this.map = new Map();
    this.list = [];
}

lruCache.prototype.get = function(key) {
    if (this.map.has(key)) {
        this.updateList(key);
        return this.map.get(key);
    } else return -1;
};

lruCache.prototype.getHead = function() {
    return this.list[0];
};

lruCache.prototype.getTail = function() {
    return this.list[this.list.length - 1];
};

lruCache.prototype.put = function(key, value) {
    if (this.map.has(key)) {
        this.map.set(key, value);
        this.updateList(key);
    } else {
        if (this.list.length < this.maxCapacity) {
            this.map.set(key, value);
            this.list.push(key);
        } else {
            let lru = this.getHead();
            this.map.delete(lru);
            this.list.shift();
            this.list.push(key);
            this.map.set(key, value);
        }
    }
};

lruCache.prototype.updateList = function(key) {
    // Find the index of the key which was updated in Map
    // move the value found at index to the last element in the list since it was Most recently used.
    const index = this.list.indexOf(key);
    if (index !== -1 && index < this.list.length - 1) {
        for (let i = index; i < this.list.length - 1; i++) {
            let temp = this.list[i];
            this.list[i] = this.list[i + 1];
            this.list[i + 1] = temp;
        }
    }
};

const lRUCache = new lruCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1); // return 1
console.log(lRUCache);
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
console.log(lRUCache);
lRUCache.get(2); // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1); // return -1 (not found)
lRUCache.get(3); // return 3
lRUCache.get(4); // return 4