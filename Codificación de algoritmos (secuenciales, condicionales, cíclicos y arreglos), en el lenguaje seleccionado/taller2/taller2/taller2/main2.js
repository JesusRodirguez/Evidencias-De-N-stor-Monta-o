let salida;

class Producto{
    constructor(nombre,precio){
        this.nombre = nombre
        this.precio = precio
    }
    CalcularDescuento(){
        let descuento = parseFloat(prompt("Dame porfavor el codigo del descuento : "))
        if(descuento == 0.1){
            let PrecioDescuento = this.precio-((this.precio/100)*20)
            alert(` El nombre de tu prodcuto es ${this.nombre}, precio ${this.precio} con descuento ${PrecioDescuento}`)
        }
        else if(descuento == 0.2){
            let PrecioDescuento = this.precio-((this.precio/100)*10)
            alert( `El nombre de tu prodcuto es ${this.nombre}, precio ${this.precio} con descuento ${PrecioDescuento}`)
        }
        else{
            alert("no escrbiste la clave corecta")
            alert( `El nombre de tu prodcuto es ${this.nombre}, precio ${this.precio}`)
            
        }
    }
}
do{
    let resproducto = prompt("¿Quieres registrar un producto si/no?").toLowerCase().trim()
    if(resproducto === "si"){
        const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
        
        
        const nombre = prompt("Dame el nombre del producto").toLocaleLowerCase().trim();
        if(!soloLetras.test(nombre)){
            alert("Solo se permite letras mi borther")
            continue
            }
        else{
            const precio = parseFloat(prompt("Dame el precio porfavor"))
            if(isNaN(precio)){
                alert("Brother solo se recibe numeros")
                continue
            }
            else{
                const producto = new Producto(nombre,precio)
                producto.CalcularDescuento()
            }
            }
        
    }
    
    else{
        alert("Solo se acepta si o no")
        continue
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