// url 

//url criptomoneda key 

class API {
    constructor(apikey){
        this.apikey = apikey
    }

    async obtenerMonedas(){

        const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apiKey}`

        const monedasObtenidas = await fetch(url)

        const moneda = await monedasObtenidas.json()

        return{
            moneda
        }

    }
    async obtenetValores(moneda, criptomoneda){

        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}&api_key=${this.apiKey}`
        
        //consuktar restASPI
        const urlConvertir = await fetch(url)

        const resultado = await urlConvertir.json()

        return{

            resultado
            
        }
    }
}

