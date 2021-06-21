let myArray = [5,4,7,2,1,8,10,9,6]

const bubbleSort = (arrayToSort) => {
    for (let firstIndex = 0 ; firstIndex < arrayToSort.length ; firstIndex += 1) {
        for (let secondIndex = 0 ; secondIndex < arrayToSort.length ; secondIndex += 1) {
            if (arrayToSort[firstIndex] < arrayToSort[secondIndex]) {
                let temp = arrayToSort[firstIndex]
                arrayToSort[firstIndex] = arrayToSort[secondIndex] 
                arrayToSort[secondIndex] = temp
            }
        }
    }
    return arrayToSort
}

console.log('myArray sorted',bubbleSort(myArray))