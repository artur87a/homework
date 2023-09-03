const heter = prompt("Hva heter du?");
const heter2 = heter.charAt(0).toUpperCase() + heter.slice(1)
alert("Hei og velkommen" +" " + heter2)


/*Oppgave 1*/
bilMerke = [" Audi", " BMW", " Citroen", " Fiat", " Ford", " Hyundai", " Kia", " Mercedes", " Nissan", " Opel"]
console.log(bilMerke.pop());
console.log(bilMerke);
bilMerke.push(" Tesla");
console.log(bilMerke);

bilMerke.splice(3,1);
console.log(bilMerke);
bilMerke.splice(7,1);
arrayet = bilMerke
console.log(`Oppgave 1 liste av biler: ${arrayet}`)

/*Oppgave 1.1 */
console.log(`Dette er index 5 : ${bilMerke[5]}`)

/*Oppgave 2 */


const user = [{
userName : "Artur",
userPassword : 123456,
pinCode: 1987,
hobbies: ["coding", "gaming", "movies"]
},
{
userName : "Micheal",
userPassword : 987654,
pinCode : 4050,
hobbies: ["fishing", "dancing", "Shiting in pants!:D"]

}
]
console.log(user[0])
console.log(user[1])


/*Oppgave 3*/

let carWeight = 7 /*Car Weight in tons*/

    if (carWeight < 3){
        console.log("Du kan parkere her ")
    } else if (carWeight < 6) {
        console.log("Du kan ikke parkere på den etasje. Bruk andre etasje")
    } else {
        console.log("Det er forbudt til å parkere her med det bil ")
    }
    

    function myFunction() {
  alert("Hello World!");
}

/*Oppgave 4*/

function kikker() {
 alert("Ikke kik")
}
kikker()


const farger = ["black", "white", "orange", "blue", "green", "brown", "silver"]
console.log(farger)
farger.unshift("red")
console.log(farger)

const heights = [1, 2, 4, 5, 6, 7, 1, 1];
heights.fill(0 , 3);
console.log(heights); 

const heights2 = [1, 2, 3, 4, 5, 6, 7, 8,9];
heights2.fill(0 ,2);
console.log(heights2);





let randomNumber = (Math.random() * 49) +1
let randomRound = Math.round(randomNumber)

let randomNumber1 = (Math.random() * 49) +1 
   
let randomRound1 = Math.round(randomNumber1)

let randomNumber2 = (Math.random() * 49) +1
let randomRound2 = Math.round(randomNumber2)

let randomNumber3 = (Math.random() * 49) +1
let randomRound3 = Math.round(randomNumber3)

let randomNumber4 = (Math.random() * 49) +1
let randomRound4 = Math.round(randomNumber4)

let randomNumber5 = (Math.random() * 49) +1
let randomRound5 = Math.round(randomNumber5)

let lottoNumbers =`Lotto numbers ${randomRound} ${randomRound1} ${randomRound2} ${randomRound3} ${randomRound4} ${randomRound5}`

console.log(lottoNumbers)

//Lotto er ikke ferdig enda, må implementere unikhet 
    















/* Oppgave 1 (se script.js i javascript basics repoet for hint):
Lag et array med 10 elementer
Fjern siste element med .pop
Legg så til et nytt element i enden i arrayet med .push
BONUS: Finn og utfør en god method for å ta ut element 3 og 7 fra arrayet tilslutt
console.log arrayet



Oppgave 1.1:
Console.log elementet som ligger i index 5 ut i konsollen med tekst som sier: "dette er index 5: ". Dere kan selv velge om det skal være med template literals
Oppgave 2
(se script.js i javascript basics repoet for hint):
Lag et array med 2 eller flere objekter i. Det skal minst være 3 keys i hvert objekt (f.eks firstName, lastName og age)
BONUS! Legg til en key som inneholder et array (f.eks hobbies) med minst 3 elementer i
console.log ut all informasjonen. En for hvert objekt (sånn at all informasjonen til et objekt kommer i en console.log

Oppgave 3
(se conditionals.js og conditionals2.js i javascript basics repoet for hint):
Lag en logikk for en bedrift slik som vi har øvd på tidligere. LAG EN NY logikk, ikke bruk samme dere jobbet med på torsdag.
Det skal være med if og else
BONUS: Bruk if else minst 2 ganger
console.log ut resultatet.






Oppgave 4
(se conditionals.js og conditionals2.js i javascript basics repoet for hint):
Lag et funksjon som fungerer (husk å bruke return for å få noe ut fra funksjonen du vil at skal være tilgjengelig i konsollen)
BONUS: Bruk en method vi ikke har gått igjennom enda for å få til noe kult!




Oppgave 5 VIKTIG!: Push opp oppgaven til et repo på deres github og link den som svar på denne oppgaven.

GLHF
*/