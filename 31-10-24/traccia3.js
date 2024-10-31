
let temp = prompt('Inserisci la temperatura 🌡️');
if (temp > -20 && temp <= -10) {
    console.log('Copriti…ancora ti raffreddi🤧');
} else if (temp < 10 && temp >= 0) {
    console.log('non è tanto il freddo quanto l’umidità');
} else if (temp < 20 && temp >= 10) {
    console.log('non ci sono più le mezze stagioni');
} else if (temp < 30 && temp >= 27) {
    console.log('mi dia una peroni sudata');
} else if (temp <= 40 && temp >= 30) {
    console.log('lu mare, lu sole, lu ientu 😎');
} else {
    console.log("TU MENTI");
}

//switch


switch (temp) {
    case '-20':
    case '-19':
    case '-18':
    case '-17':
    case '-16':
    case '-15':
    case '-14':
    case '-13':
    case '-12':
    case '-11':
    case '-10':
        console.log(`Copriti…ancora ti raffreddi con ${temp}🤧`);
        break;
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '10':
        console.log(`non è tanto il freddo quanto l’umidità con ${temp}🤧`);
        break;
    case '20':
    case '19':
    case '18':
    case '17':
    case '16':
    case '15':
    case '14':
    case '13':
    case '12':
    case '11':
    case '10':
        console.log(`non ci sono più le mezze stagioni con ${temp}🤧`);
        break;
    case '30':
    case '29':
    case '28':
    case '27':
        console.log(`mi dia una peroni sudata con ${temp}🤧`);
        break;

    case '30':
    case '31':
    case '32':
    case '33':
    case '34':
    case '35':
    case '36':
    case '37':
    case '38':
    case '39':
    case '40':
        console.log(`lu mare, lu sole, lu ientu 😎`);
        break;

    default:
        console.log(`TU MENTI`);
        break;

}