function calcular()
{
    let metro = Number(document.getElementById("metro").value)
    let garagem = Number(document.getElementById("garagem").value)
    let andar = Number(document.getElementById("andar").value)
    let sol = document.getElementById("sol").value

    let valorf
    if (metro > 0 && metro <= 80)
    {
        if (garagem == 1)
        {
            valorf = 300000
        }
        else if (garagem == 2)
        {
            valorf = 320000
        }
        else if (garagem == 3)
        {
            valorf = 340000
        }
    }
    else if (metro > 80 && metro <= 120)
    {
        if (garagem == 1)
        {
            valorf = 400000
        }
        else if (garagem == 2)
        {
            valorf = 420000
        }
        else if (garagem == 3)
        {
            valorf = 440000
        }
    }    
    else if (metro > 120)
    {
        if (garagem == 1)
        {
            valorf = 500000
        }
        else if (garagem == 2)
        {
            valorf = 520000
        }
        else if (garagem == 3)
        {
            valorf = 540000
        }
    }
    else
    {
        alert('Ops!!!, necessario escolher um valor maior que zero')
    }
    if (andar == 1)
    {
            valorf = valorf + 10000
    }
    else if (andar == 2)
    {
        valorf = valorf + 20000 
    }
    else if (andar == 3)
    {
        valorf = valorf + 30000
    }
    if (sol == "M")
    {
        valorf = valorf + (valorf * (5/100))
    }
    else if (sol == "T")
    {
        valorf = valorf + (valorf * (8/100))
    }
    

    document.getElementById("resultado").innerHTML = `O valor final do apartamento é: ${valorf.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}`

}