/*
input: random array of number
output: sorted array of number
*/
/*
step1: do a split and sort code
step2: encapsulation
step3: resurse
*/


let numArr = [59, 11111, 5648, 6, 7, 848, 9999999999, -56, 56, 5566, 100, 599, 5554646, -1000]

function mergeSort(arr) {

  //split
  let tempArr = splitEqually(arr)

  let newArr1 = tempArr[0]
  let newArr2 = tempArr[1] //比較短的

  let len1 = newArr1.length
  let len2 = newArr2.length

  let output = []

  //length>1 check and merge 
  if (len1 > 1) {
    newArr1 = mergeSort(newArr1) //output arr
  }
  if (len2 > 1) {
    newArr2 = mergeSort(newArr2) //output arr
  }

  //length==1
  if (len1 == 1 && len2 == 1) {
    if (newArr1[0] < newArr2[0]) {
      output = [newArr1[0], newArr2[0]]
      return output
    } else {
      output = [newArr2[0], newArr1[0]]
      return output
    }
  } else {
    output = mergeFunc(newArr1, newArr2)
    return output
  }

}


console.log(mergeSort(numArr))








/*
compare two "sorted number arr" index by index to form a new arr
input: two sorted number array
output: one number array
*/
function mergeFunc(arr1, arr2) {
  let i = 0
  let j = 0
  let output = []

  do {
    if (i == arr1.length) {
      output.push(arr2[j])
      j++
    } else if (j == arr2.length) {
      output.push(arr1[i])
      i++
    } else {
      if (arr1[i] < arr2[j]) {
        output.push(arr1[i])
        i++
      } else {
        output.push(arr2[j])
        j++
      }
    }
  } while (i < arr1.length || j < arr2.length)
  return output
}

/*
split an array into two array equally as mush, not necessarily, but expect, to be an number array.
input: one array
output: one array of which length:2, [0] and [1] each to be an array
*/
function splitEqually(arr) {
  let output = [arr.slice(0, Math.ceil(arr.length / 2)), arr.slice(Math.ceil(arr.length / 2), arr.length)]
  return output
}