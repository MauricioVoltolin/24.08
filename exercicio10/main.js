function Calcular(){
    let valor = Number(document.getElementById('valorp').value);
    let taxa = Number(document.getElementById('taxas').value);
    let tempo = Number(document.getElementById('dias').value);
    
    let prestacao = valor + ( valor *(taxa/100)* tempo)

    document.getElementById("resultado").innerHTML = 'O valor atual da fatura é: ' + prestacao
}