function BubbleSort(originArray) {
  const array = [...originArray]
  for (let i = 0; i < array.length; i += 1) {
    for (let l = 0; l < array.length - i; l += 1) {
      if (array[l] > array[l + 1]) {
        [array[l], array[l + 1]] = [array[l + 1], array[l]]
      }
    }
  }
  return array
}