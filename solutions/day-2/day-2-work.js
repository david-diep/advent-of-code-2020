//using the given list of inputs, find the number of inputs that match their respective preceding criteria
const fs = require('fs')
fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  const input = data.split('\n')
  var valid=0;
  var valid2=0;
  for (let i = 0; i < input.length; i++) {

    const info = input[i].split(" ")
    if (info.length<3) break;
    const range = info[0].split("-")
    const lowRange=parseInt(range[0])
    const highRange=parseInt(range[1])
    const letter = info[1].charAt(0)
    const password = info[2]
    let exclusive =0;
    let num = 0;
    for(let x=0;x<password.length;x++){
      if(password.charAt(x)===letter){
        num++
      }
      if(x===lowRange-1||x===highRange-1){
        if(password.charAt(x)===letter){
        exclusive++
      }

      }
    }
    if (lowRange<=num && highRange>=num){
      valid+=1;
    }
    if(exclusive===1){
      valid2+=1
    }
  }
  console.log(valid2)
})
