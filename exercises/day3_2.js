/*let b = prompt("Enter the base of the triangle: ")
let h = prompt("Enter the height", "The height of the triangle")

let theArea = (0.5*b*h)

console.log(theArea)*/

let Age = prompt("Enter Birth year")
let year = new Date()
let myAge = year.getFullYear() - Age

/*Using ifelse if
/*
if (Age != "" && myAge >= 18){
    alert(`You are ${myAge} now you can drive`)
} else if(Age != "" && myAge < 18){
    alert(`You are ${myAge} and less than 18, you can't drive alone`)
} else {
    alert("The field can't be empty... please enter your birth year")
} */

/*Using switch*/
if (Age != "") {
    switch (true) {
        case myAge >= 18:
            alert(`You're ${myAge} now you can drive`)
            break
        case myAge < 18:
            alert(`You're ${myAge}, you're less than 18. Sorry you can't drive`)
            break
    }
}
    else {
        alert("The field can't be empty... please enter your birth year")
}
