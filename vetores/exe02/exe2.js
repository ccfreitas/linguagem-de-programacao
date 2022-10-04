function principal()
{
    let vetor = [] // declaraçõa de variaveis
    //entrada de dados
    for(let i = 0; i < 7; i++) // determina o tamanho do vetor
    {
        vetor.push(Number(prompt(`Informe  numero ${i + 1}`)))  //aloca o numero nos vetores informado pelo usuario
    }
    // processamento
    let multiplos2 = []    // cria vetor
    let multiplos3 = []  // cria vetor
    let multiplos23 = []  // variaveis para os vetores
    for(let i = 0; i < 7; i++)
    {
        if (vetor[i] % 2 == 0)
        {
            multiplos2.push(vetor[i])                   // condições dentro de um comando de repetição para separar os vetores
        }
        if (vetor[i] % 3 == 0)
        {
            multiplos3.push(vetor[i])
        }
        if (vetor[i] % 2 == 0 && vetor[i] % 3 == 0)
        {
            multiplos23.push(vetor[i])
        }
    } 
    
    // saida
    //alert (pares)
    console.log(`Os números multiplos de 2 são ${multiplos2}`)
    console.log(`Os números multiplos de 3 são ${multiplos3}`)
    console.log(`Os números multiplos de 2 e 3 são ${multiplos23}`)
}