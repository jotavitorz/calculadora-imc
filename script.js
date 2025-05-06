
function calcular(e) {
    e.preventDefault();

    let peso = document.getElementById("peso").value.trim();
    let altura = document.getElementById("altura").value.trim();
    let resultado = document.getElementById("result");

    peso = Number(peso);
    altura = Number(altura);

    if(!peso || !altura || isNaN(peso) || isNaN(altura)) {
        alert("Por favor, digite valores numéricos válidos para o peso e altura");
        return;
    }else {

        let imc = peso / (altura * altura);

        if(imc < 18.5){
            resultado.innerHTML = `<strong class="description">Abaixo do Normal</strong> <p class="sub-description">Seu resultado foi: ${imc.toFixed(2)}</p>`;
        }else if(imc < 25){
            resultado.innerHTML = `<strong class="description">Normal</strong> <p class="sub-description">Seu resultado foi: ${imc.toFixed(2)}</p>`;
        }else if(imc < 30){
            resultado.innerHTML = `<strong class="description">Sobrepeso</strong> <p class="sub-description">Seu resultado foi: ${imc.toFixed(2)}</p>`;
        }else if(imc < 35){
            resultado.innerHTML = `<strong class="description">Obesidade grau I</strong> <p class="sub-description">Seu resultado foi: ${imc.toFixed(2)}</p>`;
        }else if(imc < 40){
            resultado.innerHTML = `<strong class="description">Obesidade
grau II</strong> <p class="sub-description">Seu resultado foi: ${imc.toFixed(2)}</p>`;
        }else{
            resultado.innerHTML = `<strong class="description">Obesidade
grau III</strong> <p class="sub-description">Seu resultado foi: ${imc.toFixed(2)}</p>`;
        }

        document.getElementById("peso").value = "";
        document.getElementById("altura").value = "";

    }
    
}

