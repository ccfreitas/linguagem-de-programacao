function calcular()
    {
        //recupera o valor digitado pelo usuario na caixa de texto
        let altura = Number(document.getElementById("altura").value)    //converter dados numericos do html em numeros
        //recupera o valor digitado pelo usuario na caixa de texto
        let peso = Number(document.getElementById("peso").value)
        //calculo imc
        let imc = peso / Math.pow(altura, 2)    //função para exponenciação
        //mostra o resultado
        //alert(`O valor do imc é de ${imc.toFixed(2)}`)  //a crase ao contrario é uma template string para juntar valores
        document.getElementById("imc").innerHTML = `O valor do imc é de ${imc.toFixed(2)}`

        let classificação
        if(imc >= 18.5 && imc < 25)
        {
            classificação = "Normal"
        }
        else if(imc >= 25 && imc < 30 )
        {
            classificação = "Sobrepeso"
        }
        else if(imc >= 30 && imc <= 40)
        {
            classificação = "Obesidade"
        }
        else 
        {
            classificação = "Obesidade grave"
        }
        
        document.getElementById("classificação").innerHTML = `A classificação do imc é de ${classificação}`
    }