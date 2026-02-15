function twoSum(numbers, target) {
  let sum = 0 
  
  for (let i = 0; i < numbers.length; i++ ) {
    for (let x = 0; x < numbers.length; x++) {
      if (x !== i) {
        sum = numbers[i] + numbers[x]
        if (sum === target) {
          return [i, x]
        }
      }
    }
  } 
}