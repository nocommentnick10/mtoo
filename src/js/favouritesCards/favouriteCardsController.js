import FavouritesCards from "./favouritesCardsModel"
import * as view from './favouritesCardsView'

export default async function(state){
    const favsList = state.favourites.favs

    const favouriteCards = new FavouritesCards(favsList)

    view.renderLoader()

    await favouriteCards.getFavs()

    view.toggleLoader()

    view.renderPage(favouriteCards.cards)

    addToFavsListener()

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