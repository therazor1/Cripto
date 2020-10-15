//key 
const cotizador = new API('6906b525614f4f2dad2548c206e0e0b49dc7657d3d3885b8c56e1ff3fdd77b24')
const interface = new Interfaz()


const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', (e)=>{
    e.preventDefault()
    const moneda = document.getElementById('moneda')
    const monedaSeleccionada = moneda.options[moneda.selectedIndex].value

    const criptomoneda = document.getElementById('criptomoneda')
    const criptomonedaSeleccionada = criptomoneda.options[criptomoneda.selectedIndex].value
    if(monedaSeleccionada === '' || criptomonedaSeleccionada === ''){
        interface.mostrarMensaje('Faltan Datos', 'error')
    }else{
        
        cotizador.obtenetValores(monedaSeleccionada, criptomonedaSeleccionada)
                                .then(res =>{                                 
                                    interface.mostrarResultado(res.resultado.RAW, monedaSeleccionada, criptomonedaSeleccionada)
                                })

    }
})