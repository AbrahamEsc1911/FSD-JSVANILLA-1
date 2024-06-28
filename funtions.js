//// Reto 1
var comparar = function (a, b) {
    if (a > b) {
        return "".concat(a, " es mayor");
    }
    else if (a === b) {
        return "son iguales";
    }
    return "".concat(b, " es mayor");
};
//// Reto 2
var texBienvenida = function (tex1) {
    return "Bienvenido ".concat(tex1);
};
//// Reto 3
var calaArea = function (num) {
    var pi = Math.PI;
    return Math.round(pi * num * num);
};
//// Reto 4
var divisibleDos = function (num) {
    return num % 2 === 0 ? "".concat(num, " es divisible entre 2") : "".concat(num, " no es divisible entre 2");
};
//// Reto 5
var precioIVA = function (num) {
    var IVA = 0.21;
    return num * IVA + num;
};
//// Reto 6
var bucleWhile = function () {
    var i = 0;
    while (i <= 100) {
        i++;
        console.log(i);
    }
    return i;
};
//// Reto 7
var bucleFor = function () {
    var y = 0;
    for (y = 0; y <= 100; y++) {
        console.log(y);
    }
    return y;
};
//// Reto 8
var bucleForDosyTres = function () {
    var X = 0;
    for (X = 0; X <= 100; X++) {
        X % 2 === 0 && X % 3 === 0 ? console.log(X) : null;
    }
    ;
    return X;
};
//// Reto 9
var diaLaboral = function (day) {
    var msj;
    var dayLo = day.toLowerCase();
    switch (dayLo) {
        case "lunes":
        case "martes":
        case "miercoles":
        case "jueves":
        case "viernes":
            msj = "".concat(dayLo, " Es d\u00EDa Laboral");
            break;
        case "sabado":
        case "Domingo":
            msj = "".concat(dayLo, " no es d\u00EDa laboral");
            break;
        default:
            msj = "no es día valido";
            break;
    }
    return msj;
};
//// Reto 10
var calInvertida = function (num1, num2, signo) {
    var msj;
    switch (signo) {
        case "+":
            msj = "".concat(num1 + num2);
            break;
        case "-":
            msj = "".concat(num1 - num2);
            break;
        case "/":
            msj = "".concat(num1 / num2);
            break;
        case "*":
            msj = "".concat(num1 * num2);
            break;
        default:
            msj = "Invalid signal";
            break;
    }
    return msj;
};
module.exports = {
    comparar: comparar,
    texBienvenida: texBienvenida,
    calaArea: calaArea,
    divisibleDos: divisibleDos,
    precioIVA: precioIVA,
    bucleFor: bucleFor,
    bucleWhile: bucleWhile,
    bucleForDosyTres: bucleForDosyTres,
    diaLaboral: diaLaboral,
    calInvertida: calInvertida
};
