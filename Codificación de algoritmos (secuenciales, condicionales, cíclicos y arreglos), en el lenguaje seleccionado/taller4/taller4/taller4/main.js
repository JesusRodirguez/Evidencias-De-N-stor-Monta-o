class persona{
    constructor(nombre,edad,cargo,AnwerBonificación){
        this.nombre = nombre
        this.edad = edad
        this.cargo = cargo
        this.AnwerBonificación = AnwerBonificación

    }
}
class trabajador extends persona{
    constructor(nombre,edad,cargo,venta,AnwerBonificación){
        super(nombre,edad,cargo,AnwerBonificación)
        this.venta = venta
    }
    calcularBonificacion(){
        if(this.venta<= 1000000 || this.venta >3000000){
            let comision = this.venta+((this.venta/100)*3)
            alert(`===================================\n nombre : ${this.nombre}\n edad : ${this.edad}\n cargo : ${this.cargo}\n venta : ${this.venta}\n salario Final . ${comision}\n===================================`)
        }
        else if(this.venta<= 3000000 || this.venta >5000000){
            let comision = this.venta+((this.venta/100)*4)
            alert(`===================================\n nombre : ${this.nombre}\n edad : ${this.edad}\n cargo : ${this.cargo}\n venta : ${this.venta}\n salario Final . ${comision}\n===================================`)
        }
        else if(this.venta<= 5000000 || this.venta >7000000){
            let comision = this.venta+((this.venta/100)*5)
            alert(`===================================\n nombre : ${this.nombre}\n edad : ${this.edad}\n cargo : ${this.cargo}\n venta : ${this.venta}\n salario Final . ${comision}\n===================================`)
        }
        else if(this.venta<= 7000000 || this.venta >10000000){
            let comision = this.venta+((this.venta/100)*6)
            alert(`===================================\n nombre : ${this.nombre}\n edad : ${this.edad}\n cargo : ${this.cargo}\n venta : ${this.venta}\n salario Final . ${comision}\n===================================`)
        }
    }
    Trabajo(){
        alert(`===================================\n nombre : ${this.nombre}\n edad : ${this.edad}\n cargo : ${this.cargo}\n venta : ${this.venta}\n===================================`)
    }
}

let Trabajadores = []

do{
    let Respuesta = prompt("¿Quieres mirar los premios de 100 trabajadores si/no?").toLowerCase().trim()
    if(Respuesta == "si"){
        for( let i = 1;i<=100;i++){
            let nombre = prompt("Dame el nombre del trabajador").toLowerCase().trim()
            const VerificarLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
            if(!VerificarLetras.test(nombre)){
                alert("Brother solo se permite letras")
                break
            }
            else{
                let edad = Number(prompt("Dame la edad del Trabajador,porfavor"))
                if(isNaN(edad)){
                    alert("Mi brother es solo numeros")
                    continue
                }
                else if (edad< 18 || edad >= 70 ){
                    alert("Solo se permiten trabajadores entre los 18 y 70")
                }
                else{
                    let cargo = prompt("Dame el cargo del trabajador plis").toUpperCase()
                    if(!VerificarLetras.test(cargo)){
                        alert("Solo se permiten letras mi borther");
                        continue
                    }
                    else{
                        let venta = parseInt(prompt("Dame la venta del trabajador"))
                        if(isNaN(venta)){
                            alert("Solo se permite numeros")
                        }
                        else if(venta<1000000){
                            alert("solo se permite entre un 1 millon o 10 millones")
                            continue
                        }
                        else if(venta>10000000){
                            alert("solo se permite entre un 1 millon o 10 millones")
                            continue
                        }
                        else{
                            let AnwerBonificación = prompt("Quieres calcular la bonificación del trabajadorsi/no?").toLowerCase().trim()
                            if(AnwerBonificación == "si"){
                                let empleado = new trabajador(nombre,edad,cargo,venta,AnwerBonificación)
                                Trabajadores.push(empleado)
                            }
                            else if (AnwerBonificación == "no"){
                                let empleado = new trabajador(nombre,edad,cargo,venta,AnwerBonificación)
                                Trabajadores.push(empleado)
                            }
                            else{
                                alert("solo se recibe si/no")
                                continue
                            }
                        }
                    }
                }
            }
        }
        Trabajadores.forEach((perempleado) =>{
            if(perempleado.AnwerBonificación == ("si")){
                perempleado.calcularBonificacion()
            }
            else if(perempleado.AnwerBonificación == ("no")){
                perempleado.Trabajo()
            }
        })
    }
    if(Respuesta == "no"){
        alert("Okey,hasta luego mi borther")
        break
    }
    else{
        alert("Solo se permite si/no")
        continue
    }


    let salida = prompt("¿Quieres volver a repetir si/no ?").toLowerCase().trim()
    if(salida == "no"){
        alert("Okey,Hasta luego mi borther")
        break
    }
    else if(salida == "si"){
        continue
    }
    else{
        alert("solo se abmite si/no")
    }
}while(true)