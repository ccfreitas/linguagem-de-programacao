function calcular()
{
    let Bma = Number(document.getElementById("bma").value)
    let Bme = Number(document.getElementById("bme").value)
    let Lpa = Number(document.getElementById("lp").value)

    let area = ((Bma+ Bme) * Lpa) / 2

    document.getElementById("resultado").innerHTML = `A área do trapézio é = ${area}`
}