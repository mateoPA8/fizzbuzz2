function generarFizzBuzz(numero)
{
    const FIZZ=3;
    const BUZZ=5;
    if(numero%BUZZ==0 && numero%FIZZ==0)
    {
        return "fizzbuzz";
    }
    if(numero==FIZZ || numero%FIZZ==0)
    {
        return "fizz";
    }
    else if(numero==BUZZ || numero%BUZZ==0)
    {
        return "buzz";
    }
    
    return numero + "";//para convertir numero a string
}
export default generarFizzBuzz;