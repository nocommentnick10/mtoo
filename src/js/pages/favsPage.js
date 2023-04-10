import favouritesCards from './../favouritesCards/favouriteCardsController'

export default function (state){
    document.querySelector('#app').innerHTML = ''
    favouritesCards(state)
}