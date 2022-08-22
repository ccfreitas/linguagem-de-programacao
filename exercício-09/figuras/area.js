function calcular()
{
    let Bma = document.getElementById("bma").value
    let Bme = document.getElementById("bme").value
    let Lpa = document.getElementById("lp").value

    let area = ((parseInt(Bma) + parseInt(Bme)) * parseInt(Lpa))/2

    document.getElementById("resultado").innerHTML = `A área do trapézio é = ${area}`
}