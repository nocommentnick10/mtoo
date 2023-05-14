export default class Bids{
    constructor(){

    }

    async getBids(){
        try{
            const queryString = 'http://app.kalinovne.ru/bids'
            const result = await fetch(queryString)
            const data = await result.json()
            this.bids = await data
        }
        catch(err){
            alert('Error with getting bids')
            console.log(err)
        }
    }
}