import { generarListaNumero,generarFizzBuzz } from "./generarFizzBuzz";

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
  it("deberia generar buzz para el numero que sigue esa regla como los multiplos de 5", () => {
    expect(generarFizzBuzz(10)).toEqual("buzz");
  });
  it("deberia generar fizzbuzz para todos los multiplos de 5 y 3  como el 15", () => {
    expect(generarFizzBuzz(15)).toEqual("fizzbuzz");
  });
  it("deberia generar fizz,buzz,fizzbuzz, o el mismo numero para un rango de numeros hasta el que ingreso el usuario", () => {
    expect(generarListaNumero(6)).toEqual(["1", "2", "fizz", "4", "buzz", "fizz"]);
  });
});
