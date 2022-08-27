function calcular()
{
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    
    let menor
    if (n1 > n2)
        {
            menor = n2
        }
    else
        {
            menor = n1
        }

    document.getElementById("menor").innerHTML = `O menor número = ${menor}`

}