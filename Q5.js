const arr1 = [1, 2, 3, 4, 5, 6, 7, 9, 9, 8, 7, 7];
const arr2 = [3, 5, 9, 10, 88]
const arr = arr2.filter(num => arr1.includes(num));
const rsArr = []
const mySet = new Set();
arr.forEach(el => mySet.add(el))
mySet.forEach(el => rsArr.push(el))
console.log(rsArr)