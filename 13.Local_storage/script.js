/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

//                      WHAT IS LOCAL STORAGE
/**
 * Hur man sparar data i applikationen när användaren lämnar och kommer tillbaka 
 * Man sparar alltså datan i användarens browser så att den finns när användaren kommer tillbaks
 * 
 * LocalStorage förvaras i window objektet i browsern
 * Innehåller en lengt som säger hur mycket saker man har i local storage
 */


/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

//                     STORING AND GETTING DATA

//      store data in local storage
//innehåller två argument
//1: namnet på key
//2: värdet på key
localStorage.setItem('name', 'lisa');
localStorage.setItem('age', 23);
//allt vi förvarar i localStorage måste vara string
//23 blir alltså en string i webben



//      get data from local storage
//jag vill ta ut webbens local storage
//getItem(name-of-the-key) som argument
let myName = localStorage.getItem('name');
console.log(myName);

let myAge = localStorage.getItem('age');
console.log(myAge);



//      Updating data
//du använder bara setItem igen och skriver över det gamla värdet
localStorage.setItem('name', 'tova');
myName = localStorage.getItem('name');
console.log(myName);

//man kan också uppdatera såhär:
localStorage.age = 24;
myAge = localStorage.getItem('age');
console.log(myAge);


//om jag nu tar bort rad 23-24 samt 42-50 så kommer det loggas ut tova och 24 pga det var det senaste som skrevs in


/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

//                     DELETING STORAGE DATA
// remove one item
//argument är den key man vill ta bort
// localStorage.removeItem('name');

//försöker jag hämta ut name så får jag resultatet null
myName = localStorage.getItem('name');
console.log(myName);


// remove all items
localStorage.clear();

myName = localStorage.getItem('name');
myAge = localStorage.getItem('age');

//detta bör printa ut null null
console.log(myName, myAge);

console.log('---------------------------------------------');


/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

//                     STRINGIFYING AND PARSING DATA

//array som vi vill förvara i localStorage
const todos = [
    {text: 'Plugga programmering', author: 'Lisa'},
    {text: 'Virka tills fingrarna gör ont', author: 'Tova'},
    {text: 'Be om mat', author: 'Balder'},
];

//vi måste först göra om detta till en JSON string
//använd sig av metoden JSON.stringify()
console.log(JSON.stringify(todos));

//förvara det i localStorage
localStorage.setItem('todos', JSON.stringify(todos));

//hämta det
const storedData = localStorage.getItem('todos');
console.log(storedData);

//konvertera tillbaks till array för att använda det
//gör om JSON filen till ett javascript objekt med parse
console.log(JSON.parse(storedData));

