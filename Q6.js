let array1 = ['face', 'zalo', 'face', 'gmail', 'zalo', 'zalo'];
const count = {}
array1.forEach((el) => {
  count[el] = (count[el] || 0) +1
})
console.log(count)