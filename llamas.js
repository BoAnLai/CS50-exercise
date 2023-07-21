let llamas = 0
llamas = parseInt(prompt("how many llamas you have at start?", 15), 10)

let goal = 0
goal = parseInt(prompt("how many llamas you want at the end?", 15), 10)

if (Math.floor(llamas * 1 / 3) - Math.floor(llamas * 1 / 4)) < 1) {
  console.log("the group won't grow")
} else {
  console.log("count start")
}

let year = 0
let size = llamas

do {
  size += Math.floor(size*1/3) - Math.floor(size*1/4)
  //size = Math.floor(size * (1 + 1 / 3 - 1 / 4))
  //  size *= 1+1/3-1/4
  year++
}
while (size < goal)

console.log(`it takes ${year} years for llamas to grow from ${llamas} to ${goal}`)
//1/3 born 1/4 pass away each year



