declare function require(name:string);
const fs = require('fs')
fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  const input = data.split('\n')
  let slopes = [[1,1],[3,1],[5,1],[7,1],[1,2]];
    let total = 1;
    for(let slope of slopes)
    {
        let [xinc, yinc] = slope;
        let x = 0;
        let hitcount = 0;
        for(let y = 0; y < input.length; y += yinc)
        {
            if(input[y][x] == '#')
            {
                hitcount++
            }

            x += xinc;
            if(x >= input[y].length)
            {
                x = x%input[y].length;
            }
        }
        total = total * hitcount;
    }
    return console.log(total);


})
