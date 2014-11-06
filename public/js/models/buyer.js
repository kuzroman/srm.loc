App.Models.Buyer = Backbone.Model.extend({
    defaults: {
        //id: '', // backbone, видя айдишник автоматически добавляет его в урл и меняет запрос на put (вместо post) , при вызове метода save. Id должен добавляться SQL автоматически.
        name: 'name organisation'
        ,kind: 'покупатель || продавец'
        ,email: 'company@mail.ru'
    },

    initialize : function () {
        //this.on('error', function (model, error) {console.log(error);} );
        this.on('invalid', function (model, error) {console.log(error);} );
    },

    validate: function (attrs, options) {
        // проверяет save не set! // для set: order.set({'price':0}, {validate : true});

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
//        //console.log('App.Models.Order.validate.error - ', errors);
//
//        if(_.keys(errors).length > 0) {
//            return errors;
//        }

    }

});