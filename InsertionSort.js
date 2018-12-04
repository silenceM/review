function InsertionSort(orginArray) {
  const array = [...orginArray]
  for (let i = 0; i < array.length; i += 1) {
    let currentIndex = i;
    while(
      currentIndex - 1 >= 0 &&
      array[currentIndex] < array[currentIndex - 1]
    ) {
      [array[currentIndex - 1], array[currentIndex]] = [
        array[currentIndex], array[currentIndex - 1]]
      currentIndex -= 1
    }
  }
  return array  
}