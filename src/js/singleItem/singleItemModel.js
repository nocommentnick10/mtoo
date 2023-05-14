export default class SingleItem{
    constructor(id){
        this.id = id
    }

    async getItem(){
        try{
            const queryString = `http://app.kalinovne.ru/items/${this.id}`
            const response = await fetch(queryString)
            const data = await response.json()
            this.result = await data
        }
        catch(err){
            alert(err)
        }
    }

    async submitForm(formData){
        const queryString = 'http://app.kalinovne.ru/bidnew'

        const response = await fetch(queryString, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',

            },
            body: JSON.stringify(formData)
        })

        const data = await response.json()
        this.response = await data
    }
}