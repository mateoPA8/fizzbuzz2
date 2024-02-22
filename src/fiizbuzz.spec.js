import generarFizzBuzz from "./generarFizzBuzz.js";

describe("fizzbuzz", () => {
  it("deberia generar el mismo numero para uno que no tiene reglas por ejemplo el 1", () => {
    expect(generarFizzBuzz(1)).toEqual("1");
  });
  //primero debemos escribir la prueba antes de tocar codigo del archivo js
  it("deberia generar el mismo numero para otro que no tiene reglas por ejemplo el 2", () => {
    expect(generarFizzBuzz(2)).toEqual("2");
  });
  it("deberia generar fizz para el numero que sigue esa regla como el 3", () => {
    expect(generarFizzBuzz(3)).toEqual("fizz");
  });
  it("deberia generar fizz para el numero que sigue esa regla como los multiplos de 3", () => {
    expect(generarFizzBuzz(6)).toEqual("fizz");
  });
  it("deberia generar buzz para el numero que sigue esa regla como el 5", () => {
    expect(generarFizzBuzz(5)).toEqual("buzz");
  });
  
});
