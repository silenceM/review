function SelectionSort(originArray) {
  const array = [...originArray]
  for (let i = 0; i < array.length - 1; i += 1) {
    let minIndex = i
    for (let j = i + 1; j < array.length; j += 1) {
      minIndex = array[minIndex] > array[j] ? j : minIndex
    }
    [array[minIndex], array[i]] = [array[i], array[minIndex]]
  }
  return array
}