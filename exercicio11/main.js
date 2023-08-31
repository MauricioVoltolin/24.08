function Calcular(){
   
    let A = Number(document.getElementById("A").value)
    let B = Number(document.getElementById("B").value)
    let C = Number(document.getElementById("C").value)

    let R=(A+B)*(A+B)
    let S=(B+C)*(B+C)
    let D = R+S/2

    document.getElementById("resultado").innerHTML = `O resultado é:   ${D}`
}