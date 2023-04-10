import Filter from './filterModel'
import * as view from './filterView'

export default async function(state){
    if(!state.filter){
        state.filter = new Filter()
    }

    view.renderLoader()

    await state.filter.getParams()

    view.render(state.filter.params)

    await state.filter.getResults()

    view.toggleLoader()
    
    state.results = state.filter.result

    view.changeBtnText(state.filter.result.length)

    const form = document.querySelector('#filter-form')

    form.addEventListener('change', async function(e){
        e.preventDefault()
        state.filter.query = view.getInput()
        await state.filter.getResults()
        state.results = state.filter.result
        view.changeBtnText(state.filter.result.length)
    })

    form.addEventListener('reset', async function(){
        state.filter.query = ''
        await state.filter.getResults()
        view.changeBtnText(state.filter.result.length)
    })

    form.addEventListener('submit', function(e){
        e.preventDefault()
        state.emitter.emit('event:renderLising', {})
    })
}