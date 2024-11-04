//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            OBJECTS AT A GLANCE
/*objekt kan jämföras med verkliga objekt, ex en telefon.
en telefon har "properties" så som färg, modell och storlek, men telefonen kan också GÖRA saker, 
så som att ringa, ta bilder eller spela musik, samma sak gäller för objects 

i JS kan kan ha ex en "user object",  den har properties så som email, username och gender, men den kan 
också göra saker, detta kallas methods och det kan vara att logga in eller logga ut. 

ett annat exempel är "blog object", vilket är en enkel blogg på en webbisda. den kan ha propertoes så som
en titel, författare och innehåll, medans dens methods är att publicera, ta bort från publicering och radera.

*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            CREATING AN OBJECT
//{} när man gör ett objekt, [] när det är array 
let user = {
    name: 'Lisa',   //name = key, Lisa = value, dessa tillsammans blir en property av objektet user
    age: 23,
    email: 'lisamaliqi@hotmail.com',
    location: 'Malmö',
    blogs: ['Why mac and cheese rules', '10 things to make with marmite']
};

console.log(user);//allt i objektet syns i loggen

console.log(user.age);//-->23
user.age = 24;//byter värde på en specifik grej i objektet
console.log(user.age);//-->24

console.log(user['name']);//-->Lisa
user['name'] = 'Tova';
console.log(user['name']);//-->Tova

//kan också göra detta om man har []:
//man sparar alltså värdet i en variabel 
const key = 'name';
console.log(user[key]);//-->Tova

console.log(typeof user);//-->object           user är ett object

console.log('--------------------------------------------');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                           ADDING METHODS

let user2 = {
    name: 'Lisa',   //name = key, Lisa = value, dessa tillsammans blir en property av objektet user
    age: 23,
    email: 'lisamaliqi@hotmail.com',
    location: 'Malmö',
    blogs: ['Why mac and cheese rules', '10 things to make with marmite'],

    //lägger till methods som är en function i objektet
    login: function(){
        console.log('The user logged in');
    },
    logout: function(){
        console.log('The user logged out');
    }
};

user2.login();//-->The user logged in
user2.logout();//-->The user logged out

console.log('--------------------------------------------');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            THIS KEYWORD
let user3 = {
    name: 'Lisa',   //name = key, Lisa = value, dessa tillsammans blir en property av objektet user
    age: 23,
    email: 'lisamaliqi@hotmail.com',
    location: 'Malmö',
    blogs: ['Why mac and cheese rules', '10 things to make with marmite'],

    //lägger till methods som är en function i objektet
    login: function() {
        console.log('The user logged in');
    },
    logout: function() {
        console.log('The user logged out');
    },

    //hur man får tag i arrayn "blogs" som finns längre upp
    logBlogs() { //att ta bort "function" från detta gör att den fortfarande är en vanlig function
        //håll dig till detta sättet när du skriver functions i objects, inte så som login och logout är
        //om jag ska använda mig utav this keyword så kan jag inte skriva en arrow function
        // this.blogs;     //this= refererar till "this user3 object"
        //console.log(this.blogs);//-->visar hela arrayn i "user3.logBlogs();"
        console.log('this user has written the following blogs: ');
        this.blogs.forEach(blog =>  {
            console.log(blog);
        })
    }
};

user3.logBlogs();//printar ut funktionen logblogs, både this user... samt det som finns i arrayn
// console.log(this);

console.log('--------------------------------------------');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            OBJECTS IN ARRAYS
const blogs = [
    { title: 'Why mac and cheese rules', likes: 30 },
    { title: '10 things to make with marmite', likes: 50 }
];

console.log(blogs);


let user4 = {
    name: 'Lisa',   //name = key, Lisa = value, dessa tillsammans blir en property av objektet user
    age: 23,
    email: 'lisamaliqi@hotmail.com',
    location: 'Malmö',
    blogs: [
        { title: 'Why mac and cheese rules', likes: 30 },
        { title: '10 things to make with marmite', likes: 50 }
    ],

    //lägger till methods som är en function i objektet
    login: function() {
        console.log('The user logged in');
    },
    logout: function() {
        console.log('The user logged out');
    },

    //hur man får tag i arrayn "blogs" som finns längre upp
    logBlogs() { //att ta bort "function" från detta gör att den fortfarande är en vanlig function
        //håll dig till detta sättet när du skriver functions i objects, inte så som login och logout är
        //om jag ska använda mig utav this keyword så kan jag inte skriva en arrow function
        // this.blogs;     //this= refererar till "this user3 object"
        //console.log(this.blogs);//-->visar hela arrayn i "user3.logBlogs();"
        console.log('this user has written the following blogs: ');
        this.blogs.forEach(blog =>  {
            console.log(blog.title, blog.likes);//få tag på både title och likes från arrayn
        })
    }
};

user4.logBlogs();//printar ut det som finns i logblogs, alltså även det som finns i arrayn blogs

console.log('--------------------------------------------');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            MATH OBJECTS
//javascript har redan massa färdiga objects som man kan använda sig utav, en utav dom är Math object
//den innehåller flera properties och methods redan färdiga

console.log(Math);//-->loggar ut alla Math's properties och methods man kan använda sig utav
console.log(Math.PI);//-->3.141592653589793   printar ut PI numret
console.log(Math.E);//-->2.718281828459045    också ett matematiskt nummer

const area = 7.7;
console.log(Math.round(area));//-->8     rundar const area till det närmsta heltalet
console.log(Math.floor(area));//-->7     rundar alltid ner numret till närmata heltal
console.log(Math.ceil(area));//-->8      rundar alltid upp numret till närmsta heltal
console.log(Math.trunc(area));//-->7     tar bort decimalen helt 


//generate random number
const random = Math.random();
console.log(random);//loggar random nummer mellan 0-1, alltså i princip bara decimaler
console.log(Math.round(random));//random nummer mellan 0-1, men pga "round" så är det bara heltal
console.log(Math.round(random * 100));//random nummer mellan 0-100, pga "round" så är det bara heltal

console.log('--------------------------------------------');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                      PRIMATIVE VS REFERENCE TYPES
/*
primitive types är:                 Reference types är:
    -Numbers                            -All types of objects
    -Strings                                -Object literas
    -Booleans                               -Arrays
    -Null                                   -Functions
    -Undefined                              -Dates
    -Symbols                                -All other objects

primative types förvaras i stack, reference types förvaras i heap

stack är en stack med olika värden i minnet, förvaringen är ganska begränsad
stacks är ganska snabbt dock

i heaps förvaras reference types och där finns det mer plats, men lite långsammare än stack

fattar inte riktigt dedär med pointers
*/

//primative values
let scoreOne = 50;
let scoreTwo = scoreOne;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);//-->scoreOne: 50 scoreTwo: 50

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);//-->scoreOne: 100 scoreTwo: 50
//när vi gör en copy av primative values så ändras den andra sig inte om man ändrar den första

//reference values

const userOne = {name:'Lisa', age: 23};
const userTwo = userOne;
console.log(userOne, userTwo);//-->samma objekt bör loggas fram, name: lisa, age: 23

userOne.age = 40;
console.log(userOne, userTwo);//-->samma objekt bör loggas fram, name: lisa, age: 40
//pga att det är en pointer så ändras båda värderna

userTwo.age = 80;
console.log(userOne, userTwo);//-->samma objekt bör loggas fram, name: lisa, age: 80
//spelar ingen roll vem man ändrar, pointern pekar alltid mot samma objekt

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////