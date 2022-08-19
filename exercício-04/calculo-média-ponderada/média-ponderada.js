function calcular()
{
    let nota1 = document.getElementById("nota1").value
    let nota2 = document.getElementById("nota2").value

    let mediap = ((nota1 * 2) + (nota2 * 3)) / 5

    document.getElementById("resultado").innerHTML = `O valor da média é = ${mediap}`
}