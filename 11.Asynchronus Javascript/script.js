//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                      WHAT IS ASYNC JAVASCRIPT?
/*
Js är vanligtvis en synkronis kod, detta betyder att js kör en rad kod i taget
nackdel med detta  är att ifall man hämtar data från ett annat ställe, så kan det ta 2-3 sek
men koden som är under denna funktionen till att hämta data körs inte förrens all data är upphämtad
Async = starta något nu och slutför det senare
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                         ASYNC IN ACTION

console.log(1);
console.log(2);

//async in action
setTimeout(() => {
    console.log('callback function fired!'); 
    console.log('---------------------------------------------------------------');
}, 2000);
//denna funktionen körs igång efter två sek, men det som är under (3,4) kommer att köras trotts att
//det är en delay på 2 sek

console.log(3);
console.log(4);

console.log('---------------------------------------------------------------');


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            WHAT ARE HTTP REQUESTS
//man gör detta för att hämta data från en annan server
//vi gör dessa förfrågningar till api endpoints


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                       MAKING A HTTP REQUEST

const request = new XMLHttpRequest();

//tracka progressen av requesten
request.addEventListener('readystatechange', () => {
    console.log(request, request.readyState);
    if (request.readyState === 4) {
        //får ut json filen 
        console.log(request.responseText);
    };
});

//startar en request
//tar två argument
//1. string, typ av request vi vill göra
//2. string, Vart vi skickar den till 
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
//skickar requesten
request.send();

//request.readeState nummer förklarade:
/*
0 == UNSENT
    Client has been created, open() has not been called yet
1 == OPENED
    open() has been called
2 == HEADERS_RECEIVED
    send() has been called, and headers and status are available
3 == LOADING
    downloading: responseText holds partial data
4 == DONE 
    the operation is completed
*/


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                        STATUS CODE
/* 
const request2 = new XMLHttpRequest();

//tracka progressen av requesten
request2.addEventListener('readystatechange', () => {
    console.log(request2, request2.readyState);
    //kommer bara köra ifall det är en ok respons samt status på 200
    if (request2.readyState === 4 && request2.status === 200) {
        //får ut json filen 
        console.log(request2, request2.responseText);
    } else if (request2.readyState === 4) { //saknar req status 200, något blir fel
        console.log('Could not fetch the data');
    };
});

//startar en request
//tar två argument
//1. string, typ av request vi vill göra
//2. string, Vart vi skickar den till 
request2.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
//skickar requesten
request2.send(); */







//status 200 == allt gick bra, har kommit tillbaka med data request
//status 404 == kan inte hitta källan vi försöker skicka till

//status inom 100 == infomrationresponses
//status inom 200 == success
//status inom 300 == redirection messages 
//status inom 400 == client error response, error in browser
//status inom 500 == server error resoinse, något fel på servern 


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                         ASYNC CODE CALLBACK

//lägger det i en funktion
/* const getTodos = (callback) => {
    const request3 = new XMLHttpRequest();

    //tracka progressen av requesten
    request3.addEventListener('readystatechange', () => {
        console.log(request3, request3.readyState);
        //kommer bara köra ifall det är en ok respons samt status på 200
        if (request3.readyState === 4 && request3.status === 200) {
            callback(undefined, request3.responseText);
        } else if (request3.readyState === 4) { //saknar req status 200, något blir fel
            callback('could not fetch data', undefined);
        };
    });

    request3.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    request3.send();
};

//async javascript:
//detta loggas först
console.log(1);
console.log(2);

//detta startas efter 1 och 2
//detta blockar inte kod som kommer under
//börjar nu och avslutas senare
getTodos((err, data) => {
    console.log('callback fired');
    if (err){
        console.log(err); //om err är true, logga detta
    } else {
        console.log(data); //om err är false, logga detta 
    };
});

//detta loggas sen, men kommer loggas innan vi har hämtat data från funktionen
console.log(3);
console.log(4); */

//sedan placeras resultatet i funktionen här


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            ADDING AND REMOVING CLASSES








//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                      PARENTS, CHILDREN AND SIBLINGS







//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            EVENTS AND EVENT LISTENERS









//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            CREATING AND REMOVING ELEMENTS








//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            EVENT BUBBLING AND DELEGATION









//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            MORE EVENTS







//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            MAKING A POPUP
