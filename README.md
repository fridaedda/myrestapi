Inlämningsuppgift 
Kurs: Systemstöd och integration med 3-partssystem, 30 yhp

* Skapa ett API baserat på en valfri resurs (GET & POST)
* Samtliga endpoints skall kunna nås via en REST Client fil (.rest)
* Datan som API:et hanterar sparas lokalt i serverfilen
* Ett simpelt klient-gränssnitt skall finnas för att anropa ert API olika endpoints, samt visa upp resultatet vid GET anrop
* Klienten skall hämta och visa upp data ifrån ett externt API
* Git & GitHub har använts
* Projektmappen innehåller en README.md fil.

Det krävs en installation av node.js (https://nodejs.org/en/)

Installera/skriv följande i terminalfönstret:
cd myrestapi
npm init
npm i express 
npm i -g nodemon
(ev. sudo) npm i -g nodemon
npm i --S express body-parser request
npm i ejs

För att köra appen skriv:
nodemon server.js i terminalfönstret.




