function calcular()
{
    let tabuada = 1

    for(tabuada = 1; tabuada <= 10; tabuada++)
    { 
        for(contador = 0; contador <= 10; contador++)
        {
            console.log(`${tabuada} * ${contador} = ${tabuada * contador}` )
        }
    }    
}