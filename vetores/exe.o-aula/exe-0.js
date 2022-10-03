function principal()
{
    let idade = [] // declaraçõa de variaveis
    //entrada de dados
    for(let i = 0; i < 7; i++)
    {
        idade.push(Number(prompt(`Informe a idade ${i + 1}`)))
    }
    // processamento
    let pares = []    // cria vetor
    let impares = []  // cria vetor
    for(let i = 0; i < 7; i++)
    {
        if (idade[i] % 2 == 0)
        {
            pares.push(idade[i])
        }
        else
        {
            impares.push(idade[i])
        }
    } 
    
    // saida
    //alert (pares)
    console.log(`Os números pares são ${pares}`)
    console.log(`Quantidade números pares são ${pares.length}`)
    console.log(`Os números impares são ${impares}`)
    console.log(`Quantidade números impares são ${impares.length}`)
}