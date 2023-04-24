let Calcular = document.getElementById("btn_calcular")

function calcIMC(){
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value / 100;
    let resultado = document.getElementById("resultado");

    if (!altura || !peso)
    {
        alert('Por favor, insira valores válidos para altura e peso');
        return;
    }
        var imc = peso / (altura * altura);
        imc = imc.toFixed(2)
        let mensagem = "";

        if (imc < 18.5){
            mensagem = "Você está magro!"
        }
        else if (imc < 25){
            mensagem = "Você está com o peso normal"
        }
        else if (imc < 30){
            mensagem = "Cuidado você está com sobrepeso!"
        }
        else if (imc < 35){
            mensagem = "Cuidado você está com Obesidade Grau I!"
        }
        else if (imc < 40){
            mensagem = "Cuidado você está com Obesidade Grau II!"
        }
        else{
            mensagem="Cuidado você está igual um planeta!"
        }
        resultado.textContent = `Seu IMC é ${imc}!\n${mensagem}`;
    }
Calcular.addEventListener('click', calcIMC)