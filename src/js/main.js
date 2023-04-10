import homePage from './pages/homePage'
import singleItem from './pages/singleItemPage'
import favsPage from './pages/favsPage'
import bidsPage from './pages/bidsPage'
import errPage from './pages/errPage'
import EventEmitter from './utils/EventEmitter'
import Favourites from './favourites/favouritesModel'

const state = {
    results: [],
    emitter: new EventEmitter(),
    favourites: new Favourites()
}

// NODE_OPTIONS=--openssl-legacy-provider npm start

// u1884314_jsproje
// wZ1bV6rW6hxG8jU9

window.state = state    // Удалить!

// Routes

const routes = [
    { path: '/', component: homePage },
    { path: 'item', component: singleItem },
    { path: 'favourites', component: favsPage },
    { path: 'bids', component: bidsPage },
]

function findComponentByPath(path, routes){
    return routes.find(route => {
        return route.path === path
    })
}

function router(){
    const pathArray = location.hash.split('/')

    let currPath = pathArray[0] === '' ? '/' : pathArray[1]
    currPath = currPath === '' ? '/' : currPath

    state.routeParams = pathArray[2] ? pathArray[2] : ''

    const { component = errPage } = findComponentByPath(currPath, routes) || {}

    component(state)
}

window.addEventListener('hashchange', router)
window.addEventListener('load', router)