/*
input: random number array
output: sorted number array
*/

let numArr = [5, 1]

function selectionSort(arr) {
  let temp = 0
  let newArr = []

  do {
    if (arr.length <= 1) {
      break
    }
    temp = arr[0]
    let s = 0 //slice index
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < temp) {
        temp = arr[i]
        s = i
      }
    }
    arr.splice(s, 1)
    newArr.push(temp)
  }
  while (arr.length > 1)
  newArr.push(arr[0])
  return newArr
}

let b = selectionSort(numArr)
console.log(b)
