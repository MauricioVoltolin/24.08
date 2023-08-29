function Calcular(){
    let valordodol = Number(document.getElementById('valordol').value);
    let dinheirinhos = Number(document.getElementById('dinheiro').value);

    let real = valordodol*dinheirinhos

    document.getElementById("resultado").innerHTML = 'O valor obtido, em Reais é:  ' + real    

}