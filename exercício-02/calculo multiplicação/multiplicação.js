function calcular()
{
    let n1 = document.getElementById("n1").value
    let n2 = document.getElementById("n2").value
    let n3 = document.getElementById("n3").value

    let resultado = (n1 * n2 * n3)

    document.getElementById("resultado").innerHTML = `O valor é = ${resultado}`
}