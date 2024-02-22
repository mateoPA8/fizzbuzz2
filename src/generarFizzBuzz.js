function generarFizzBuzz(numero)
{
    let FIZZ=3;
    if(numero==FIZZ)
    {
        return "fizz";
    }
    return numero + "";//para convertir numero a string
}
export default generarFizzBuzz;