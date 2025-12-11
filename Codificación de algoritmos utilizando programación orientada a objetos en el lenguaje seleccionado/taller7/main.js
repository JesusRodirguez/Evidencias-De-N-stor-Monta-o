
class deuda{
    constructor(monto,tasaInteres,plazo){
        this.monto = monto;
        this.tasaInteres = tasaInteres / 100;
        this.plazo = plazo;
    }
    calcularCuota(){
        const i = this.tasaInteres;
        const n = this.plazo;
        const c = (this.monto * i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
        return c;
    }
}
class Montodeudda extends deuda{
    constructor(monto,tasaInteres,plazo){
        super(monto,tasaInteres,plazo)
        this.tabla = [];
    }
    generarTablaAmortizacion(){
        const cuota = this.calcularCuota()
        let saldo = this.monto;
        for(let mes = 1; mes<= this.plazo;mes++){
            const interes = saldo * this.tasaInteres;
            const abonoCapital = cuota - interes;
            saldo -= abonoCapital;
            
            this.tabla.push({
                mes : mes,
                cuota: cuota.toFixed(2),
                interes: interes.toFixed(2),
                abono: abonoCapital.toFixed(2),
                saldo: saldo > 0 ? saldo.toFixed(2) : 0
            });
            
        }
        return this.tabla;
    }
}

function registrarMora(){
    const monto= parseInt(document.getElementById('monto').value);
    const tasaInteres= parseInt(document.getElementById('tasaInteres').value);
    const plazo= parseInt(document.getElementById('plazo').value);

    if(isNaN(monto) || isNaN(tasaInteres) || isNaN(plazo)){
        const msg = document.getElementById('Valor');
        msg.innerHTML = "SOLO SE RECIBE NUMEROS";
        msg.style.color = "red";
        msg.style.fontWeight = "bold";
        msg.style.fontSize = "25px";
        msg.style.padding = "20px";
        msg.style.borderBottom = "10px";
        msg.style.background = "#FF6666";
        msg.style.textAlign = "center";
        msg.style.borderRadius = "30px";
    }
    const persona = new Montodeudda(monto,tasaInteres,plazo);
    const  tabla = persona.generarTablaAmortizacion()
     let html = `
        <table border="1" cellpadding="8" style="border-collapse:collapse;  margin:auto; text-align:center;">
            <tr>
                <th style ="background:black; color:white; ">Mes</th>
                <th style ="background:black; color:white; ">Cuota</th>
                <th style ="background:black; color:white; ">Interés</th>
                <th style ="background:black; color:white; ">Abono a Capital</th>
                <th style ="background:black; color:white; ">Saldo Restante</th>
            </tr>
    `;

    tabla.forEach(fila => {
        html += `
            <tr>
                <td style ="background:white; color:black; ">${fila.mes}</td>
                <td style ="background:white; color:black; ">${fila.cuota}</td>
                <td style ="background:white; color:black; ">${fila.interes}</td>
                <td style ="background:white; color:black; ">${fila.abono}</td>
                <td style ="background:white; color:black; ">${fila.saldo}</td>
            </tr>
        `;
    });
    html += `</table>`;

    document.getElementById('resultado').innerHTML = html;
}

