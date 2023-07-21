let rangeMin = parseInt(prompt("key in the min number to check for prime number:", 1),10)
let rangeMax = parseInt(prompt("key in the max number to check for prime number:", 10), 10)
let output = []

for(let i = rangeMin;i<=rangeMax;i++){
  for(let j = 0;j<=i**(1/2);j){
    j += 1
    if(i%j===0 && j != 1){
      break
    } else if (j === Math.floor(i ** (1 / 2)) && j != 1){
      output.push(i)
      break
    } else if (i === 2 || i === 3){
      output.push(i)
      break;
    }
  }
}

console.log(`following are(is) prime number(s) among ${rangeMin} to ${rangeMax}:\n  ${output}`)