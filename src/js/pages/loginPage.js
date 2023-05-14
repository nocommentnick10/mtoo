import login from './../login/loginController'

export default function (state){
    document.querySelector('#app').innerHTML = ''
    login(state)
}