function Calcular(){
    let SaldoI = 500
    let valor =  Number(document.getElementById('numero').value);

    let soma = SaldoI+valor

    document.getElementById("novo").innerHTML = 'O novo Saldo é:  ' + soma
}
