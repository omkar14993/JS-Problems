/*
# Part 1 :
# Given employees and friendships, find all adjacencies that denote the friendship
# A friendship is bi-directional/mutual so if 1 is friends with 2, 2 is also friends with 1.
# Output:
# 1: 2, 3
# 2: 1
# 3: 1, 4
# 4: 3
# 6: None
*/
const employees = [
    "1, Bill, Engineer",
    "2, Joe, HR",
    "3, Sally, Engineer",
    "4, Richard, Business",
    "6, Tom, Engineer",
    "7, XYZ, Other"
];

const friendships = ["1, 2", "1, 3", "3, 4", "6, 1"];

// create a HashMap (k,v) where K :- id of employee and v:- arrar of friends K has.

function findFriends(employees, friendships) {
    let relationMap = new Map();
    friendships.forEach(value => {
        let relation = value.split(", ");
        if (relationMap.has(relation[0])) {
            let newRelation = relationMap.get(relation[0]);
            newRelation.push(relation[1]);
            relationMap.set(relation[0], newRelation);
        } else {
            relationMap.set(relation[0], [relation[1]]);
        }

        if (relationMap.has(relation[1])) {
            let newRelation = relationMap.get(relation[1]);
            newRelation.push(relation[0]);
            relationMap.set(relation[1], newRelation);
        } else {
            relationMap.set(relation[1], [relation[0]]);
        }
    });
    // Currently relationMap has all relationShip/Friendships mapped from frinedships[] array, if an employee
    // does not have any friends, we need to create an entry in relationMap K,V where V is an empty array.
    employees.forEach(employee => {
        let empId = employee.split(", ")[0];
        if (!relationMap.has(empId)) {
            relationMap.set(empId, []);
        }
    });
    console.log(relationMap);
    return relationMap;
}

/*# Part 2:
  # Now for each department count the number of employees that have a friend in
  # another department
  # Output:
  # "Engineer: 2 of 3"
  # "HR: 1 of 1"
  # "Business: 1 of 1"
  */

function getDeptEmployees(employees) {
    const result = new Map();
    employees.forEach(employee => {
        let info = employee.split(", ");
        let empId = info[0];
        let dept = info[2];
        if (result.has(dept)) {
            let emps = result.get(dept);
            emps.push(empId);
            result.set(dept, emps);
        } else result.set(dept, [empId]);
    });
    console.log(result);
    return result;
}

function getOtherDeptFriends(departmentMap, friendshipMap, deptName) {
    const deptEmps = departmentMap.get(deptName);
    console.log(deptEmps);
    let count = 0;
    deptEmps.forEach(emp => {
        let friends = friendshipMap.get(emp);
        console.log(friends);
        // check if current department employee's friends include friends from other department.

        //THe commented method has a bug, where it would not exit out of the loop if one employee from a specific
        // department has friends in more than 1 departments.
        /*   friends.forEach(friend => {
            if(!deptEmps.includes(friend)) {
              count++;
            }
          }); */
        for (let i = 0; i < friends.length; i++) {
            if (!deptEmps.includes(friends[i])) {
                count++;
                break;
            }
        }
    });
    return count;
}
const friendshipMap = findFriends(employees, friendships);
const departmentMap = getDeptEmployees(employees);
const otherDeptEmp = getOtherDeptFriends(
    departmentMap,
    friendshipMap,
    "Engineer"
);

/**
 * friendshipMap
 * 1 -> [2,3,6]
 * 2 -> [1]
 * 3 -> [1,4]
 * 4 -> [3]
 * 6 -> [1]
 * 7 -> []
 *
 *
 * departmentMap
 * Engineer -> [1,3,6]
 * HR -> [2]
 * Business -> [4]
 * Other -> [7]
 *
 *
 */