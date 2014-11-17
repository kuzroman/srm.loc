App.Models.OrderHead = Backbone.Model.extend({
    defaults: {
        adding: false // есть ли кнопка добавление
    }

    ,initialize : function () {
        var self = this;

        // прослушка роута
        vent.on('rHome:edit', function () { self.set({adding:true}); });
    }

});

App.Models.Order = Backbone.Model.extend({
    defaults: {
        //id: '', // backbone, видя айдишник автоматически добавляет его в урл и меняет запрос на put (вместо post) , при вызове метода save. Id должен добавляться SQL автоматически.
        created: new Date
        ,id_buyer: false
        ,b_name: 'Название'
        ,desc: 'Описание'
        ,cash: false
        ,price: 0
        ,paid: false
        ,completed: false
        ,finished: false

        ,editing: false // если тру появится кнопка редактировать
    },

    initialize : function () {
        var self = this;

        // прослушка роута
        vent.on('rHome:edit', function () { self.set({editing:true}); });
    }

    ,validate: function (attrs, options) {
////        проверяет save не set! // для set: order.set({'price':0}, {validate : true});
//        var errors = {};
//        if (!attrs.buyer.length) {
//            errors.buyer = 'Введите название компании.';
//        }
//        if (!attrs.desc.length) {
//            errors.desc = 'Введите описание компании.';
//        }
//
//        var price = attrs.price;
//        if (!price.length || price <= 0) {
//            errors.price = 'Введите цену';
//        }
//
//        console.log('App.Models.Order.validate.error - ', errors);
//
//        if(_.keys(errors).length > 0) {
//            return errors;
//        }

    }

});