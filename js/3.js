class API{
    constructor(apikey){
        this.apikey = apikey
    }
    async obtenerMonedas(){
        const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}`

        const urlObtenida = await fetch(url)

        const monedas =  await urlObtenida.json()

        return{
            monedas
        }

    }
    async mostrarResultado(moneda, criptomoneda){
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}&api_key=${this.apikey}`

        const urlObtenida = await fetch(url)

        const resultado = await urlObtenida.json()

        return{
            resultado
        }
    }
}