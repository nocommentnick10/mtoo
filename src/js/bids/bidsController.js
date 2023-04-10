import Bids from './bidsModel'
import * as view from './bidsView'

export default async function(state){
    if(!state.bids){
        state.bids = new Bids()
    }

    view.renderLoader()
    
    await state.bids.getBids()

    view.toggleLoader()

    view.renderBids(state.bids.bids)
}