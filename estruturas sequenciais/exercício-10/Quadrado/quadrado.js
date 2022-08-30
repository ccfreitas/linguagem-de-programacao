function calcular()
{
    let ld1 = Number(document.getElementById("lado1").value)
    let ld2 = Number(document.getElementById("lado2").value)

    let area = ld1 * ld2

    document.getElementById("resultado").innerHTML = `A área do quadrado é = ${area}`
}