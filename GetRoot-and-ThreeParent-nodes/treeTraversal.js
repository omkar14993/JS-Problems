/**
 * Given an array of arrays, where each array contains two numbers - the first number being a parent and the second number being a child of a tree - 
 * return an array of arrays where the 0ith element is an array of all nodes with no parents (roots), and the 1st element is an array of all nodes with 3 parents.
 */



const arr = [
    [1, 4],
    [2, 4],
    [3, 4],
    [1, 5],
    [5, 6]
];
// expected output
/**
 * [[1,2,3], [4]]
 * 
 * 
 * create a Map<K,V> where k - child node and V - array of parent nodes
 * 
 *  4 -> 1 2 3
 *  5 -> 1
 *  6 -> 5
 */

function getRootAndNodesWithThreeParents(arr) {
    const relMap = new Map();
    const rootNodes = [];
    const threeParentNodes = [];

    // Create Map where Key - childNodes and Value - Parents
    arr.forEach(value => {
        if (relMap.has(value[1])) {
            let children = relMap.get(value[1]);
            children.push(value[0]);
            relMap.set(value[1], children);
        } else relMap.set(value[1], [value[0]]);
    });

    // Logic to find Root nodes and nodes with 3 childres.
    for (let values of relMap) {
        let val = values[1];

        // Find Nodes with 3 parents, i.e. Map<K,V> where V.length ==3
        if (val.length === 3 && !threeParentNodes.includes(values[0])) {
            threeParentNodes.push(values[0]);
        }

        // Find root nodes, i.e. nodes without any parent.
        for (let i = 0; i < val.length; i++) {
            if (!relMap.has(val[i]) && !rootNodes.includes(val[i])) {
                rootNodes.push(val[i]);
            }
        }
    }
    return [rootNodes, threeParentNodes];
}
const result = getRootAndNodesWithThreeParents(arr);



// Follow up on previous problem,
// given the same input and two nodes, find their common ancestor.

// solution: construct same Map<K,V> as in previous question and get V(parents arrays) of two nodes passed as input parameters.
// Find overlapping values in the two obtained arrays, if two array's contain a common Value, they have a common ancestor.