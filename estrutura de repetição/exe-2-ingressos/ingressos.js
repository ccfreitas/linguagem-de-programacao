function calcular()
{
    const despesa = 200     // const é uma variavel que não muda
    let lucro
    let qnt = 120
    let maiorlucro = 0

    for(let preco = 5; preco >= 1; preco = preco - 0.50)
    {
        lucro = (preco * qnt) - despesa
        if(lucro > maiorlucro)
        {
             maiorlucro = lucro
        }
        console.log(`Lucro: ${lucro.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} com preço a: ${preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} e a quantidade de: ${qnt}`)
        qnt = qnt + 26
    }
    console.log(`Maior lucro: ${maiorlucro.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`)

}