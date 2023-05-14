export function render(){
    const markup = `
        <div class="white-plate white-plate--login">
            <div class="container-fluid">

                <!-- header -->
                <div class="header text-center">
                    <a href="index.html" class="site-logo">
                        <span>Админ</span>Панель
                    </a>
                </div>
                <!-- // header -->

                <div class="line-between"></div>
                <form action="#/admin">
                    <div class="form-group">
                        <input type="password" class="form-control" placeholder="Пароль">
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-block btn-custom">Войти</button>
                    </div>
                </form>
                <p class="text-center"><a href="#/" class="text-secondary">Вернуться назад</a></p>
            </div>
        </div>
    `

    document.querySelector('#app').insertAdjacentHTML('afterbegin', markup)
}