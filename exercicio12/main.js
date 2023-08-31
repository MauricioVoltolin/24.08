function Calcular(){
    let temp = Number(document.getElementById("temperatura").value)
    let celsius = (temp - 32) * (5/9)

    document.getElementById('resultado').innerHTML = "A temperatura em ° Celsius é: " + celsius
}