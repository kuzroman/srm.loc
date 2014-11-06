App.Models.Contact = Backbone.Model.extend({

//    defaults: {
//        //id: '', // backbone, видя айдишник автоматически добавляет его в урл и меняет запрос на put (вместо post) , при вызове метода save. Id должен добавляться SQL автоматически.
//        first_name: '',
//        last_name: '',
//        email_address: '',
//        description: ''
//    },

//    urlRoot: '/contact',

    initialize : function () {
        //this.on('error', function (model, error) {console.log(error);} );
    },

    validate: function(attrs) {
        var error = false;
        if(!attrs.first_name || ! attrs.last_name) {
            error = "Имя и фамилия обязательны для заполнения!";
        }

        if(!attrs.email_address) {
            error = "Пожалуйста введите валидный Email.";
        }
        
//        console.log(error);
        return error;
    }
});