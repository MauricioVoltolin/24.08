function Calcular(){
    //variável global
    let numero1 = Number(document.getElementById('numero1').value);
    let numero2 = Number(document.getElementById('numero2').value);

    let soma = numero1 + numero2;
    let subtracao = numero1 - numero2;
    let divisao = numero1 / numero2;
    let multiplicação = numero1 * numero2;

   document.getElementById("soma").innerHTML = 'A soma é: ' + soma
   document.getElementById("subtracao").innerHTML = 'A subtração é: ' + subtracao
   document.getElementById("divisao").innerHTML = 'A divisão é: ' + divisao
   document.getElementById("multiplicacao").innerHTML = 'A multiplicação é: '+ multiplicação
}