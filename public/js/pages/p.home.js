$(function () {
   home.init();
});

// отключаем все консоли разом
//console.log = function() {};

home = {
    ordersJSON: ordersJSON // ordersJSON from app\views\template\order.blade.php
    ,collectionOrders: null
};

home.init = function () {

    // подписка на события
    this.event();
    // в роутах есть тригеры событий => подписка на них должна быть оформлена до их вызова.
    this.startRouts(); // с этого момента срабатывают события в роутах!
    //console.log('home js');

//    var openCalc = $(".j_open_calc").overlay();
//    $(".j_open_calc").overlay().load()

    // в коллекцию обычно передается массив данных с сервера
    this.collectionOrders = new App.Collections.Orders(this.ordersJSON);
    var viewOrders = new App.Views.Orders({collection: this.collectionOrders});
    $('#orders').html(viewOrders.render().el);

    // todo - вынести в модель!
    //var listEditedOrder = []; // хранилка текущего и предыдущего заказа, обращаемся к ней во время закрытия предыдущей редактируемой области

};

home.event = function() {
    var self = this;

    // фаер события в роутах
    vent.on('editOrder', function () {
        for (var num in self.ordersJSON) {
            self.ordersJSON[num]['edit'] = 1;
        }
    })
};

home.resetEditing = function () {

    for (var num in this.models) {
        // находим текущую редактируемую модель
        if (this.models[num]['changed']['editing']) {
            this.models[num].set('editing', false);
        }
    }

};

home.startRouts = function() {
    new App.Router.Home();
    Backbone.history.start(); // после определения роутов обязательно запускаем запоминание истории в браузере HTML5
};




//////////////////////////////////////////////////////////////////////////////////////


// менять дефолтное состояние edit не нужно, оно для того и дефолтное.
// варианты
// - менять ordersJSON после срабатывания роута, добавляя в него свой edit
// это на этапе загрузки страницы

// - после нажатия на изменить -
// менять свойство для конкретной модели и перерисовывать ее


//////////////////////////////////////////////////////////////////////////////////////

//var collectionBuyers = new App.Collections.Buyers(buyersJSON);
//var viewBuyers = new App.Views.Buyers({collection: collectionBuyers});
//$('#buyers').html(viewBuyers.render().el);
//var listEditedBuyer = [];

//////////////////////////////////////////////////////////////////////////////////////