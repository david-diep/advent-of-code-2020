//using the given list of inputs, find the combination that sums to 2020 and return the product of the combinations
const fs = require('fs')
fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  const input = data.split('\n')

  for(let i =0; i< input.length-2;i++){
    for(let x=i+1; x<input.length-1;x++){
      for (let y = x + 1; y < input.length; y++) {
        const num1 = parseInt(input[i])
        const num2 = parseInt(input[x])
        const num3 = parseInt(input[y])
        console.log(num1 + num2 + num3)
        if (num1 + num2 + num3 === 2020) {
          console.log(`${input[i]} * ${input[x]} * ${input[y]} = ${num1 * num2 * num3}`)
          return `${input[i]} * ${input[x]} = ${num1 * num2}`
        }
      }

    }
  }
  console.log('nothing')
})
