class Producto{
    constructor(nombre,precio){
        this.nombre = nombre
        this.precio = precio
    }
    MostrarProducto(){
        alert(` El nombre de tu prodcuto es ${this.nombre}, precio ${this.precio}`)
    }
}

class Descuento extends Producto{
    constructor(nombre,precio,AlazarN){
        super(nombre,precio)
        this.AlazarN = AlazarN
    }
    CalcularDescuento(){
        if(this.AlazarN<74){
            let DescuPrecio = this.precio-((this.precio/100)*15)
            alert( `El nombre de tu Producto es ${this.nombre},\n precio ${this.precio}\n con descuento ${DescuPrecio}`)
        }
        else if(this.AlazarN >=74){
            let DescuPrecio = this.precio-((this.precio/100)*20)
            alert( `El nombre de tu Producto es ${this.nombre},\n precio ${this.precio}\n con descuento ${DescuPrecio}`)

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
                let ProbarSuerte = prompt("¿Quieres probar suerte,haber si tienes descuento si/no : ?").toLowerCase().trim()
                if(!soloLetras.test(ProbarSuerte)){
                    alert("Solo se permite letras mi borther")
                    continue
                }
                else if(ProbarSuerte == "si"){
                    const AlazarN = Math.floor(Math.random()*100)+1
                    const producto = new Descuento(nombre,precio,AlazarN);
                    producto.CalcularDescuento()
                }
                else if(ProbarSuerte == "no"){
                    const prodcuto = new Producto(nombre,precio);
                    prodcuto.MostrarProducto();
                }
                else{
                    alert("Solo se recibe si/no")
                    continue
                }
            }
        }
    }
    else if (resproducto === "no"){
        alert("Okey mi brother,hasta luego")
        break
    }
    else{
        alert("Solo se acepta si o no")
        continue
    }


    let salida = prompt("¿Quieres repetir  si/no ?").toLowerCase().trim();
    if(salida == "no"){
        alert("Hasta luego mi borther")
        break
    }
    else if(salida === "si"){
        continue
    }
    else{
        alert("Solo se resive letras")
    }
}while(true)