
function calcular(e) {
    e.preventDefault();

    let peso = document.getElementById("peso").value.trim();
    let altura = document.getElementById("altura").value.trim();
    let resultado = document.getElementById("resultado");

    peso = Number(peso);
    altura = Number(altura);

    if(!peso || !altura || isNaN(peso) || isNaN(altura)) {
        alert("Por favor, digite valores numéricos válidos para o peso e altura");
        return;
    }else {

        let imc = peso / (altura * altura);

        if(imc < 18.5){
            resultado.innerHTML = `Seu resultado foi: ${imc.toFixed(2)} <br/> <strong>Abaixo do Normal</strong> - Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso.`;
        }else if(imc < 25){
            resultado.innerHTML = `Seu resultado foi: ${imc.toFixed(2)} <br/> <strong>Normal</strong> - Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada.`;
        }else if(imc < 30){
            resultado.innerHTML = `Seu resultado foi: ${imc.toFixed(2)} <br/> <strong>Sobrepeso</strong> - Ele é, na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão. Importante rever hábitos e buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade pra valer.`;
        }else if(imc < 35){
            resultado.innerHTML = `Seu resultado foi: ${imc.toFixed(2)} <br/> <strong>Obesidade Grau 1</strong> - Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista.`;
        }else if(imc < 40){
            resultado.innerHTML = `Seu resultado foi: ${imc.toFixed(2)} <br/> <strong>Obesidade Grau 2</strong> - Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde.`;
        }else{
            resultado.innerHTML = `Seu resultado foi: ${imc.toFixed(2)} <br/> <strong>Obesidade Grau 3</strong> - Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente.`;
        }

        document.getElementById("peso").value = "";
        document.getElementById("altura").value = "";

    }
    
}

