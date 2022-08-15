const arr = [1,7,9,2,5,3,8]
const find2Num = (arr, total) => {
  const rsArr = []
  for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === total) {
              rsArr.push([arr[i],arr[j]])
            }
        }
    }
  return rsArr
}

console.log(find2Num(arr,10))
