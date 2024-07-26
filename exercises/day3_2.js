/*let b = prompt("Enter the base of the triangle: ")
let h = prompt("Enter the height", "The height of the triangle")

let theArea = (0.5*b*h)

console.log(theArea)*/

let Age = prompt("Enter Birth year")
let year = new Date()
let myAge = year.getFullYear() - Age

if (year.getFullYear() - Age >= 18){
    alert(`You are ${myAge} now you can drive`)
}