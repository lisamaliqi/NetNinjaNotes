//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            TIMES

const now = new Date();
//denna uppdateras varje gång man refreshar
//detta säger "we want a NEW object of this Date type"
console.log(typeof now);//-->object

console.log(now);//loggar dag i veckan, mån, dag, år, tidpunkt och tidsposition

//year, month day, tines
console.log('getFullYear: ', now.getFullYear());//-->getFullYear:  2024
console.log('getMonth: ', now.getMonth());//-->getMonth: 10 (tar index av månaden, börjar på 0)
console.log('getDate: ', now.getDate());//-->getDate:  18 (tar vilken dag det är)
console.log('getDay: ', now.getDay());//-->getDay:  1 (vilken dag på veckan, mån, tis, ons osv)
console.log('getHours: ', now.getHours());//-->getDay:  1 (vilken dag på veckan, mån, tis, ons osv)
console.log('getMinutes: ', now.getMinutes());//-->getDay:  1 (vilken dag på veckan, mån, tis, ons osv)
console.log('getSeconds: ', now.getSeconds());//-->getDay:  1 (vilken dag på veckan, mån, tis, ons osv)



//timestamps
console.log('timestamp: ', now.getTime());//sekunder sen 1 jan 1970


//date strings
console.log(now.toDateString());//-->Mon Nov 18 2024
console.log(now.toTimeString());//-->14:41:58 GMT+0100 (centraleuropeisk normaltid)
console.log(now.toLocaleString());//-->2024-11-18 14:42:37

console.log('------------------------------------------');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            TIMESTAMPS
//hur man räknar ut skillnaden mellan två tider i millisekunder
// const now = new Date();
const before = new Date('December 10 2023 20:30:24');//få ett gammal datum

console.log(now.getTime(), before.getTime());

//få ut skillanden mellan before och now
const diff = now.getTime() - before.getTime();
console.log(diff);


//convert milisekunder till sekunder sedan minuter
const mins = Math.round(diff / 1000 / 60);
console.log(mins);

//till timmar
const hours = Math.round(mins / 60);
console.log(hours);

//till dagar
const days = Math.round(hours / 24);
console.log(days);

const everythingTogether = Math.round(diff / 1000 / 60 / 60 / 24);
console.log(everythingTogether);


//converting timestamps into date objects
const timeStamps = 1313539397548;
console.log(new Date(timeStamps));

console.log('------------------------------------------');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            BUILDING A DIGITAL CLOCK

//hämtar ut diven som ska innehålla klockan i HTML
const clock = document.querySelector('.clock');

//skapa en function som har ansvaret att uppdatera tiden varje sekund
const tick = () => {
    //hämta dagens tid när den uppdateras
    const now = new Date();

    const h = now.getHours();//hämta hours
    const m = now.getMinutes();//hämta minuter
    const s = now.getSeconds();//hämta sekunder

    //skapa ett innehåll för html som inkluderar hours, minutes och seconds
    const html = `
    <span>${h}</span> :
    <span>${m}</span> :
    <span>${s}</span>
    `;

    //lägg in det i HTML
    clock.innerHTML = html;
};

//skapa en intervall som uppdateras varje sekund
tick();//lägger jag in att funktionen ska köras innan intervallen så betyder det att jag inte väntar 1 sek
       //på att funktionen ska sättas igång pga intervallen har sats på 1 sek 
setInterval(tick, 1000);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//                            DATE-FNS












//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
