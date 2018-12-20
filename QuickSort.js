function QuickSort(
  originalArray,
  inputLowIndex = 0,
  inputHeightIndex = originArray.length -1,
  recursiveCall = false,
) {
  const array = recursiveCall ? originalArray : [...originalArray]
  const partitionArray = (lowIndex, highIndex) => {
    const swap = (leftIndex, rightIndex) => {
      [
        array[leftIndex],
        array[rightIndex]
      ] =[
        array[rightIndex],
        array[leftIndex]
      ]
    }
    const pivot = array[highIndex]
    let partitionIndex = lowIndex
    for (let currentIndex = lowIndex; currentIndex < highIndex; currentIndex += 1) {
      if (array[currentIndex] < pivot) {
        swap(partitionIndex, currentIndex)
        partitionIndex += 1;
      }
    }
    swap(partitionIndex, highIndex)
    return partitionIndex
  }
  if (inputLowIndex < inputHeightIndex) {
    const partitionIndex = partitionArray(inputLowIndex, inputHeightIndex)
    const RECURSIVE_CALL = true
    QuickSort(array, inputLowIndex, partitionIndex - 1, RECURSIVE_CALL)
    QuickSort(array, partitionIndex + 1, inputHeightIndex, RECURSIVE_CALL)
  }
  return array
}
// TODO TEST