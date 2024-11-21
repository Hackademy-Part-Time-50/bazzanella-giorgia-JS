

// secondo esercizio 
let button = document.querySelector('#bottone') ;

button.addEventListener('click', () => {
    let testo = document.querySelector('#testo') ;
    let paragrafo = document.querySelector('#paragrafo') ;

    let testo_value = testo.value ;
    let paragrafo_value = paragrafo.value ;
    let date = new Date() ;
    let formatDate = date.toLocaleDateString() ; 

    if (testo_value === "" && paragrafo_value === "") {
        alert('INSERISCI DATI RICHIESTI')
    }

    let contenitore = document.querySelector('#contenitore') ;
    contenitore.innerHTML = `
    <h1>${testo_value}</h1>
    <p>${paragrafo_value}</p>
    <p>${formatDate}</p>
    `
    testo.value = '' ;
    paragrafo.value = '' ;

})