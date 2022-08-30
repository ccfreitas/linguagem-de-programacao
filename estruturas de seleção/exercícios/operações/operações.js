function calcular()
{
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let escolha = document.getElementById("escolha").value

    let erro = false
    let valor = 0

    if (escolha == "média")
        {
            valor = (n1 + n2) / 2
        }
    else if (escolha == "subtração")
        {
            if (n1 > n2)
            {
                valor = (n1 - n2)
            }
            else
            {
                valor = (n2 - n1)
            }
        }
    else if (escolha == "multiplicação")
        {
            valor = (n1 * n2)
        }
    else if (escolha == "divisão")
        {
            if (n2 != 0)
            {  
                 valor = (n1 / n2)
            }
            else
            {
                erro = true
            }
        }
    else
    {
        erro = true
    }
    if (erro)
    {
        document.getElementById("operador").innerHTML = `Erro no programa, tente novamente`
    }
    else
    {
        document.getElementById("operador").innerHTML = `A ${escolha} é = ${valor}` 
    }
     
    

}