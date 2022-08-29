function calcular()
{
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let valor = 0

    let escolha
    if (escolha == "media")
        {
            valor = (n1 + n2) / 2
        }
    else if (escolha == "subtração")
        {
           if(n1 > n2)
           {
                valor = n1 - n2
           }
           else
           {
                valor = n2 - n1
           }
        }
    else if (escolha == "multiplicação")
        {
            valor = n1 * n2
        }
    else (escolha == "divisão")
        {
            if (n2 != 0)
            valor = n1 / n2
        }

    document.getElementById("operador").innerHTML = `A ${escolha} é = ${valor}`

}