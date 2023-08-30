function Calcular(){
    let nome = Number(document.getElementById('nome').value);
    let salario = Number(document.getElementById('salario').value);
    let totalvendas = Number(document.getElementById('totalvenda').value);

    let comissao = totalvendas * (15/100)
    let salariof = comissao + salario

    document.getElementById("name").innerHTML = 'O nome do vendedor:  ' + nome    
    document.getElementById("name").innerHTML = 'O salario final do vendedor:  ' + salariof
}