function calcular()
    {
        //recupera o valor digitado pelo usuario na caixa de texto
        let altura = document.getElementById("altura").value
        //recupera o valor digitado pelo usuario na caixa de texto
        let peso = document.getElementById("peso").value
        //calculo imc
        let imc = peso / (altura * altura)
        //mostra o resultado
        //alert(`O valor do imc é de ${imc.toFixed(2)}`)  //a crase ao contrario é uma template string para juntar valores
        document.getElementById("imc").innerHTML = `O valor do imc é de ${imc.toFixed(2)}`
    }