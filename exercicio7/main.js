function calcular(){
    
    let valorcarro =   Number(document.getElementById('valorcarro').value);
    let comissaoRev = valorcarro * 25/100
    let imposto = valorcarro * 45/100

    let valorfinal = valorcarro + comissaoRev + imposto

    document.getElementById("resultado").innerHTML = 'O valor obtido, em Reais é:  ' + real    
}