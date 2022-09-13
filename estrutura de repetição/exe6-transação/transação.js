function calcular()
{
    let codigo, valor
    let totalvista = 0
    let totalprazo = 0
    let primeiraparcela
    for (let = 1; i <= 5 i++)
    {
        codigo = prompt(`Informe v para a vista e p para prazo`).toLowerCase()
        valor = Number(prompt(`Informe valor da compra`))
        if (codigo == `v`)
        {
            totalvista += valor
        }
        else if (codigo == `p`)
        {
            totalprazo += valor
        }
    }
    console.log(`Total a vista ${totalvista}`)
    console.log(`Total a prazo ${totalprazo}`)
    console.log(`Total ${totalvista + totalprazo}`)
    console.log(`Primeira parcela ${totalprazo / 3}`)
}