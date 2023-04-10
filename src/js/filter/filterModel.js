export default class Filter{
    constructor(){
        this.query = ''
    }

    async getParams(){
        try{
            const queryString = 'https://kalinovne.ru/mtoo/itemsinfo'
            const response = await fetch(queryString)
            const data = await response.json()
            this.params = await data
        }
        catch(err){
            alert(err)
        }
        
    }

    async getResults(){
        try{
            const queryString = `https://kalinovne.ru/mtoo/items${this.query}`
            const response = await fetch(queryString)
            const data = await response.json()
            this.result = await data
        }
        catch(err){
            console.log(err)
        }
        
    }
}