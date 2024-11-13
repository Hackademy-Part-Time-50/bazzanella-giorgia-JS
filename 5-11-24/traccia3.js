let selection = parseInt(prompt('Quale bevanda vuoi? \n 1- Acqua 💧 \n 2- Pepsi 🧃 \n 3- Birra 🍻 '));


function bevanda(selection) {
   
    if (selection === 1) {
        return "1- Acqua 💧";
    } else if (selection === 2) {
        return"2- Pepsi 🧃";
    } else if (selection === 3) {
         return "3- Birra 🍻";
    } else {
        return parseInt(prompt('Quale bevanda vuoi? \n 1- Acqua 💧 \n 2- Pepsi 🧃 \n 3- Birra 🍻 '));
    }
  
}
console.log(`Hai selezionato ${bevanda(selection)}`);