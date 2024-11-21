
// primo esercizio


//cambia colore!


let bottoneColore = document.querySelector(`#bottone`);
let paragrafoDaColorare = document.querySelectorAll(`p`);



bottone.addEventListener('click', () => {

    function coloreCasuale() {
        let rosso = Math.floor(Math.random() * 256);
        let verde = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        return `rgb( ${rosso}, ${verde}, ${blue})`;
    }

    paragrafoDaColorare.forEach(p => {
        p.style.color = coloreCasuale();
    });

}

);



// metti in grassetto!

let bottoneGrassetto = document.querySelector(`#bottone2`);
let paragrafoGrassetto = document.querySelectorAll(`p`);
let stato = 0;


bottoneGrassetto.addEventListener('click', () => {

    if (stato == 0) {
        paragrafoGrassetto.forEach(p => {
            p.style.fontWeight = 'bold';
        })
        stato = 1;
    } else if (stato == 1) {
        paragrafoGrassetto.forEach(p => {
            p.style.fontWeight = 'normal';
        })
        stato = 0;
    }

}
)



//testo no, testo si? 

let bottoneNo = document.querySelector(`#bottone3`);
let paragrafoNo = document.querySelectorAll(`p`);


bottoneNo.addEventListener('click', () => {
    if (stato == 0) {
        paragrafoNo.forEach(p => {
            p.style.display = `none`;
        })
        stato = 1;
    } else if (stato == 1) {
        paragrafoNo.forEach(p => {
            p.style.display = ``;
        })
        stato = 0;

    }
}
)


