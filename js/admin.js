let resultado = document.getElementById('resultado');
let operaciónActual = '';
let operaciónAnterior = '';
let operaciónSeleccionada = '';


function agregarNumero(numero){
    operaciónActual += numero;
    resultado.value = operaciónActual;
}

function operación(op){
    if(operaciónActual === '') return;
    if(operaciónAnterior !== ''){
        calcular();
    }
    operaciónSeleccionada = op;
    operaciónAnterior = operaciónActual + ' ' + op;
    operaciónActual = '';
}

function calcular(){
    let resultadoFinal;
    const anterior = parseFloat(operaciónAnterior);
    const actual = parseFloat(operaciónActual);

    if(isNaN(anterior) || isNaN(actual))return;

    switch (operaciónSeleccionada){
        case '+':
            resultadoFinal = anterior + actual;
            break;
        case '-':
            resultadoFinal = anterior - actual;
            break;
        case '*':
            resultadoFinal = anterior * actual;
            break;
        case '/':
            resultadoFinal = anterior / actual;
            break;
        default:
            return;
    }
    
    operaciónActual = resultadoFinal.toString();
    operaciónAnterior = '';
    operaciónSeleccionada = '';
    resultado.value = operaciónActual;
}

function limpiar(){
    operaciónActual = '';
    operaciónAnterior = '';
    operaciónSeleccionada = '';
    resultado.value = '';
}