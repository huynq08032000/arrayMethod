Array.prototype.myMap = function (callbackFunc) {
  const rsArray = []
  this.forEach((num, index) => {
    rsArray.push(callbackFunc(num, index,this))
  })
  return rsArray
}

Array.prototype.myFilter = function (callbackFunc) {
    const rsArray = []
    for (let i in this){
      if (callbackFunc(this[i],i,this)){
        rsArray.push(this[i])
      }
    }
    return rsArray;
  }
  
  Array.prototype.myReduce = function (callbackFunc, initValue) {
    let acc = initValue? initValue : this[0];
    this.forEach((cur, index) => {
      acc = callbackFunc(acc,cur,index,this)
    })
    return acc;
  }
  // --------Q1---------//
  const array1 = [1,2,3,4,5,6]
  const array2 = [3,4,8,9,12]
  
  const rsArray = array1.myFilter(num => array2.includes(num))
  console.log(rsArray)
  