function calcular()
{
    tabuada = Number(prompt(`Informe sobre qual tabuada`))
    
    for(contador = 0; contador <= 10; contador++)
    {
        console.log(`${tabuada} * ${contador} = ${tabuada * contador}` )
    }
}