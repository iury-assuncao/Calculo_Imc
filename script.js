
let form = document.querySelector('#formulario');
let botao = document.getElementById('calcular');

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    let inputPeso = e.target.querySelector('#input_peso');
    let inputAltura = e.target.querySelector('#input_altura');

    let peso = Number(inputPeso.value);
    let altura = Number(inputAltura.value);

    if(!peso){
        setResultado('Peso inválido!',false);
        inputPeso.value = '';
        inputAltura.value = '';
        return;
    }else if(!altura){
        setResultado('Altura inválida!',false);
        inputPeso.value = '';
        inputAltura.value = '';
        return;
    }

    else{
        let imc = IMC(peso, altura);
        setResultado(`Seu IMC é: ${imc}`,true);
        inputPeso.value = '';
        inputAltura.value = '';
        return;
    }

    

  
});

function IMC(peso, altura){
    let imc = peso/(altura**2);
    return imc.toFixed(1);
    
}

function criaP(){
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();

    if(isValid){
        p.classList.add('pValido');
    }else{
        p.classList.add('pInvalido');

    }

    p.innerHTML = msg;
    resultado.appendChild(p);
    
}






