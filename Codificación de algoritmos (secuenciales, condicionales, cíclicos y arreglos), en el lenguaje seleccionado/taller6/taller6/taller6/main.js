class perosna{
    constructor(documento){
        this.documento = documento
    }
}

class estudiante extends(perosna){
    constructor(documento,nota1,nota2,nota3,notafinal){
        super(documento)
        this.nota1 = nota1
        this.nota2 = nota2
        this.nota3 = nota3
        this.notafinal = notafinal
    }
    notasPromedio(){
        if(this.notafinal >= 3.0 ){
            console.log("======================================")
            console.log(` Documento : ${this.documento}`)
            console.log(` Nota1     : ${this.nota1}`)
            console.log(` Nota2     : ${this.nota2}`)
            console.log(` nota3     : ${this.nota3}`)  
            console.log(` NotaFinal : ${this.notafinal}`)
            console.log( ` Estado   :  Aprobado  ` )         
            console.log("======================================")
        }
        else if(this.notafinal <= 2.9 && this.notafinal >=2.0 ){
            console.log("======================================")
            console.log(` Documento : ${this.documento}`)
            console.log(` Nota1     : ${this.nota1}`)
            console.log(` Nota2     : ${this.nota2}`)
            console.log(` nota3     : ${this.nota3}`)  
            console.log(` NotaFinal : ${this.notafinal}`)
            console.log( ` Estado   :  Recuperación  ` )         
            console.log("======================================")
        }
        else{
            console.log("======================================")
            console.log(` Documento : ${this.documento}`)
            console.log(` Nota1     : ${this.nota1}`)
            console.log(` Nota2     : ${this.nota2}`)
            console.log(` nota3     : ${this.nota3}`)  
            console.log(` NotaFinal : ${this.notafinal}`)
            console.log( ` Estado   :  Perdida  ` )         
            console.log("======================================")
        }
    }

}
let notas = []
do{
    let inciarSecuencia = prompt("¿Quieres mirar los resultados de 50 estudiantes si/no?").toLowerCase().trim()
    if(inciarSecuencia == "si"){
        for(let i = 1;i<=50;i++){
            let documento = Math.floor(Math.random()*(100000000000-199999999999 +1))+100000000000;
            let nota1 = (Math.random()*(5.0-1.0))+1.0;
            let nota2 = (Math.random()*(5.0-1.0))+1.0;
            let nota3 = (Math.random()*(5.0-1.0))+1.0;
            let notafinal = (nota1+nota2+nota3)/3;
            const estudiante1 = new estudiante(documento,nota1,nota2,nota3,notafinal)
            notas.push(estudiante1)
        }
        notas.forEach((estudiante)=>{
            estudiante.notasPromedio()
        })
    }
    else if(inciarSecuencia == "no"){
        alert("Okey mi brother,hasta luego")
        break
    }
    else{
        alert("Borther solo se acepta si/no")
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