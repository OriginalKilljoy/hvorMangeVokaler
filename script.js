/* Oppgave:
Lag en funksjon som teller opp antall vokaler i en string ved hjelp av en for-løkke
Vokaler: a, e, i, o, u, y, æ, ø, å
Bruk en variabel for hver av vokalene feks let aCounter  = 0 som plusses oppover dersom du finner bokstaven i tekststringen
*/

//MODEL

//Her ligger alle variablene mine for bokstavene
let aCounter = 0;
let eCounter = 0;
let iCounter = 0;
let oCounter = 0;
let uCounter = 0;
let yCounter = 0;
let æCounter = 0;
let øCounter = 0;
let åCounter = 0;

//Dette er variabelen for ordet/setningen jeg får fra input
let myWord = '';

//Dette er variabelen for det reverserte ordet (myWord reversert)
let myWordReveresed = '';


//VIEW

//Funksjonen for det vi ser. Her ligger input feltet, tellerne til vokalene, og det reverserte ordet.
updateView();

function updateView(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <input type="text" onchange="saveWord(this.value)" placeholder="Skriv en setning!">
    <div>Antall A: ${aCounter}</div>
    <div>Antall E: ${eCounter}</div>
    <div>Antall I: ${iCounter}</div>
    <div>Antall O: ${oCounter}</div>
    <div>Antall U: ${uCounter}</div>
    <div>Antall Y: ${yCounter}</div>
    <div>Antall Æ: ${æCounter}</div>
    <div>Antall Ø: ${øCounter}</div>
    <div>Antall Å: ${åCounter}</div>
    <div>Reversert: ${myWordReveresed}</div>
    `;
};




//CONTROLLER

//Funksjonen for å lagre inputet i myWord variabelen + starte counter funksjonen
function saveWord(input){
    myWord = input;
    counter();
}

//Funksjonen teller alle vokalene.
//Vi legger til resetCounter() først slik at om vi allerede har skrevet et ord tidligere og den har talt dens vokaler, starter vi på nytt å får en blank teller.
//I løkken vår setter vi den så den teller fra index 0, helt til slutten av myWord.
//I hver if statement gjør vi myWord til toLowerCase fordi den er case sensitiv, for da regner det med både store å små vokaler hvis myWord inneholder det.
//I if statementene går den gjennom løkken, altså gjennom hele ordet og leter etter den tilhørende vokalen. Hvis den finner den, øker den den tilhørende vokalen med 1.
//I denne funksjonen kjører vi også reverse() funksjonen, så alt skjer etter at vi får det sendt fra input feltet.
//Deretter må vi oppdatere viewet vårt.
function counter(){
    resetCounter();
    for(let i = 0; i<myWord.length; i++){
        if(myWord[i].toLowerCase() == 'a'){
            aCounter++;
        }
        else if(myWord[i].toLowerCase() == 'e'){
            eCounter++
        }
        else if(myWord[i].toLowerCase() == 'i'){
            iCounter++
        }
        else if(myWord[i].toLowerCase() == 'o'){
            oCounter++
        }
        else if(myWord[i].toLowerCase() == 'u'){
            uCounter++
        }
        else if(myWord[i].toLowerCase() == 'y'){
            yCounter++
        }
        else if(myWord[i].toLowerCase() == 'æ'){
            æCounter++
        }
        else if(myWord[i].toLowerCase() == 'ø'){
            øCounter++
        }
        else if(myWord[i].toLowerCase() == 'å'){
            åCounter++
        }
    }
    reverse()
    updateView();
}

//Hjelpefunksjon - den resetter alle variablene til 0.
function resetCounter(){
        aCounter = 0;
        eCounter = 0;
        iCounter = 0;
        oCounter = 0;
        uCounter = 0;
        yCounter = 0;
        æCounter = 0;
        øCounter = 0;
        åCounter = 0;
}

//Hjelpefunksjon - den reverserer myWord og gir oss indexen baklengs.
//Vi starter med å sette variabelen myWordReversed til en tom string.
//I løkken: (i = lengden til myWord- 1; hvis i er større eller lik 0; i - 1;)
//Vi setter myword.length-1 fordi den teller baklengs. Hvis myWord har 5 tegn går indexen fra 0-4. Men teller vi bakfra havner den på 5. Det stemmer altså da ikke overens med den faktiske indexen, så vi må trekke fra slik at den starter på 4.
//Altså, i begynner ikke på 0 slik som i den andre løkken, den begynner på lengden til myWord, altså siste tegn i myWord. Deretter trekker den fra 1 i i, og sånn teller den nedover.
//myWordReversed blir da alle i i myWord.
function reverse(){
    myWordReveresed = '';
    for(let i = myWord.length-1; i >= 0; i--){
        myWordReveresed += myWord[i] 
    }
}