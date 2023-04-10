export default class FavouritesCards{
    constructor(favsList){
        this.favsList = favsList
    }

    async getFavs(){
        try{
            const ids = this.favsList.toString()
            if(this.favsList.length != 0){
                const queryString = `https://jsproject.webcademy.ru/items?ids=${ids}`

                const result = await fetch(queryString)
                const data = await result.json()
                this.cards = await data
            } else {
                this.cards = []
            }
        } catch(err){
            alert(err)
        }
    }
}