function calcular()
{
    let vendas = document.getElementById("vlr").value
    let salario = document.getElementById("sal").value

    let comi = (parseInt(vendas) * (10/100))
    
    let salf = (parseInt(salario) + comi)

    document.getElementById("comissão").innerHTML = `Valor da comissão é = $${comi.toFixed(2)}`
    document.getElementById("salariof").innerHTML = `Valor total do salário é = $${salf.toFixed(2)}`
}
    
