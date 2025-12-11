class Numero{
    constructor(valor){
        this.valor = valor
    }
    valorelevar(){
        let numeroelevado = this.valor**2
        console.log(`===================================\n Numero : ${this.valor}\n Exponente : ${numeroelevado} \n===================================`)

    }
}
let NumerosExponente =[]
do{
    respuesta = prompt("Brother,¿Quieres ver la potencia de 500 numeros?")
    if(respuesta == "si"){
        for( let i = 1; i<501;i++){
            let valor = i;
            const numeoro = new Numero(valor)
            NumerosExponente.push(numeoro)
        }
        NumerosExponente.forEach((numero)=>{
            numero.valorelevar()
        })
    }
    else if (respuesta == "no"){
        alert("hasta luego mi borther")
        break
    }
    else{
        alert("solo se recibe si o no")
        continue
    }
    let salida =prompt("¿Quieres volver a repetir si/no?").toLowerCase().trim()
    if(salida == "no"){
        alert("Hasta luego mi borther")
        break
    }
    else if(salida == "si"){
        continue
    }
    else{
        alert("Solo se recibe si/no")
        continue
    }
}while(true)