let roll = prompt(`Quante volte vuoi tirare il dado?`);
let play1 = 0;
let play2 = 0;

for (let i = 1; i <= roll; i++) {


   play1 = play1 + Math.floor(Math.random() * (7 - 1) + 1);

   play2 = play2 + Math.floor(Math.random() * (7 - 1) + 1);

   if (play1 >= play2)
      console.log(`Il giocatore 1 ha totalizzato ${play1} ed ha vinto 😊`);
   else if (play1 < play2)
      console.log(`Il giocatore 2 ha totalizzato ${play2} ed ha vinto 😊`);
}