import admin from './../admin/adminController'

export default function (state){
    document.querySelector('#app').innerHTML = ''
    admin(state)
}