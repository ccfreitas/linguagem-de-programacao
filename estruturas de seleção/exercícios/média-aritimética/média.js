function calcular()
{
    let n1 = Number(document.getElementById("nota1").value)
    let n2 = Number(document.getElementById("nota2").value)
    let n3 = Number(document.getElementById("nota3").value)
    let n4 = Number(document.getElementById("nota4").value)

    let mda = (n1 + n2 + n3 + n4) / 4
    
    document.getElementById("media").innerHTML = `Valor da média aritmética = ${mda.toFixed(2)}`

    let classificação
    if (mda >= 7)
        {
            classificação = "aprovado"
        }
    else 
        {
            classificação = "reprovado"
        }

    document.getElementById("classificação").innerHTML = `Situação = ${classificação}`

}