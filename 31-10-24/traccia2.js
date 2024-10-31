let voto = parseInt(prompt('Inserisci il tuo voto'));
if (voto > 18 && voto <= 20) {
    console.log('Sufficiente');
} else if (voto < 24 && voto >= 21) {
    console.log('Buonoo');
} else if (voto < 26 && voto >= 24) {
    console.log('Distinto');
} else if (voto < 29 && voto >= 27) {
    console.log('Ottimo');
} else if (voto == 30) {
    console.log('Eccellente 😎');
} else {
    console.log("vai a studiare");
}

//switch


switch (voto) {
    case '17':
        console.log(`insufficiente`);
        break;
    case '18':
    case '19':
    case '20':
    case '21':
        console.log(`sufficiente`);
        break;
    case '22':
    case '23':
    case '24':
        console.log(`Buonoo`);
        break;
    case '25':
    case '26':
        console.log(`Distinto`);
        break;
    case '27':
    case '28':
    case '29':
        console.log(`Ottimo`);
        break;
    case '30':
        console.log(`Eccellente`);
        break;

    default:
        console.log(`VAI A STUDIARE`);
        break;

}
