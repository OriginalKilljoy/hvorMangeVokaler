/* Oppgave:
Lag en funksjon som teller opp antall vokaler i en string ved hjelp av en for-løkke
Vokaler: a, e, i, o, u, y, æ, ø, å
Bruk en variabel for hver av vokalene feks let aCounter  = 0 som plusses oppover dersom du finner bokstaven i tekststringen
*/

/*Jeg trenger:
- En string som inneholder vokaler
- En variabel for hver vokal
- 

*/

//MODEL
let aCounter = 2;
let eCounter = 3;
let iCounter = 4;
let oCounter = 3;
let uCounter = 4;
let yCounter = 2;
let æCounter = 5;
let øCounter = 3;
let åCounter = 2;

//VIEW

updateView();

function updateView(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <div> Hei dette er min setning som forhåpentligvis har mange kule vokaler i seg.</div>
    <div>Antall A: ${aCounter}</div>
    <div>Antall E: ${eCounter}</div>
    <div>Antall I: ${iCounter}</div>
    <div>Antall O: ${oCounter}</div>
    <div>Antall U: ${uCounter}</div>
    <div>Antall Y: ${yCounter}</div>
    <div>Antall Æ: ${æCounter}</div>
    <div>Antall Ø: ${øCounter}</div>
    <div>Antall Å: ${åCounter}</div>
    `;
};




//CONTROLLER