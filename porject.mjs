
import readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';
const dalil = readline.createInterface({ input, output });

let prijs = { W: 10, B: 2, F: 3 };
let btwprijs = { W: 21, B: 6, F: 12 };

let mandgroot = 0;
let mand = [];


function vraagGrootteMand() {
  dalil.question("Hoe lang is de mand (3 - 20)? ", antwoord => {
    mandgroot = +antwoord;

    if (mandgroot >= 3 && mandgroot <= 20) {
      vulGeschenkmand(0); 
    } else {
      console.log("Ongeldige . opnieuw en sneller.");
      vraagGrootteMand();
    }
  });
}


function vulGeschenkmand(i) {
  if (i >= mandgroot) {
    return berekenTotaal(); 
  }

  dalil.question("Welk CADEAU kies je? (keuze: W, B, F): ", (keuze) =>{
    if (keuze === "W" || keuze === "B" || keuze === "F") {
      mand.push(keuze);
      i++;

      
      if (Math.random() < 0.1) {
        console.log("JE HEBT EEN CADEAU GEWONNEN!");
        mand.push(keuze); 
        i++;
      }

      vulGeschenkmand(i); 
    } else {
      console.log("slecht mevrouwtje of meneer, probeer opnieuw.");
      vulGeschenkmand(i); 
    }
  });
}

function berekenTotaal() {
  let totaal = 0;
  for (let i = 0; i < mand.length; i++) {
    totaal += prijs[mand[i]]; 
  }
  console.log(`De totaal van je mand is: €${totaal}`);


  let totaalMetBTW = 0;
  for (let i = 0; i < mand.length; i++) {
    let item = mand[i];
    let btw = prijs[item] * (btwprijs[item] / 100);
    totaalMetBTW += prijs[item] + btw; 
  }
  console.log("de BTW is dit: €" + Math.round(totaalMetBTW));

  dalil.close();
}


vraagGrootteMand();

