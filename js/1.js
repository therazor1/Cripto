const api = new API('6906b525614f4f2dad2548c206e0e0b49dc7657d3d3885b8c56e1ff3fdd77b24')
const interface = new Interfaz()
const formulario = document.querySelector("#formulario")

formulario.addEventListener("submit", e=>{
    e.preventDefault()
    let moneda = document.querySelector("#moneda")
    const monedaSeleccionada = moneda.options[moneda.selectedIndex].value
    
    let criptomoneda = document.querySelector("#criptomoneda")
    const criptomonedaSeleccionada = criptomoneda.options[criptomoneda.selectedIndex].value

    if(monedaSeleccionada == '' || criptomonedaSeleccionada == ''){
        interface.mostrarMensaje("Faltan datos", 'error')
    }else{
        api.mostrarResultado(monedaSeleccionada, criptomonedaSeleccionada)
                            .then(resultado =>{
                                    interface.insertarResultado(resultado, criptomonedaSeleccionada, monedaSeleccionada)
                            })
    }
})