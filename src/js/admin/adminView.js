export function render(){
    const markup = `
        <div class="white-plate">
            <div class="container-fluid">
                <!-- header -->
                <div class="header">
                    <div class="row">
                        <div class="col-md-10">
                            <div class="site-logo">
                                Админ панель
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="admin-link">
                                <!-- <i class="fas fa-unlock-alt"></i> -->
                                <a href="../index.html">
                                    <img width="38" src="../img/icons/logout.svg" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- // header -->
                <div class="line-between"></div>
                <!-- content block -->
                <div class="row">
                    <div class="col-12">
                        <div class="title-1">Добавить товар</div>

                        <form>
                            
                            <div class="form-group">
                                <input type="text" class="form-control" id="scu" aria-describedby="emailHelp" placeholder="Артикул">
                            </div>

                            <div class="form-group">
                                <input type="text" class="form-control" id="title" aria-describedby="emailHelp" placeholder="Название">
                            </div>

                            <div class="form-group">
                                <select class="form-control" id="complex_name">
                                    <option value="">Генеральский</option>
                                    <option value="">Квантум</option>
                                    <option value="">Лесной</option>
                                    <option value="">Речной</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <input type="number" class="form-control" id="square" aria-describedby="emailHelp" placeholder="Площадь">
                            </div>

                            <div class="form-group">
                                <input type="number" class="form-control" id="pirce_sq_m" aria-describedby="emailHelp" placeholder="Цена за м2">
                            </div>

                            <div class="form-group">
                                <input type="number" class="form-control" id="price_total" aria-describedby="emailHelp" placeholder="Стоимость">
                            </div>

                            <div class="form-group">
                                <input type="number" class="form-control" id="building" aria-describedby="emailHelp" placeholder="Корпус">
                            </div>

                            <div class="form-group">
                                <input type="number" class="form-control" id="floor" aria-describedby="emailHelp" placeholder="Этаж">
                            </div>

                            <div class="form-group">
                                <input type="number" class="form-control" id="floors_total" aria-describedby="emailHelp" placeholder="Всего этажей">
                            </div>

                            <div class="form-group">
                                <input type="number" class="form-control" id="rooms" aria-describedby="emailHelp" placeholder="Комнат">
                            </div>

                            <div class="form-group">
                                <input type="number" class="form-control" id="flat_number" aria-describedby="emailHelp" placeholder="Номер квартиры">
                            </div>

                            <div class="form-group pt-3">
                                <label for="exampleFormControlFile1">Фото:</label>
                                <input type="file" class="form-control-file" id="image">
                            </div>

                            <div class="form-group">
                                <button type="submit" class="btn btn-custom">Добавить</button>
                            </div>

                        </form>

                    </div>

                </div>
                <!-- content block -->
            </div>
        </div>
    `

    document.querySelector('#app').insertAdjacentHTML('afterbegin', markup)
}