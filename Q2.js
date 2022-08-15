const arr = [1,7,9,2,5,3,8]
const find2NumMaxSum = (arr) => {
  let cloneArr = [...arr]
  const max = findMax(arr)
  const index = arr.indexOf(max)
  delete cloneArr[index]
  const max2 = findMax(cloneArr)
  return [max,max2]
}
const findMax = (arr) => {
  let max = arr[0]
  for (let i in arr) {
    if (arr[i] > max ) max = arr[i]
  }
  return max
}
console.log(find2NumMaxSum(arr))