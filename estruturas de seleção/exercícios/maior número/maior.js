function calcular()
{
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let n3 = Number(document.getElementById("n3").value)
    
    let maior
    if (n1 > n2 && n3 < n1)
        {
            maior = n1
        }
    else if (n1 < n2 && n2 > n3)
        {
            maior = n2
        }
    else
        {
            maior = n3
        }

    document.getElementById("maior").innerHTML = `O maior número = ${maior}`

}