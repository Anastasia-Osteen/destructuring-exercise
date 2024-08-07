let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // this code prints 8
console.log(yearNeptuneDiscovered); // this code prints 1846


let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
};
  
let {numPlanets, ...discoveryYears} = planetFacts;
  
console.log(discoveryYears); // this code prints both the yearNeptuneDiscovered values and yearMarsDiscovered values


function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
}
  
getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // this prints "Your name is Alejandro and your like purple"
getUserData({firstName: "Melissa"}) // "Your name is Melissa and you like green"
getUserData({}) // "Your name is undefined and you like green"




let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // This prints "Maya"
console.log(second); // This prints "Marisa"
console.log(third); // This prints "Chi"


let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
]
  
console.log(raindrops); // This prints "Raindrops on roses"
console.log(whiskers); // "This prints "whiskers on kittens
console.log(aFewOfMyFavoriteThings); // THis prints everything after "whiskers on kittens"


let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // This prints [10, 30, 20]



let obj = {
    numbers: {
      a: 1,
      b: 2
    }
};
  
let {a, b} = obj.numbers;


let arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]];


const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})