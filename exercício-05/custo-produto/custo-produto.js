function calcular()
{
    let preco = document.getElementById("preço").value

    let precof = ((preco * (10/100)) - preco) * - 1

    document.getElementById("resultado").innerHTML = `O valor final é = $${precof.toFixed(2)}`
}