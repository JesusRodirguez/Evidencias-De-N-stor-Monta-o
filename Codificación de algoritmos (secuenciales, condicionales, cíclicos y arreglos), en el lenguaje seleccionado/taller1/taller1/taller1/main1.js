let salida;
do{
    let NumeroAbsoluto = parseFloat(prompt("Dame le numero porfavor"))
    if(isNaN(NumeroAbsoluto)){
        alert("Brother solo se recibe numeros")
        continue
    }
    else if (NumeroAbsoluto>=0){
        alert(` El número Absoluto de tu numero es : ${NumeroAbsoluto}`)
    }
    else if (NumeroAbsoluto<0){
        let Resultado = NumeroAbsoluto*-1
        alert(` El número Absoluto de tu numero es : ${Resultado}`)
    }
    salida = prompt("¿Quieres volverlo a intentar  si/no?").toLowerCase().trim()
    if(salida === "no"){
        alert("Hasta luego mi brother")
        break
    }
    else if(salida === "si"){
        continue
    }
    else{
        alert("Solo se resive letras")
    }
}while(true)