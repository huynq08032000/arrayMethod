const arr = [1, 2, 3, 1, 2, 3, 4, 5, 6, 4];
const rsArr = []
const mySet = new Set();
arr.forEach(el => mySet.add(el))
mySet.forEach(el => rsArr.push(el))
console.log(rsArr)
