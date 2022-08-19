function calcular()
{
    let n1 = document.getElementById("n1").value
    let n2 = document.getElementById("n2").value

    let resultado = (n1 / n2)

    document.getElementById("resultado").innerHTML = `O valor é = ${resultado}`
}