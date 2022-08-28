function calcular()
{
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let valor = 0

    let operador = operações.value;
    if (operador == "media")
        {
            valor = (n1 + n2) / 2
        }
    if (operador == "subtração")
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
    if (operador == "multiplicação")
        {
            valor = n1 * n2
        }
    if (operador == "divisão")
        {
            valor = n1 / n2
        }

    document.getElementById("operações").innerHTML = `A ${operador} é = ${valor}`

}