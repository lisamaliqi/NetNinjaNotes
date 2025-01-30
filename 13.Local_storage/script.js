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

