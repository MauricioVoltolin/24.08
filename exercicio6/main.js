function Calcular(){
    let nome =   document.getElementById('nome').value;
    let nota1 =   Number(document.getElementById('nota1').value);
    let nota2 =   Number(document.getElementById('nota2').value);
    let nota3 =   Number(document.getElementById('nota3').value);

    let media = (nota1 + nota2 + nota3) /3

    document.getElementById("texto").innerHTML = 'nome do aluno:  ' + nome
    document.getElementById("texto2").innerHTML = 'A media final é:  ' + media

}