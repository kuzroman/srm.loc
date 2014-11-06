App.Models.Order = Backbone.Model.extend({
    defaults: {
        //id: '', // backbone, видя айдишник автоматически добавляет его в урл и меняет запрос на put (вместо post) , при вызове метода save. Id должен добавляться SQL автоматически.
        created: '22.07.2014'
        ,buyer: 'Default'
        ,desc: 'Test company'
        ,cash: 0
        ,price: 10000
        ,paid: 1
        ,completion: false
        ,finished: false

        ,edit: false // if edit = 1 model can edit
    },

    initialize : function () {
        //this.on('error', function (model, error) {console.log(error);} );
        this.on('invalid', function (model, error) {console.log(error);} );
    },

    validate: function (attrs, options) {
        // проверяет save не set! // для set: order.set({'price':0}, {validate : true});

        var errors = {};
        if (!attrs.buyer.length) {
            errors.buyer = 'Введите название компании.';
        }
        if (!attrs.desc.length) {
            errors.desc = 'Введите описание компании.';
        }

        var price = attrs.price;
        if (!price.length || price <= 0) {
            errors.price = 'Введите цену';
        }

        //console.log('App.Models.Order.validate.error - ', errors);

        if(_.keys(errors).length > 0) {
            return errors;
        }

    }

});