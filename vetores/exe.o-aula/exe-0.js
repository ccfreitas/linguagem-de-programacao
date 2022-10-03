function principal()
{
    let idade = [] // declaraçõa de variaveis
    //entrada de dados
    for(let i = 0; i < 7; i++)
    {
        idade.push(Number(prompt(`Informe a idade ${i + 1}`)))
    }
    // processamento
    let pares = []
    for(let i = 0; i < 7; i++)
    {
        if (idade[i] % 2 == 0)
        {
            pares.push(idade[i])
        }
    } 
    
    // saida
    alert (pares)
}