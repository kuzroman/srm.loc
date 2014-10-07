App.Models.Task = Backbone.Model.extend({

    defaults: {
        //id: '', // backbone, видя айдишник автоматически добавляет его в урл и меняет запрос на put (вместо post) , при вызове метода save. Id должен добавляться SQL автоматически.
        title: '',
        priority: 1,
        complete: 0
    },

    urlRoot: '/tasks',

    initialize : function () {
        //this.on('error', function (model, error) {console.log(error);} );
    },

    validate: function (attrs) {
        var error = false;
        if (!$.trim(attrs.title)) {
            error = 'Введите валидный текст';
        }

        var priority = $.trim(attrs.priority);
        if (!priority || priority <= 0 || priority > 10) {
            error = 'Приоритет должен быть от 0 до 10';
        }

        console.log('App.Models.Task.validate.error - ', error);
        return error;
    }
});