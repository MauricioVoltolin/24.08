function Calcular(){
    let numero =  Number(document.getElementById('numero').value);

    let exponencial = numero * numero

    document.getElementById("Resultado").innerHTML = 'O numero ao Quadrado é:  ' + exponencial
}