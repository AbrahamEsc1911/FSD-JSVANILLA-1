
//// Reto 1
const comparar = (a: number, b: number): string => {
    if (a > b) {
        return `${a} es mayor`
    } else if (a === b) {
        return `son iguales`
    } return `${b} es mayor`

}

//// Reto 2
const texBienvenida = (tex1: string): string => {
    return `Bienvenido ${tex1}`
}


//// Reto 3
const calaArea = (num: number): number => {
    const pi: number = Math.PI
    return Math.round(pi * num * num);
}

//// Reto 4

const divisibleDos = (num: number): string => {
    return num % 2 === 0 ? `${num} es divisible entre 2` : `${num} no es divisible entre 2`;
}


//// Reto 5
const precioIVA = (num: number): number => {
    const IVA: number = 0.21
    return num * IVA + num
}


//// Reto 6
const bucleWhile = (): number => {
    let i: number = 0
    while (i <= 100) {
        i++
        console.log(i);
    }
    return i;
}

//// Reto 7
const bucleFor = (): number => {
    let y: number = 0
    for (y = 0; y <= 100; y++) {
        console.log(y);
    }
    return y;
}

//// Reto 8
const bucleForDosyTres = (): number => {
    let X: number = 0;
    for (X = 0; X <= 100; X++) {
        X % 2 === 0 && X % 3 === 0 ? console.log(X) : null
    };
    return X;
}

//// Reto 9
const diaLaboral = (day: string): string => {
    let msj: string 
    const dayLo: string = day.toLowerCase();

    switch (dayLo) {
        case "lunes":
        case "lunes":
        case "martes":
        case "miercoles":
        case "jueves":
        case "viernes":
            msj = `${dayLo} Es día Laboral`
            break;
        case "sabado":
        case "Domingo":
            msj = `${dayLo} no es día laboral`
            break;
        default:
            msj = "no es día valido";
            break;
    }
    return msj;
}


//// Reto 10
const calInvertida = (num1: number, num2: number, signo: string): string => {
    let msj: string;

    switch (signo) {
        case "+":
            msj = `${num1 + num2}`;
            break;
        case "-":
            msj = `${num1 - num2}`;
            break;
        case "/":
            msj = `${num1 / num2}`;
            break;
        case "*":
            msj = `${num1 * num2}`
            break;
        default:
            msj = "Invalid signal"
            break;
    } return msj;

}

module.exports = {
    comparar,
    texBienvenida,
    calaArea,
    divisibleDos,
    precioIVA,
    bucleFor,
    bucleWhile,
    bucleForDosyTres,
    diaLaboral,
    calInvertida
}