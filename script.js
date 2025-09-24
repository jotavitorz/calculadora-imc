
function calcularIMC(e) {
    e.preventDefault();

    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    const resultado = document.getElementById("result");


    const imc = Number(peso) / (Number(altura) * Number(altura));

    if(imc < 17){
        resultado.innerHTML = `<p>Seu resultado: ${imc.toFixed(2)}</p>` + "<span class='imc-extreme'> Cuidado você está muito abaixo do peso! </span>";
    } else if(imc >= 17 && imc <= 18.49){
        resultado.innerHTML = `<p>Seu resultado: ${imc.toFixed(2)}</p>` + "<span class='imc-alert'> Você está Abaixo do peso! </span>";
    }else if(imc >= 18.50 && imc < 24.99){
        resultado.innerHTML = `<p>Seu resultado: ${imc.toFixed(2)}</p>` + "<span class='imc-ideal'> Você está no peso ideal! </span>";
    }else if(imc => 25 && imc <= 29.99){
        resultado.innerHTML = `<p>Seu resultado: ${imc.toFixed(2)}</p>` + "<span class='imc-alert'> Você está acima do peso! </span>";
    }else if(imc >= 30){
        resultado.innerHTML = `<p>Seu resultado: ${imc.toFixed(2)}</p>` + "<span class='imc-extreme'> Cuidado Obesidade! </span>";
    }

    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
}