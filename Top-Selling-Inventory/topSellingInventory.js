/*
In the below example, you are given id's and their corresponding inventory object.
Find the top selling inventory, i.e. the id which is repeated the most in items array and match with the highest selling id with catalog 
array to return the object.


for example, id:599 is the top selling inventory since it's repeate 3 times



Pseudocode:
from the items array create a Map<k, v> where k is the id and v is number of times the key(id) was repeated.

once the Map is created iterate through the Map to find the <key,value> pair with greatest value.

once we get the id of highest value from map, find the corresponding inventory matching the id.
*/


const items = [
    { id: 599 },
    { id: 653 },
    { id: 400 },
    { id: 599 },
    { id: 200 },
    { id: 599 }
];

const catalog = [
    { id: 200, name: "RX Solution", type: "Medical" },
    { id: 400, name: "BH Solution", type: "Behavioral" },
    { id: 599, name: "Pharmacy", type: "Consumable" },
    { id: 653, name: "Books", type: "Physical" }
];

function topSeller(items, catalogs) {
    const topSeller = new Map();
    let highestValue = [0, 0];
    items.forEach(item => {
        let count = topSeller.get(item.id);
        if (topSeller.has(item.id)) {
            topSeller.set(item.id, (count += 1));
        } else {
            topSeller.set(item.id, 1);
        }
    });
    for (let value of topSeller) {
        if (value[1] > highestValue[1]) {
            highestValue = value;
        }
    }

    // here, highest value is [599, 3]
    let result = catalogs.find(item => item.id === highestValue[0]);
    return result;
}