/*
1 - Pipoca – 10 segundos (padrão);
2 - Macarrão – 8 segundos (padrão);
3 - Carne – 15 segundos (padrão);
4 - Feijão – 12 segundos (padrão);
5 - Brigadeiro – 8 segundos (padrão);
*/

const select = 6; //seleção
let time = 45; //tempo
let timeDefault = 0; //tempo padrão

function $ (time,timeDefault){ //$ = seleção
    if (time == timeDefault){
        return "Prato quentinho, bom apetite";
    } else if (time >= 2* timeDefault && time < 3* timeDefault) {
        return "Queimou ai bixo!";
    } else if (time < timeDefault) {
        return "Pouco Tempo";
    } else if (time >= 3* timeDefault) {
        return "Explosão";
    }
}

switch (select){
    case 1:
        timeDefault = 10
        console.log($(time, timeDefault)); break;

        case 2:
        timeDefault = 8
        console.log($(time, timeDefault)); break;

        case 3:
        timeDefault = 15
        console.log($(time, timeDefault)); break;

        case 4:
        timeDefault = 12
        console.log($(time, timeDefault)); break;

        case 5:
        timeDefault = 8
        console.log($(time, timeDefault)); break;

    default: console.log("Prato Inexistente"); break;
}
