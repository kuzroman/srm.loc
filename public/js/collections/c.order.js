App.Collections.Orders = Backbone.Collection.extend({
    model: App.Models.Order // дефолтные данные, если не будут переданы новые данные
    ,url: '/order'
    
    ,initialize: function () {

        // попробовать вынести - это в page!
        // отправка данных на сервер
        vent.on('vOderEdit:addModel', function(model) {
            console.log(this);
            var def = this.create(model, { wait: true });
        });

        // данные пришли с сервера говорим что можем их отрисовать
        this.on('sync', function (a, model) {
            console.log('sync', a, model);
            vent.trigger('cOrder:drawView', model);
        });

    }

    ,resetEditing: function (el) {

//        for (var num in this.models) {
//            // находим текущую редактируемую модель
//            if (this.models[num]['changed']['editing']) {
//                // меняем свойство
//                this.models[num].set('editing', false);
//                // должны изменить вид у найденной модели
//                console.log(this, this.models[num], el);
//            }
//        }

    }

});