function Calcular(){
    let total =  Number(document.getElementById('total').value);
    let pagas =  Number(document.getElementById('pagas').value);
    let valor =  Number(document.getElementById('valor').value);

    let valorpg = valor * pagas
    let valortt = valor * total
    let falta = (valortt - valorpg)

    document.getElementById("texto").innerHTML = 'O valor ja pago é:  ' + valorpg
    document.getElementById("texto2").innerHTML = 'O valor faltante é:  ' + falta
}
