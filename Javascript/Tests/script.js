let myArray = [ "Salad", "Chicken", "Steak"];
const myString = "Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri";

myArray[1] = "Stew"
myArray[0] = "Jelly"
myArray.unshift("Eggs")

console.log(myArray);

const split = myString.split("+")
split.length
console.log(split + "Split")
for(i = 0; i > split.length; i++){
}
console.log(myString , " base string")

const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
const cities = data.split(",")
cities.length
cities[0]