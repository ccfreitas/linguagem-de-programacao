function calcular()
{
    let peso = document.getElementById("peso").value

    let fat = (parseInt(peso) + (peso * (15/100)))
    let slim = (parseInt(peso) - (peso * (20/100)))

    document.getElementById("engordar").innerHTML = `O peso pesado é = ${fat}`
    document.getElementById("emagrecer").innerHTML = `O peso pena é = ${slim}`
}