import * as view from './listingView'

export default function(state){
    view.render()

    state.results.forEach(function(item){
        view.renderCard(item, state.favourites.isFav(item.id))
    })

    addToFavsListener()

    state.emitter.subscribe('event:renderLising', () => {
        view.clearListingContainer()
        state.results.forEach(function(item){
            view.renderCard(item, state.favourites.isFav(item.id))
        })
        addToFavsListener()
    })

    function addToFavsListener(){
        Array.from(document.getElementsByClassName('card__like')).forEach((item) => {
            item.addEventListener('click', e => {
                e.preventDefault()
    
                const currId = e.target.closest('.card').dataset.id
    
                state.favourites.toggleFav(currId)
    
                view.toggleFavIcon(e.target.closest('.card__like'), state.favourites.isFav(currId))
            })
        })
    }
}