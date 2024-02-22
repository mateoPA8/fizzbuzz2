function generarFizzBuzz(numero)
{
    const FIZZ=3;
    if(numero==FIZZ || numero%FIZZ==0)
    {
        return "fizz";
    }
    if(numero==5)
    {
        return "buzz";
    }
    return numero + "";//para convertir numero a string
}
export default generarFizzBuzz;