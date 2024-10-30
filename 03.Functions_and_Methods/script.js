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


//                            ELSE AND IF ELSE











//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            ELSE AND IF ELSE













//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            ELSE AND IF ELSE













//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            ELSE AND IF ELSE











