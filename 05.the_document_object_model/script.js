//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                      INTERACTING WITH A WEB PAGE
/*
Man kan göra massor av saker, ex 
    -Lägga till content på en web page
    -Ändra stil på CSS
    -Reagerar på user events, ex ett klick
    -Coola effekter så som en pop-up
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                         THE QUERY SELECTOR

//bästa sättet att ta ett element från the DOM, alltså the document (html/css)
const para = document.querySelector('p');//går upp till ner i DOM, tar första 
//p-taggen den hittar, alltså den med "hello world"
console.log(para);//--> <p>Hello world</p>

const para2 = document.querySelector('.error');//.=class, tar första element med class=error
console.log(para2);//--> <p class="error">This is an error message</p>

const para3 = document.querySelector('div.error');//letar efter första div med class=error
console.log(para3);//--> <div class="error">This is another error</div>

const para4 = document.querySelector('body > h1');//tar ut första h1 elementet i body
console.log(para4);//--> <h1>The document object method</h1>


const paras = document.querySelectorAll('p');
console.log(paras);//blir en nodeList, ser ut som en array men kan ej användas som en array
console.log(paras[0]);//--> <p>Hello world</p>    tar ut första p i index 0

paras.forEach(para => {
    console.log(para);
});//-->nu visar den alla p elements i consolen

const errors = document.querySelectorAll('.error');
console.log(errors);//-->nodeList för alla element med classen error

console.log('--------------------------------------------');


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            OTHER WAYS TO QUERY THE DOM
//get element by ID
const title = document.getElementById('page-title');
console.log(title);//elementet som har id page-title


//get elements by class name
const errors2 = document.getElementsByClassName('error');
console.log(errors2);//får ut de element som har class-name error
//man får ut detta som en HTMLcollection, ganska lik node list men man kan ej använda forEach metoden


//get element by tag name
const allPara = document.getElementsByTagName('p');
console.log(allPara);//får ut de element som har tag name p
console.log(allPara[1]);//får ut elementet som ligger på index 1 i alla paragrafer

console.log('--------------------------------------------');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                        ADDING AND CHANGING PAGE CONTENT

// const para = document.querySelector('p');
console.log(para.innerText);//för att få ut innehållet i taggen, alltså "hello world"

para.innerText = 'I am AWESOME';//byter vad som står i webbsidan
para.innerText += ' and you are NOT';//tar det som är i inner text och lägger till (+) det man skriver


// const paras = document.querySelectorAll('p');
paras.forEach(para => { 
    console.log(para.innerText);//loggar allt innehåll i p-taggar 
    para.innerText += ' new text';//lägger till "new text" bakom alla p-taggar i dokumentet
})


const content = document.querySelector('.content');
console.log(content.innerHTML);//se vad för HTML som är inne i class=content 
content.innerHTML = '<h2>Make this a new h2!</h2>';//har ändrat html värdet till h2 

const people = ['Mario', 'Luigi', 'Yoshi'];
people.forEach (person => {
    content.innerHTML += `<p>${person}</p>`;//en lista från arrayn people syns i dokumentet
});

console.log('--------------------------------------------');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                        GETTING AND SETTING ATTRIBUTES

const link = document.querySelector('a');

console.log(link.getAttribute('href'));//få tag på en attribut 
link.setAttribute('href', 'https://www.aftonbladet.se/');//1.vilket attribut vill du ändra? 2.Vad vill du ändra den till?
//tar alltså det som är i href och gör om det till en länk till aftonbladet
link.innerText = 'Länk till aftonbladet';//har nu ändrat text till länken


const mssg = document.querySelector('p');

console.log(mssg.getAttribute('class'));//-->error          får ut classen på den taggen
mssg.setAttribute('class', 'sucess');//byter värdet på classen
console.log(mssg.getAttribute('class'));//-->sucess         får ut classen på den taggen

//skapa en attribut 
mssg.setAttribute('style', 'color: green;');//gör om texten till grön, skapar en ny attribut och ger det ett värde

console.log('--------------------------------------------');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            ADDING AND REMOVING STYLES

const titleStyle = document.querySelector('h2');
// titleStyle.setAttribute('style', 'margin: 50px');//detta skriver över tidigare style

console.log(titleStyle.style);//tar fram all css styles
console.log(titleStyle.style.color);//ta fram specifikt vilket värde attributen color har 
titleStyle.style.margin = '50px';//detta lägger till en ny property samtidigt som man behåller gamla
titleStyle.style.color = 'red';//ändrar värdet på color propertyn
titleStyle.style.fontSize = '60px';//ändrar fontsize till 60px (måste skriva med camelCase, ej font-size)
titleStyle.style.margin = '';//tar bort margin, sätter man string som empty så tar det bort värdet

console.log('--------------------------------------------');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            ADDING AND REMOVING CLASSES

const pTag = document.querySelectorAll('p');
const index2 = pTag[2];//index2 har värdet av den p-taggen på index 2
console.log(index2.classList);//får upp alla classes som är i p-taggen på index 2
index2.classList.add('javaScript');//lägger till en class som heter javaScript
index2.classList.remove('javaScript');//tar bort javascript classen
index2.classList.add('sucess');//lägger till classen sucess (gör texten grön pga finns i style.CSS)
index2.classList.toggle('toggle');//toggle är ifall classen inte finns = lägg till den, men om den finns = ta bort den 


//ÖVNINGEN
const test = document.querySelectorAll('.test');

test.forEach(test => {
    if(test.textContent.includes('error')){//textContent visar text ÄVEN om det är gömt av ex span, det gör ej innerText
        test.classList.add('error');
      } else if(test.textContent.includes('sucess')) {
        test.classList.add('sucess');
      }
    });

console.log('--------------------------------------------');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                      PARENTS, CHILDREN AND SIBLINGS
//childre
const article = document.querySelector('article');
console.log(article.children);//-->får ut en HTMLcollection med alla articles children

//convert HTMLcollection to array so that i can do forEach
let array = Array.from(article.children);//skapar en array från article.children
console.log(array);//loggar arrayn

array.forEach(child => { //forEach för att lägga in en class i varje element
    child.classList.add('article-element');
});


//parent
const articleTitle = document.querySelector('h4');
console.log(articleTitle.parentElement);//får ut vad elementet har för parent
console.log(articleTitle.parentElement.parentElement);//får ut parent av parent av elementet


//sibling
console.log(articleTitle.nextElementSibling);//får ut vilket element som är sibling på tur till elementet
console.log(articleTitle.previousElementSibling);//får ut vilket element som är sibling innan elementet


//chaining
console.log(articleTitle.nextElementSibling.parentElement.children);

console.log('--------------------------------------------');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            EVENTS AND EVENT LISTENERS
//simple example
const button1 = document.querySelector('button');

button1.addEventListener('click', () => {
    console.log('You clicked me!');
});//om jag klickar på "button" så kommer det loggas "you clicked me!"
//1.vad för typ av event är det vi letar efter = click  
//2.callback function, vad som kommer hända när vi utför eventet click = loggar 'you clicked me'


//bigger example
const items = document.querySelectorAll('.events li');
//vi måste göra forEach på alla i nodeListan pga vi kan ej sätta eventListener på en nodeList
items.forEach(item => {//om jag trycker på en av grejerna i listan så loggas något
    item.addEventListener('click', event => {
        // console.log('Item clicked');//loggas "item clicked"
        // console.log(event);//loggas pointerEvent, alltså alla dess funktioner tror jag?
        // console.log(item);//loggas specifikt den raden man trycker 

        // console.log(event.target);//loggas specifikt den raden man trycker 
        //event.target är det bättre alternativet, ha det som vana

        event.target.style.textDecoration = 'line-through';//drar en linje över texten när man trycker på den
    });
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            CREATING AND REMOVING ELEMENTS

const ul = document.querySelector('.creating ul')
// ul.remove();//tar bort ul listan helt från the DOM

const button = document.querySelector('.creating button');
button.addEventListener('click', () => {
    // ul.innerHTML += '<li>Something new</li>';//när man trycker på knappen skapas en ny rad där det står "something new"
    const li = document.createElement('li');//skapar li som är tom
    li.textContent = 'something new to do';//ger li ett innehåll

    // ul.append(li);//gör så att li läggs till i slutet av listan
    //ul är parent
    //append tar li (child) och lägger det i slutet av ul (parent)

    ul.prepend(li);//läggs till i början av listan
    //ul är parent
    //prepend tar li (child) och lägger det i början av ul (parent)
}); 
//trycker man på knappen kommer en ny rad upp, men man kan ej ta bort den raden på samma sätt som the OG raderna

const items2 = document.querySelectorAll('.creating li');

items2.forEach(item => {
    item.addEventListener('click', event => {
        event.target.remove();//man tar bort listan när man trycker på den
    });
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            EVENT BUBBLING AND DELEGATION

const ul3 = document.querySelector('.bubbling ul')

const button3 = document.querySelector('.bubbling button');
button3.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'something new to do';
    ul3.prepend(li);
}); 

const items3 = document.querySelectorAll('.bubbling li');

/* items3.forEach(item => {
    item.addEventListener('click', event => {
        console.log('event in LI');//när man trycker på items3 så kommer detta loggas i consolen
        //detta loggas precis innan console.log('event in UL'); loggas från nedstående block
        //detta kallas event bubbling, vi kan dock stoppa detta, så att bara LI körs men inte UL
        event.stopPropagation();
        //detta stoppar event bubbling och därmed syns bara LI i consollen, inte UL
        //däremot, alla nya lists som läggs till när man trycker på knappen ingår ej här
        //detta kan allt lösas på ett annat sätt också, via blocket nedan: 
        event.target.remove();
    });
}); */

ul3.addEventListener('click', event => {
    //när man trycker på ul3 så kommer detta hända:
    // console.log('event in UL');
    //loggar 'event in ul

    // console.log(event.target);
    //loggar vilken lista man trycker på, står ex <li>pay the bills</li>, samma gäller när man lägger
    //till en ny lista, den ser exakt likadan ut när man trycker på den

    if (event.target.tagName === 'LI'){ //om event.target har en tagName som heter 'LI' gör detta:
        event.target.remove(); //ta bort targeten, alltså hela li listan
    }
});


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            MORE EVENTS
//copy event:
const copy = document.querySelector('.moreEvents .copy-me');
copy.addEventListener('copy', () => {
    console.log('MY CONTENT IS COPYRIGHT');
    //när man försöker kopiera en text så loggas det som står över i consollen
});

//mouseover event:
const box = document.querySelector('.moreEvents .box');
box.addEventListener('mousemove', event => { //om jag har min mus över boxen, då händer detta: 
    // console.log(event);
    //loggar ut all info om boxen i consollen

    // console.log(event.offsetX, event.offsetY);
    //loggar bara x och y värdet i boxen beroende på vart musen befinner sig

    box.textContent = `x pos - ${event.offsetX}, y pos - ${event.offsetY}`;
    //byter värdet av tidigare innehåll av boxen till det som står över, kommer ocksp visa vart i x och y värde man är    
});

//wheel event:
//man sätter inte denna på en speciell tag, utan snarare på hela dokumentet
document.addEventListener('wheel', event => {//om jag skrollar så händer detta:
    console.log(event.pageX, event.pageY);
    //loggar vad för värdea x och y har när du skrollar
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            MAKING A POPUP
const buttonPop = document.querySelector('.makingPopup button');//hämtar knappen
const popup = document.querySelector('.popup-wrapper');//hämtar osynliga delen, ska bli synlig när man klickar
const close = document.querySelector('.popup-close');//hämtar x knappen i pop-upen

//få upp pop-up
buttonPop.addEventListener('click', () => {//när man trycker på knappen så blir pop-upen synlig
    popup.style.display = 'block'; //hade detta på none i CSS, gör om det till block
});

//få bort pop-up genom x-knapp
close.addEventListener('click', () => {//när man trycker på x i pop-up så händer detta:
    popup.style.display = 'none'; //man gör tillbaks den till none, alltså osynlig
    //i princip samma kod som blocket innan
});

//få bort pop-up genom att trycka utanför, alltså i wrappern (gråa delen)
popup.addEventListener('click', () => {//när man trycker på x i pop-up så händer detta:
    popup.style.display = 'none'; //man gör tillbaks den till none, alltså osynlig
    //i princip samma kod som blocket innan
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            CREATING AN OBJECT










//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            CREATING AN OBJECT










//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            CREATING AN OBJECT










//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            CREATING AN OBJECT










//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            CREATING AN OBJECT










//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            CREATING AN OBJECT










//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            CREATING AN OBJECT










//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            CREATING AN OBJECT










//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            CREATING AN OBJECT










//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

