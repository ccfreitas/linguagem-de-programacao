function calcula()
{
    console.log("Funcionou")
    //com estrutura de repetição - while//
    let i = 1

    while  (i <= 10)
    {
        let contador = 0 
            while (contador <= 10)
            {
            console.log(`${i} x ${contador} = ${i * contador}`)
            contador++
            }
        i++
    }

}
function calculaMedia()
{
    let contador = 1
    let altura
    let acumula = 0 // neutro para soma
    while (contador <= 10)
     {
        altura = Number(prompt(`Informe a altura`)) 
        acumula = acumula + altura // somando as alturas
        contador++  
     }
    console.log(`A média das alturas é ${(acumula/(contador - 1)).toFixed(2)}`)
}