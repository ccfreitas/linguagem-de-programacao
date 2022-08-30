function calcular()
{
    let peso = document.getElementById("Kg").value

    let gramas = (parseInt(peso) * 1000)

    document.getElementById("resultado").innerHTML = `Seu peso em gramas é = ${gramas.toFixed(2)} gr`
}