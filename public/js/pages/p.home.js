$(function () {
    home.init();
});

// отключаем все консоли разом
//console.log = function() {};

home = {
    ordersJSON: ordersJSON // ordersJSON from app\views\template\order.blade.php
    , cOrders: null

    //,buyersJSON: buyersJSON // buyersJSON from app\views\template\buyer.blade.php
    ,cBuyers: null
};

home.init = function () {

    this.html.init();
    this.event();

    // в роутах есть тригеры событий => подписка на них должна быть оформлена до их вызова.
    this.startRouts(); // с этого момента срабатывают события в роутах!
    //console.log('home js');

    // в коллекцию обычно передается массив данных с сервера
    this.cOrders = new App.Collections.Orders(this.ordersJSON);
    var viewOrders = new App.Views.Orders({collection: this.cOrders});
    this.html.ordersBox.html(viewOrders.render().el);


//    this.cBuyers = new App.Collections.Buyers(this.buyersJSON);
//    var viewBuyers = new App.Views.Buyers({collection: this.cBuyers});
//    this.html.buyersBox.html(viewBuyers.render().el);
};

home.html = {
    init: function () {
        this.body = $('body');
        this.ordersBox = $('#ordersBox'); // список заказов
        this.buyersBox = $('#buyersBox'); // список покупателей
    }
};

home.event = function () {
    var self = this;

    // фаер события в роутах
    vent.on('rHomeEdit', function () {

        //console.log('rHomeEdit');
        for (var num in self.ordersJSON) {
            if (self.ordersJSON.hasOwnProperty(num)) {
                self.ordersJSON[num]['edit'] = true;
            }
        }

//        for (num in self.buyersJSON) {
//            if (self.buyersJSON.hasOwnProperty(num)) {
//                self.buyersJSON[num]['edit'] = true;
//            }
//        }
    });

    // показать данные о покупателях
    vent.on('vOrderEditor:drawBuyers', function (vOrder) {
        if (self.cBuyers && self.cBuyers.length) {
            vent.trigger('pHome:showBuyers');
        }
        else self.fetchBuyers();
    });

    // данные покупателей получены
    vent.on('pHome:fetchBuyersDone', function () {
        self.drawBuyers();
    });

};

home.fetchBuyers = function () {
    this.cBuyers = new App.Collections.Buyers();
    var deferred = this.cBuyers.fetch();

    deferred.done(function () {
        vent.trigger('pHome:fetchBuyersDone');
    });
};

home.drawBuyers = function () {
    var viewBuyers = new App.Views.Buyers({collection: this.cBuyers});
    this.html.buyersBox.html(viewBuyers.render().el);
};

home.startRouts = function () {
    new App.Router.Home();
    Backbone.history.start(); // после определения роутов обязательно запускаем запоминание истории в браузере HTML5
};
