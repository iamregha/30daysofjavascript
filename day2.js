console.log(`The sum of 3 and 2 is 5`) // Statically writting the data

let a = 3
let b = 2
let js = 'JavaScript'

console.log(`The sum of ${a} and ${b} is ${a+b}`) // Injecting the data dynamically

console.log(`${a} is greater than ${b}: ${a > b}`)

console.log(js.length)

let firstLetter = js[0]
console.log(firstLetter)
let lastIndex = js.length-1
console.log(js[lastIndex])
console.log(js.toUpperCase())
console.log(js.substring(4,10))

let sentence = "I love JavaScript as a Language"

console.log(sentence.charAt(5))
console.log(sentence.charCodeAt(5))