const { comparar, texBienvenida, calaArea, divisibleDos, precioIVA, diaLaboral, calInvertida } = require("./funtions")


describe("basic test comparative", () => {
    test("it gratest than", () => {
        const result = comparar(1, 2);
        expect(result).toBe("2 es mayor");
    });
    test("it gratest than ", () => {
        const result = comparar(7362, 2329);
        expect(result).toBe("7362 es mayor");
    });
    test("it negative number", () => {
        const result = comparar(-2, 56);
        expect(result).toBe("56 es mayor")
    });
    test("It the same", () => {
        const result = comparar(34, 34);
        expect(result).toBe("son iguales")
    });
});

describe("test for text Welcome", () => {
    test("it basic concat strings", () => {
        const result = texBienvenida("cARlOs");
        expect(result).toBe("Bienvenido cARlOs")
    });
});

describe("test for area", () => {
    test("its the right number", () => {
        const result = calaArea(24)
        expect(result).toBe(1810)
    });
});

describe("Divisible in 2", () => {
    test("its not divisible", () => {
        const result = divisibleDos(645)
        expect(result).toBe("645 no es divisible entre 2")
    });
    test("its divisble", () => {
        const result = divisibleDos(864)
        expect(result).toBe("864 es divisible entre 2")
    });
});

describe("Basic test Price plus Iva", () => {
    test("price whit iva", () => {
        const result = precioIVA(450)
        expect(result).toBe(544.5)
    });
});

describe("basic test for labory day", () => {
    test("its labory day", () => {
        const result = diaLaboral("MartES")
        expect(result).toBe("martes Es día Laboral")
    });
    test("its not labory day", () => {
        const result = diaLaboral("China")
        expect(result).toBe("no es día valido")
    })
});

describe("test for calculator", () => {
    test("basic sums", () => {
        const result = calInvertida(2, 5, "*")
        expect(result).toBe("10")
    });
    test("basic rest", () => {
        const result = calInvertida(345, 64, "-")
        expect(result).toBe("281")
    });
});