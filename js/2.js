class Interfaz{
    constructor(){
        this.init()
    }
    init(){
        this.insertarSelected()
    }
    insertarSelected(){
        api.obtenerMonedas()
                .then(monedas =>{
                    for (const [key, value] of Object.entries(monedas.monedas.Data)){
                            let opciones = document.createElement('option')
                            opciones.value = value.Symbol
                            opciones.textContent = value.CoinName
                            document.querySelector("#criptomoneda").appendChild(opciones)
                    } 
                })
    }
    mostrarMensaje(mensaje, error){
        let div = document.createElement('div')
        if(error == 'error' ){
            div.classList = 'alert alert-danger mensaje text-center'
        }
        div.textContent = mensaje
        document.querySelector(".mensajes").appendChild(div)
        setTimeout(()=>{
            document.querySelector(".mensaje").remove()
        },2000)
    }
    insertarResultado(resultado , criptomoneda, moneda){
            //En esta seccion se arma el resultado, estilos :V 
            const respuesta = resultado.resultado.RAW[criptomoneda][moneda]
            console.log(respuesta)
            let html = ''
            html +=`
                    <p>${respuesta.PRICE}</P>
            `
            document.querySelector("#resultado").innerHTML = html
    }
}