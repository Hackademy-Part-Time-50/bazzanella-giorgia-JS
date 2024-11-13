let n = parseInt(prompt('Inserisci un numero'));


function num(n) {
   
    if (n < 10) {
        return "1 cifra";
    } else if (n < 100) {
        return"2 cifra";
    } else if (n < 1000) {
         return "3 cifra";
    } else {
        return "Troppa fatica 🤷‍♀️";
    }
  
}
console.log(`La cifra inserita ha ${num(n)}`);