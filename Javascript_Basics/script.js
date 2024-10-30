//ha alltid ";" i slutet av en statement, kan minska error
console.log(1); //printar ut "1" i console
console.log(2); //JS går uppifrån och ner (som css) 
//kommentar en rad

/*
Kommentar
flera 
rader
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 

//                          VARIABEL & CONSTANT
/*  Variablar är en låda som håller information
    "let" är en variabel som man kan ändra
    "const" är en variabel som man INTE kan ändra, den är konstant 
    "let" och "const" är relativt nytt, "var" är vad man använde sig utav tidigare
    Du kan ändra "var" på samma sätt som "let"
    När du ger en variabel ett namn kan du inte:
        -Ha mellanrum, ex my age. Skriv istället myAge (camelcase)
        -Kan endast innehålla:
            -Bokstäver
            -Nummer (får EJ börja med ett nummer)
            -Underscore
            -Dollarsigns
        -Använda sig av ett reserverat keyword
            https://www.w3schools.com/js/js_reserved.asp
*/
let age = 23; //när du skriver age kommer det visa 23
let year = 2024;
console.log(age); //--> 23
console.log(age, year); //--> 23 2024


age = 25; //gör om min let age från 23-->25. Behöver ej skriva let i början
console.log(age);//-->25


const points = 100;
// points =50; //--> Error, du kan inte ändra const
console.log(points);//-->100


var score = 75; 
console.log(score);//-->75
score = 175;//byter värdet på var, samma sätt som let
console.log(score);//-->175

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                           TYPES OF DATA
/*  Finns olika typer av primitiva datatyper, 7 st totalt 
        -Number
            -Nummer generellt ex 1, 4, 19, 100000, 1534.294324432
        -String
            -Serie av karaktärer, typ mening eller email, inom '' eller "" (beter sig på samma sätt)
            -Ex 'hello, world' eller "lisamaliqi@hotmail.com"
        -Boolean
            -true/false, tänk som en on and off knapp
        -Null
            -En variabel saknar värde med mening
            -Man kan skapa en variabel och ge den "Null" för att säga att den saknar värde
        -Undefined
            -Ganska lik "null"
            -Datorn ger en variabel detta ifall variabeln inte fått något värde ännu
        -Object
            -Mer komplexa data-strukturer ex arrays, dates, literals
        -Symbol
            -Används i kombination med objects
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                                STRINGS
console.log('Hello, world');//-->Hello, world

let email = 'lisamaliqi@hotmail.com'; //förvara string i en variabel, måste ha '' eller ""
console.log(email);//-->lisamaliqi@hotmail.com

//string concatenation = kombinera två strings 
let firstName = 'Lisa';
let lastName = 'Maliqi';

let fullName = firstName + lastName;
console.log(fullName); //-->LisaMaliqi

fullName = firstName + ' ' + lastName; //string lägger till mellanrum
console.log(fullName); //-->Lisa Maliqi

//getting character
console.log(fullName[0]);//-->L tar ut första bokstaven från "fullName"
console.log(fullName[2]);//-->s
console.log(fullName[9]);//-->q

//string length
console.log(fullName.length);//-->11 visar hur lång "fullName" är, hur många karaktärer, mellanslag räknas som en karaktär
//.lengts är ingen funktion, den visar bara information om värdet

//string methods
//om du ser något med .extext() så betyder det att detta är en method som ger en funktion
console.log(fullName.toUpperCase());//-->LISA MALIQI
let lowerCase = fullName.toLowerCase();
console.log(lowerCase);//-->lisa maliqi
console.log(fullName);//-->Lisa Maliqi 
//bara för att man lägger ett värde till variabeln i något som console.log så ändras inte startvariabeln. 
let index = email.indexOf('@');//indexOf berättar vad för index en viss karaktär har
console.log(index);//-->10

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                                STRING-METHODS
//vanliga string methods

let emailLast = email.lastIndexOf('l');
    //lastIndexOf() visar sista index karaktären i en viss string'
    //'l' visar positionen på den sista "l" i den stringen 
console.log(emailLast);//-->17

let emailSlice = email.slice(4,18);
    //slice() delar en string, eller slicear den 
    //två summor, från och till. 4=från 18=till
    //behöver inte ha ett slutvärde
console.log(emailSlice);//-->maliqi@hotmail

let emailSub = email.substr(4,10);
    //substr() liknar string, men utgår från första parametern
    //denna metod ska undvikas så mycket som möjligt, kommer försvinna snart
    //från och addition. 4=från 10=10 steg framåt
console.log(emailSub);//-->maliqi@hot

let emailRep = email.replace('l', 'q');
    //replace() byter ut en vald karaktär till en annan
    //byter bara ut första 'l', inte resten
    //byt x till y. byt ut 'l' med 'q'
console.log(emailRep);//-->qisamaliqi@hotmail.com

//.trim(); tar bort whitespace innan och efter text i en string
//Math.random();  random nummer mellan 0-1
//Math.random() * 50:  random nummer mellan 0-50
//Math.floor(); tar bort decimaler
//Math.floor(Math.random() * 50); random nummer mellan 0-50 men utan decimaler

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                              TEMPLATE-STRINGS

const title = 'Best reads of 2019';
const author = 'Mario';
const likes2 = 30;

//concatination way
let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes2 + ' likes.';
console.log(result);//-->The blog called Best reads of 2019 by Mario has 30 likes.

//template string way
let result2 = `The blog called ${title} by ${author} has ${likes2} likes.`;
//backticks istället för '', dollarsign sen curly brackets 
console.log(result2);//-->The blog called Best reads of 2019 by Mario has 30 likes.

//creating html templates
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes2} likes</span>
`; 

console.log(html);/*-->
<h2>Best reads of 2019</h2>
<p>By Mario</p>
<span>This blog has 30 likes</span>
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                                NUMBERS
let radius = 10;
const pi = 3.14;
console.log(radius, pi);//-->10 3.14

/*Math-operators är 
    + = addition
    - = minus
    * = gånger
    / = delat med
    ** = upphöjt i
    % = procent
*/
console.log(5+2);//-->7
console.log(5-2);//-->3
console.log(5*2);//-->10
console.log(6/2);//-->3
console.log(3**3);//-->27
console.log(10%3);//-->1   3 får plats 3 gånger i 10, men 1 finns fortfarande kvar

let area = pi * radius**2;
console.log(area);//-->314

/*Order of operation - B I D M A S
    1.Bracets ()
    2.Indice "upphöjt i"
    3.Division
    3.Multiplication
    5.Addition
    5.Subtraction
*/

let matte = 5 * (10-3)**2;
console.log(matte);//-->245

let likes = 10;
likes =likes + 1;
console.log(likes);//-->11
likes++;//++ är shortcut för att säga +1 i princip
console.log(likes);//-->12
likes--;//++ är shortcut för att säga -1 i princip
console.log(likes);//-->11
/* shortcuts för värden över 1
let likes = 10;
likes += 10; -->20 (10+10)
likes -= 5; -->5 (10-5)
likes *= 2; -->20 (10*2)
likes /= 2; -->5 (10/2)
*/

//NaN - Not a Number
//om man försöker kalkylera något som inte resulterar i ett nummer
console.log(5/'hello world');//-->NaN

//Number concatenation
let blog = 'the blog has ' +likes + ' likes';
console.log(blog);//-->the blog has 11 likes

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                                ARRAYS
let ninjas = ['Lisa', 'Tova', 'Alicia']; //när du skapar en array måste du ha [] och förvara värdet i detta
console.log(ninjas);/*-->(3) ['Lisa', 'Tova', 'Alicia']
0: "Lisa"
1: "Tova"
2: "Alicia"
length: 3
[[Prototype]]: Array(0)*/

console.log(ninjas[1]);//-->Tova
//jag tar ut värdet med index 1 från arrayen 

ninjas[2] = 'Fanny';//byter värder på index 2 i arrayen 
console.log(ninjas);/*-->(3) ['Lisa', 'Tova', 'Fanny']
0: "Lisa"
1: "Tova"
2: "Fanny"
length: 3
[[Prototype]]: Array(0)*/

let ages = [20, 25, 30, 35];
console.log(ages[2]);//-->30
//Man kan förvara olika datatyper i arrays, så som nummer och strings

let randomArray = ['Lisa', 'Tova', 23, 24];//förvara två olika datatyper i samma array(saknar lite logic men det går!)
console.log(randomArray);/*-->(3) ['Lisa', 'Tova', 23, 24]
0: "Lisa"
1: "Tova"
2: 23
3: 24
length: 4
[[Prototype]]: Array(0)*/

console.log(randomArray.length);//-->4    arrays kan också ha properties 


//Array methods
let result3 = ninjas.join(',');//joinar alla värden i arrayn med ","
console.log(result3);//-->Lisa,Tova,Fanny

let result4 = ninjas.indexOf('Tova');//vilket index har "Tova" i arrayn
console.log(result4);//-->1

let result5 = ninjas.concat(['Alicia', 'Sofia']);//Sätter ihop två arrays tillsammans
//du skriver den andra arrayn i methods-delen
console.log(result5);/*-->(5) ['Lisa', 'Tova', 'Fanny', 'Alicia', 'Sofia']
0: "Lisa"
1: "Tova"
2: "Fanny"
3: "Alicia"
4: "Sofia"
length: 5
[[Prototype]]: Array(0)*/

let result6 = ninjas.push('Anna');//skickar tillbaka längden på den nya arrayen, ändrar originalvärdet
console.log(result6);//-->4
console.log(ninjas);//-->Har numera fyra värden i min array

let result7 = ninjas.pop('Anna');//Tar bort det sista värdet i arrayen
console.log(result7);//-->Anna     visar vilket värde som tas bort
console.log(ninjas);//-->"Anna" är inte längre med i arrayen

//.shift() tar bort första värdet i arrayn

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                                NULL & UNDEFINED 
let age2;
console.log(age2, age2 + 3, `The age is ${age2}`);//-->undefined NaN 'The age is undefined'
//Undefined för att vi inte gett age2 ett värde ännu
//NaN för att undefined + 3 är inget nummer 

let ageNull = null;
console.log(ageNull, ageNull + 3, `The age is ${ageNull}`);//-->null 3 'The age is null'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                                BOOLEANS & COMPARISION
//representerar true och false
console.log(true, false, 'true', 'false');//-->true false 'true' 'false'

//methods can return booleans
let email2 = 'lisamaliqi@hotmail.com';
let atResult = email2.includes('@');
let exResult = email2.includes('!');
console.log(atResult);//-->true
console.log(exResult);//-->false

let names = ['Mario', 'Luigi', 'Toad'];
let namesResult = names.includes('Luigi');
console.log(namesResult);//-->True

//comparision operators
let age3 = 23;
console.log(age3 == 23);//-->True    age3 är lika med 23
console.log(age3 == 25);//-->False
console.log(age3 != 25);//-->true    age3 är inte lika med 25
console.log(age3 > 20);//-->true    age3 är större än 20
console.log(age3 < 20);//-->false    age3 är mindre än 20
console.log(age3 <= 23);//-->true    age3 är mindre än eller lika med 23
console.log(age3 >= 23);//-->true    age3 är större än eller lika med 23
console.log('finsih');



let name2 = 'lisa';
console.log(name2 == 'lisa');//-->True  name2 är lika med lisa
console.log(name2 == 'Lisa');//-->False  name2 är lika med Lisa  (stort L)
console.log(name2 > 'crystal');//-->True  name2 är större än crystal
//detta pga bokstaven l kommer senare i alfabetet än c
console.log(name2 > 'Lisa');//-->true  name2 är större än Lisa  
//detta pga stora bokstäver är mindre värda än små bokstäver 
console.log(name2 > 'Crystal');//-->True  name2 är större än crystal

console.log('finsih');


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                           LOOSE VS STRICT COMPARISION
let agee = 23;

//loose comparision
console.log(agee == 23);//-->true
console.log(agee == '23');//-->true

console.log(agee != 23);//-->false
console.log(agee != '23');//-->false

console.log('finsih');


//strict comparision
console.log(agee === 23);//-->true
console.log(agee === '23');//-->false

console.log(agee !== 23);//-->false
console.log(agee !== '23');//-->true

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            TYPE CONVERSION
//omvandlar en datatyp till en annan
let score1 = '100';
console.log(score1 + 1);//-->1001
console.log(typeof score1);//-->string

score1 = Number(score1);//omvandlar score1 som tidigare var en string till ett nummer
console.log(score1 + 1);//-->101
console.log(typeof score1);//-->number

let option = Number('hello');
console.log(typeof option);//-->number
console.log(option);//-->NaN

let option2 = String(80);//gör om ett nummer till en string
console.log(typeof option2);//-->string
console.log(option2);//-->80

/*Man kan använda samma princip för Boolean. skriv let xxx = Boolean(100);
så gör du om numret till boolean. vissa nummer är false andra är true
0=false
minusnummer och plusnummer=true

strings är alltid true om de innehåller ett värde, kan va 0, giesnfk, 29570
om det inte innehåller ett värdea (alltså tom) så visas den som false
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////