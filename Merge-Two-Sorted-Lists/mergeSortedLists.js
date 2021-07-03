/*
https://leetcode.com/problems/merge-two-sorted-lists/

Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: l1 = [], l2 = []
Output: []
Example 3:

Input: l1 = [], l2 = [0]
Output: [0]
*/

// Time Complexity: O(M+N) for each iteration, we increment either l1 or l2 until we reach the end list.
// Space Complexity: O(M+N), we are returning a new mergedListNode, and at each iteration we are creating a new ListNode() pointing to the next or previous listNode.
var mergeTwoLists = function(l1, l2) {
    let mergedList = new ListNode();
    let currentNode = mergedList;
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            currentNode.next = new ListNode(l1.val);
            currentNode = currentNode.next;
            l1 = l1.next;
        } else {
            currentNode.next = new ListNode(l2.val);
            currentNode = currentNode.next;
            l2 = l2.next;
        }
    }
    currentNode.next = l1 || l2;
    return mergedList.next;
};

// Time: O(M+N)
// Space: O(1), in this case, we are just creating a new headpointer(mergedList). For every iteration we are using reference of current lists (l1,l2) and not creating a new ListNode()
var mergeTwoLists = function(l1, l2) {
    let mergedList = new ListNode();
    let currentNode = mergedList;
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            currentNode.next = l1;
            currentNode = currentNode.next;
            l1 = l1.next;
        } else {
            currentNode.next = l2;
            currentNode = currentNode.next;
            l2 = l2.next;
        }
    }

    // At this point, either l1 or l2 can be null when the while condition terminates, 
    // that means we still have some nodes remaining to traverse in either l1 or l2 which are already sorted, therefore we assign the currentNode's next to the entire remaining list.
    currentNode.next = l1 || l2;
    return mergedList.next;
};