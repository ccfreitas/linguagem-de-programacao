function calcular()
{
    let metro = Number(document.getElementById("metro").value)
    let garagem = Number(document.getElementById("garagem").value)
    let andar = Number(document.getElementById("andar").value)
    let sol = Number(document.getElementById("sol").value)

    let valorf
    if (metro <= 80)
    {
        if (garagem == 1)
        {
            valorf = 300.000,00
        }
        else if (garagem == 2)
        {
            valorf = 320.000,00
        }
        else if (garagem == 3)
        {
            valorf = 340.000,00
        }
    }
    if (metro > 80 && metro <= 120)
    {
        if (garagem == 1)
        {
            valorf = 400.000,00
        }
        else if (garagem == 2)
        {
            valorf = 420.000,00
        }
        else if (garagem == 3)
        {
            valorf = 440.000,00
        }
    }    
    if (metro > 120)
    {
        if (garagem == 1)
        {
            valorf = 500.000,00
        }
        else if (garagem == 2)
        {
            valorf = 520.000,00
        }
        else if (garagem == 3)
        {
            valorf = 540.000,00
        }
    }
    if (andar == 1)
    {
    valorf = valorf + 10.000,00
    }
        else if (andar == 2)
        {
            valorf = valorf + 20.000,00
        }
        else if (andar == 3)
        {
            valorf = valorf + 30.000,00
        }
    
        else if (sol == "M")
        {
            valorf = valorf + (valorf * (5/100))
        }
        else if (sol == "T")
        {
            valorf = valorf + (valorf * (8/100))
        }

    document.getElementById("resultado").innerHTML = `"O valor final do apartamento é R$" ${valorf}`


    

    
}