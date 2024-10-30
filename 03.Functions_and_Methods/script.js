//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            WHAT ARE FUNCTIONS?
/*
Functions definerar en block av kod som vi sedan kan kalla på och utföra när vi vill
Se funktioner som en låda med kod i sig som gör en viss sak
För att få funktionen att börja så skriver man:
functionName();

Vi kan skriva funktionen hur många gånger vi vill, men vi behöver bara skriva den en gång
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                       FUNCTION DECLARATION AND EXPRESSSIONS
//function declaration
//Hur man skapar en funktion:
function greet(){
    console.log('Hello there!');//detta loggar inte
}

//function expression
//i princip enda gången man har ; bakom }
const speak = function(){
    console.log('Good day');
};

greet();//anropar funktionen -->Hello there!
greet();

speak();//anropar const speak -->Good day

//jag kan skriva en function declaration i slutet av dokumentet och det kommer ändå att fungera
//jag kan inte göra samma sak med function expression
//bästa är egentligen att försöka lägga alla sina funktioner i toppen av dokumentet

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            ARGUMENTS AND PARAMETERS

const speak1 = function(name){//name är en "parameter"
    console.log(`Good day ${name}`);
}

speak1();//-->Good day undefined
speak1('Lisa');//-->Good day Lisa
//lisa är en "argument"
//lisa är att du lägger in ett värde in i funktionen

//variabeln name kan bara användas inom den scopen, alltså funktionen


const speak2 = function(name = 'Tova', time = 'night'){//name är en "parameter" tova och night är "default" värden
    console.log(`Good ${time} ${name}`);
}

speak2();//-->Good night Tova
//saknar väden, därav används default 
speak2('Lisa')//-->Good night Lisa
//första värdet ändras, medans andra är kvar på default
speak2('Lisa', 'morning');//-->Good morning Lisa
//order på arguments MÅSTE vara samma som parameters

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            RETURNING VALUES

const calcArea = function(radius){
    let area = 3.14 * radius**2;
    //om jag hade skrivit log här så hade det bara sparats lokalt, inte globally
    //alltså om jag försöker logga "area" utanför denna scopen så kommer det inte fungera för area är local 

    return area;//

    //man hade kunnat skriva de två raderna i en rad genom att skriva:
    // return 3.14 * radius**2;
};

const newArea = calcArea(5);
console.log(newArea);//-->78.5

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                             ARROW FUNCTIONS
//ett nytt sätt i JS för att göra funktioner kortare och snyggare
/* Tidigare funktion
const calcArea = function(radius){
    return 3.14 * radius**2;
} 
    */
//Arrow function
const calcArea1 = (radius) => {//man behöver ej skriva "function", räcker med arrows
    //har man bara en parameter (radius) så kan man ta bort parateserna runt ordet radius för att korta ner ännu mer
    //har man ingen parameter måste man ha paranteser, samma om det är mer än en parameter
    return 3.14 * radius**2;
};

//om man bara har ett return value i funktionen kan man korta ner ännu mer genom att göra detta:
//const calcArea1 = radius => 3.14 * radius**2;

const area1 = calcArea1(5);
console.log('area is: ', area1);//-->78.5
//fungerar på exakt samma sätt


//övning 1
/*
const practice1 = function(){
    return 'hello, world'
}
*/
const practice1 = () => 'hello, world';
const test1 = practice1();
console.log(test1);//-->hello, world


//övning 2
/* 
const bill = function(products, tax){
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
}
 */
const bill = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
};
console.log(bill([10,15,30], 0.2));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                           FUNCTIONS VS METHODS
//functions
const greet1 = () => 'Hello';

let result1 = greet1();
console.log(result1);//-->Hello


//methods
const name = 'Lisa';

let result2 = name.toUpperCase();//anropar metoden med .
console.log(result2);//-->LISA

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                           CALLBACK FUNCTION AND FOREACH
//sätta in en funktion som en argument
const myFunc = (callbackFunc) => {
    let value = 50;
    callbackFunc(value);
};

/* 
myFunc(function(value){ //myFunc är funktionen där uppe, function är en funktion som sätts som en argument
    console.log(value); 
});
 */

//arrow function
myFunc(value => { 
    console.log(value); 
});


let people = ['Lisa', 'Tova', 'Alicia', 'Tiger', 'Casper'];
/* 
people.forEach(function(person){
    console.log(person);
});
 */
//arrow function
people.forEach((person, index) => {
    console.log(index, person);
});

console.log('-------------------------------');

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
};

people.forEach(logPerson);//detta ger i princip samma resultat

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                           CALLBACK FUNCTION IN ACTION

const ul = document.querySelector('.people1');//ul class i html som heter people

const people1 = ['Lisa', 'Tova', 'Alicia', 'Tiger', 'Casper'];

let html = ``;

people1.forEach(people1 => {
    //skapa en html template för varje person
    html += `<li style="color: purple">${people1}</li>`
    //för varje person i arrayn lägger vi till denna snippen av kod i html
})

console.log(html);

ul.innerHTML = html;
//kommer mer om detta i senare avsnitt

