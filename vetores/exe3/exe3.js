function principal()
{
    let estoque = []
    let codigos = []

    //entrada de dados
    for(let i = 0; i < 9; i++)
    {
        codigos.push(Number(prompt(`Informe o codigo produto ${i + 1}`)))
        estoque.push(Number(prompt(`Informe a quantidade produto ${i + 1}`)))   
    }
    //o que sera comprado
    let cod = (Number(prompt(`Informe o codigo do produto`)))
    let qnt = (Number(prompt(`Informe quantidade desejada do produto`)))

    //verifica se o produto existe
    let achou = false
    for(let i = 0; i < estoque.length; i++) //verifica o tamanho do vetor
    {
        if (estoque[i] == cod)
        {
            
        }
    }

}