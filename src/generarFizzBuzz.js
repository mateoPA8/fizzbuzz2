function generarFizzBuzz(numero)
{
    const FIZZ=3;
    if(numero==FIZZ || numero%FIZZ==0)
    {
        return "fizz";
    }
    return numero + "";//para convertir numero a string
}
export default generarFizzBuzz;