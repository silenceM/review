function MergeSort(originArray) {
  debugger
  if (originArray.length <= 1) {
    return originArray
  }
  const array = [...originArray]
  const mindIndex = Math.floor(array.length / 2)
  const leftArray = array.slice(0, mindIndex)
  const rightArray = array.slice(mindIndex, array.length)
  const leftSortedArray = MergeSort(leftArray)
  const rightSortedArray = MergeSort(rightArray)
  return mergeSortedArrays(leftSortedArray, rightSortedArray)
}

function mergeSortedArrays(leftArray, rightArray) {
  let sortedArray = []
  while (leftArray.length && rightArray.length) {
    let minElement = null
    if (leftArray[0] > rightArray[0]) {
      minElement = rightArray.shift()
    } else {
      minElement = leftArray.shift()
    }
    sortedArray.push(minElement)
  }
  if (leftArray.length) {
    sortedArray = sortedArray.concat(leftArray)
  }
  if (rightArray.length) {
    sortedArray = sortedArray.concat(rightArray)
  }
  return sortedArray
}

