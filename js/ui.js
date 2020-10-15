
class Interfaz{
    constructor(){
        this.init()
    }
    init(){
        this.insertarCripto()
    }
    insertarCripto(){
        
        cotizador.obtenerMonedas()
                    .then(monedas =>{
                        const select = document.querySelector('#criptomoneda')
                        for(const [key, value] of Object.entries(monedas.moneda.Data)){
                            //Añadir simbol 
                            const opcion = document.createElement('option')
                            opcion.value = value.Symbol
                            opcion.textContent = value.CoinName
                            select.appendChild(opcion)
                        }
                    })
                    .catch(error =>{
                        console.log('hubo un error')
                    })
    }
    mostrarMensaje(mensaje, error){
        let div = document.createElement('DIV')
        div.className = 'alert text-center'
        if(error === 'error'){
            div.classList.add('mensajeError', 'alert-danger')
        }else{
            div.classList.add('mensajeError', 'alert-success')
        }
        div.textContent = mensaje
        document.querySelector('#resultado').appendChild(div)
        setTimeout(()=>{
            document.querySelector('.mensajeError').remove()
            formulario.reset()
        },3000)
    }

    //Imprime el resultado de la cotizacion
    mostrarResultado(resultado , moneda, crypto){
        
        const datosMoneda = resultado[crypto][moneda]
        let precio = datosMoneda.PRICE.toFixed(2)
        console.log(datosMoneda)
        
        //construir template
        let templateHtml =`
                <div class="card bg-warning">
                    <div class="card-body text-light">
                        <h2 class="card-tittle">Resultado: </h2>
                        <p>El precio de ${datosMoneda.FROMSYMBOL} a moneda ${datosMoneda.TOSYMBOL} es de: ${precio}</p>
                    </div>
                </div>
        `

        document.querySelector('#resultado').innerHTML = templateHtml
    }
}