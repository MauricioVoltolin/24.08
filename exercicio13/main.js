function Calcular() {
    let valorA = Number(document.getElementById("valorA").value)
    let valorB = Number(document.getElementById("valorB").value)
    let valorC = Number(document.getElementById("valorC").value)
    let valorResultado = Number(document.getElementById("valorResultado").value)

    if (valorA == 0) {
        document.getElementById("resultado").innerHTML = "A equação apresentada não é de segundo grau pois o valor de A é 0"
    } else {
        
    
        if (valorResultado != 0) {
            valorC -= valorResultado
            valorResultado = 0
        }
        if (valorA == null) {
            valorA = 0
        }
        if (valorB == null) {
            valorB == 0
        }
        if (valorC == null) { 
            valorC == 0
        }
        if (valorResultado == null) {
            valorResultado == 0
        }
    
        let valorDelta = Math.pow(valorB, 2) - (4 * valorA * valorC)
    
        if (valorDelta < 0) {
            document.getElementById("resultado").innerHTML = "A equação apresentada não possuí uma raíz com valor real"
        }
        else if (valorDelta == 0) {
            let raizDelta = Math.sqrt(valorDelta)
            let valorRaiz = (-valorB + raizDelta) / (2 * valorA)
            
            document.getElementById("resultado").innerHTML = "A equação apresentada possuí a raíz de valor: " + valorRaiz
        }
        else {
            let raizDelta = Math.sqrt(valorDelta)
            let valorRaiz1 = (-valorB + raizDelta) / (2 * valorA)
            let valorRaiz2 = (-valorB - raizDelta) / (2 * valorA)
            
            document.getElementById("resultado").innerHTML = "A equação apresentada possuí as raízes de valor: "
            + valorRaiz1 + " e " + valorRaiz2
        }

    }


}